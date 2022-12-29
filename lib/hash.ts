import { Entity } from "types";

export function shortenHash(hash: string) {
  return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
}

export function castBlockTag(blockTag: string): number | string {
  const isBlockHash = blockTag.length === 66 && blockTag.startsWith("0x");
  return isBlockHash ? blockTag : Number(blockTag);
}

export function classifyEthereumHash(
  hash: string
): Exclude<Entity, "ether"> | "unknown" {
  // An Ethereum address hash is 40 hexadecimal characters long and starts with "0x"
  if (hash.length === 42 && hash.startsWith("0x")) {
    return "address";
  }

  // A transaction hash is 32 bytes, or 64 hexadecimal characters long, and starts with "0x"
  if (hash.length === 66 && hash.startsWith("0x")) {
    return "transaction";
  }

  // A block number is a positive integer
  if (Number.isInteger(Number(hash)) && Number(hash) >= 0) {
    return "block";
  }
  // If the hash doesn't match any of the above criteria, it is not a recognized Ethereum hash
  return "unknown";
}
