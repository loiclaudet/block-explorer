import { Network, Alchemy, AssetTransfersCategory } from "alchemy-sdk";
import { MAX_TX_COUNT } from "lib/constants";

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

export async function getBalance(addressHash: string) {
  const balance = await alchemy.core.getBalance(addressHash);
  return balance;
}

const addressTransactionOptions = {
  fromBlock: "0x0",
  category: [
    AssetTransfersCategory.EXTERNAL,
    AssetTransfersCategory.INTERNAL,
    AssetTransfersCategory.ERC20,
    AssetTransfersCategory.ERC721,
    AssetTransfersCategory.ERC1155,
  ],
  maxCount: MAX_TX_COUNT,
};

export async function getAddressTransactions(addressHash: string) {
  const transactionsFromPromise = alchemy.core.getAssetTransfers({
    ...addressTransactionOptions,
    fromAddress: addressHash,
  });
  const transactionsToPromise = alchemy.core.getAssetTransfers({
    ...addressTransactionOptions,
    toAddress: addressHash,
  });
  const [transactionsFrom, transactionsTo] = await Promise.all([
    transactionsFromPromise,
    transactionsToPromise,
  ]);

  const transactions = [
    ...transactionsFrom.transfers,
    ...transactionsTo.transfers,
  ]
    .sort((a, b) => Number(a.blockNum) - Number(b.blockNum))
    .slice(0, MAX_TX_COUNT);

  return transactions;
}
