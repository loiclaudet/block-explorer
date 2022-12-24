import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export async function getLatestBlock() {
  const latestBlockTag = await alchemy.core.getBlockNumber();
  const latestBlock = await alchemy.core.getBlock(latestBlockTag);
  return latestBlock;
}

export async function getBlock(blockHashOrBlockTag: number | string) {
  const block = await alchemy.core.getBlock(blockHashOrBlockTag);
  return block;
}

export async function getTransaction(transactionHash: string) {
  const transaction = await alchemy.core.getTransaction(transactionHash);
  return transaction;
}
