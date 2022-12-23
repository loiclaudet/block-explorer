interface CoinGeckoResponse {
  ethereum: {
    usd: number;
  };
}

export async function getEthPrice(): Promise<number> {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    { next: { revalidate: 60 } }
  ); // revalidate every 60 seconds
  const data: CoinGeckoResponse = await response.json();
  return data.ethereum.usd;
}
