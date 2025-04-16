import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

let clientInstance;

export function getClient() {
    if (!clientInstance) {
        clientInstance = createPublicClient({
            chain: mainnet,
            transport: http(import.meta.env.VITE_NODE_RPC_URL),
        });
    }
    return clientInstance;
}
