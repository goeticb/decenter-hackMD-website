import contractAddresses from "../config/contractAddresses";
import ReaderABI from '../abis/ReaderABI.json'
import { bytesToString } from "@defisaver/tokens/esm/utils";
import { collateralLiquidationRatio, collateralPrice } from "../config/collateralInfo";
import { getClient } from "../config/client";


export const loadData = (id, setCdpData) => {
    const client = getClient();
    client.readContract({
        address: contractAddresses.reader.mainnet,
        abi: ReaderABI,
        functionName: 'readCdpInfo',
        args: [id],
    })
        .then((result) => {
            if (bytesToString(result.ilk) != 'ETH-A' && bytesToString(result.ilk) != 'USDC-A' && bytesToString(result.ilk) != 'WBTC-A') {
                setCdpData('Collateral type not supported.');
                return;
            }

            const finalData = formatDataFromContract(result);

            setCdpData(finalData);
        })
        .catch(async (err) => {
            if (err?.message?.includes('429') || err?.name === 'FetchError') {
                await sleep(100);
                loadData();
            }
            else
                console.error(err);
        });
};

const formatDataFromContract = (result) => {

    const collateralType = bytesToString(result.ilk);
    const collateral = (Number(result.collateral) / 10 ** 18).toFixed(2)
    const debt = (Number(result.debt) / 10 ** 18).toFixed(2)
    const debtWithInterest = (Number(result.debtWithInterest) / 10 ** 18).toFixed(2)
    const collateralizationRatio = (collateralPrice[bytesToString(result.ilk)] * collateral / debtWithInterest * 100).toFixed(2)
    const liquidationRatio = collateralLiquidationRatio[bytesToString(result.ilk)] * 100 + '%'
    const maxWithdrawCollateral = (collateral - (debtWithInterest * collateralLiquidationRatio[bytesToString(result.ilk)]) / collateralPrice[bytesToString(result.ilk)]).toFixed(2)
    const maxAdditionalDebt = ((collateral * collateralPrice[bytesToString(result.ilk)]) / collateralLiquidationRatio[bytesToString(result.ilk)] - debtWithInterest).toFixed(2)

    return {
        collateralType,
        collateral,
        debt,
        debtWithInterest,
        collateralizationRatio,
        liquidationRatio,
        maxWithdrawCollateral,
        maxAdditionalDebt
    }
}