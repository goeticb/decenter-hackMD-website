import { zeroAddress } from "viem";
import { getClient } from "../config/client";
import contractAddresses from "../config/contractAddresses";
import Semaphore from "../utils/Semaphore";
import { sleep } from "../utils/sleep";
import VaultInfoABI from '../abis/VaultInfoABI.json'
import { bytesToString } from "@defisaver/tokens/esm/utils";

const client = getClient();
const vaultInfoAddress = contractAddresses.vaultInfo.mainnet;
const semaphore = new Semaphore(5);

let distance = 0;
let potentialFinalCDPs = [];
let batch;
let rightLimitNotReached = true;
let requestFulfilledCounter = 0;
let requestsToBeFulfilledCounter = 0;
let startingId;

export const fillSemaphore = async (ID, collateralType, batchSize, setProgressCount, setPercent, setIsSearching, setCdpList) => {
    batch = batchSize;

    if (distance == 0) {
        startingId = ID;
        semaphore.callFunction(checkCDPbyId, ID, collateralType, setProgressCount, setPercent, setIsSearching, setCdpList);
        requestsToBeFulfilledCounter++;
        batch--;
        distance++;
    }

    while (batch > 0) {
        if (rightLimitNotReached) {
            semaphore.callFunction(checkCDPbyId, ID + distance, collateralType, setProgressCount, setPercent, setIsSearching, setCdpList);
            requestsToBeFulfilledCounter++;
            batch--;
        }

        if (ID - distance > 0 && batch > 0) {
            semaphore.callFunction(checkCDPbyId, ID - distance, collateralType, setProgressCount, setPercent, setIsSearching, setCdpList);
            requestsToBeFulfilledCounter++;
            batch--;
        }

        else if (ID - distance > 0 && rightLimitNotReached == false)
            break;
        distance++;
    }
}

export const resetParameters = () => {
    potentialFinalCDPs = [];
    requestsToBeFulfilledCounter = 0;
    requestFulfilledCounter = 0;
    rightLimitNotReached = true;
    distance = 0;
    startingId = 0;
}

const checkCDPbyId = async (ID, collateralType, setProgressCount, setPercent, setIsSearching, setCdpList) => {
    client.readContract({
        address: vaultInfoAddress,
        abi: VaultInfoABI,
        functionName: 'getCdpInfo',
        args: [ID],
    })
        .then((result) => {
            handleCDP(result, ID, collateralType, setProgressCount, setPercent, setIsSearching, setCdpList);
        })
        .catch(async (err) => {
            if (err?.message?.includes('429') || err?.name === 'FetchError') {
                await sleep(100);
                semaphore.callFunction(checkCDPbyId, ID, collateralType, setProgressCount, setPercent, setIsSearching, setCdpList);
            }
            else
                console.error(err);
        });
};

const handleCDP = async (result, ID, collateralType, setProgressCount, setPercent, setIsSearching, setCdpList) => {
    if (result[0] == zeroAddress && rightLimitNotReached)
        rightLimitNotReached = false;

    else if (bytesToString(result[3]) == collateralType) {
        potentialFinalCDPs.push({
            id: ID,
            owner: result[2],
            debt: result[5],
            collateral: result[4]
        });

        if (potentialFinalCDPs.length <= 20) {
            setProgressCount(potentialFinalCDPs.length);
            setPercent(potentialFinalCDPs.length * 100 / 20);
        }
    }

    requestFulfilledCounter++;

    if (potentialFinalCDPs.length < 20 && requestFulfilledCounter == requestsToBeFulfilledCounter && (rightLimitNotReached || startingId - distance > 0)) {
        await sleep(300);

        fillSemaphore(startingId, collateralType, 6, setProgressCount, setPercent, setIsSearching, setCdpList);
    }

    else if (potentialFinalCDPs.length >= 20 && requestFulfilledCounter >= requestsToBeFulfilledCounter) {
        potentialFinalCDPs.sort((a, b) => {
            return Math.abs(a.id - startingId) - Math.abs(b.id - startingId);
        });

        while (potentialFinalCDPs.length > 20)
            potentialFinalCDPs.pop();

        setCdpList(potentialFinalCDPs);
        setIsSearching(false);
    }
};