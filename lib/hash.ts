export function shortenHash(hash: string) {
  return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
}

export function castBlockTag(blockTag: string): number | string {
  const isBlockHash = blockTag.length === 66 && blockTag.startsWith("0x");
  return isBlockHash ? blockTag : Number(blockTag);
}
