import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);

export async function getLatestBlock() {
  const latestBlockNumber = await alchemy.core.getBlockNumber();
  const latestBlock = await alchemy.core.getBlock(latestBlockNumber);
  return latestBlock;
}
