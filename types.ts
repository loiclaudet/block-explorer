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

export interface ILink {
  href: string;
  text: string;
}

export type Entity = "block" | "transaction" | "address" | "ether";
export type Color = "sun" | "purple" | "danger";
