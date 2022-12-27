interface _Block {
  hash: string;
  parentHash: string;
  number: number;

  timestamp: number;
  nonce: string;
  difficulty: number;
  _difficulty: Number; // BigNumber

  gasLimit: Number; // BigNumber
  gasUsed: Number; // BigNumber

  miner: string;
  extraData: string;

  baseFeePerGas?: null | Number; // BigNumber
}
export interface Block extends _Block {
  transactions: Array<string>;
}

/**
 * Represents a transfer event that is returned in a {@link AssetTransfersResponse}.
 *
 * @public
 */
export interface AddressTransactions {
  /** The unique ID of the transfer. */
  uniqueId: string;
  /** The block number where the transfer occurred. */
  blockNum: string;
  /** The from address of the transfer. */
  from: string;
  /** The to address of the transfer. */
  to: string | null;
  /**
   * Converted asset transfer value as a number (raw value divided by contract
   * decimal). `null` if ERC721 transfer or contract decimal not available.
   */
  value: number | null;

  /** The token id of the token transferred. */
  tokenId: string | null;
  /**
   * Returns the token's symbol or ETH for other transfers. `null` if the
   * information was not available.
   */
  asset: string | null;
  /** The transaction hash of the transfer transaction. */
  hash: string;
}

export interface ILink {
  href: string;
  text: string;
}

export type Entity = "block" | "transaction" | "address" | "ether";
export type Color = "sun" | "purple" | "danger";
