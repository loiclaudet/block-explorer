import { getLatestBlock } from "lib/alchemy";
import { getEthPrice } from "lib/ethPrice";
import Overview from "components/Overview";
import OverviewsSkeleton from "components/OverviewsSkeleton";

async function getOverviewsData() {
  const [ethPrice, latestBlock] = await Promise.all([
    getEthPrice(),
    getLatestBlock(),
  ]);

  return {
    ethPrice: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(ethPrice),
    latestBlock,
  };
}

export default async function Overviews() {
  try {
    var { ethPrice, latestBlock } = await getOverviewsData();
  } catch (e) {
    console.error(e);
    return <OverviewsSkeleton status="error" />;
  }

  return (
    <div className="flex gap-12">
      <Overview
        entity="block"
        title="Latest block number"
        value={latestBlock.number}
        contentLink={{ href: `/block/${latestBlock.hash}`, text: "View block" }}
      />
      <Overview
        entity="transaction"
        title="Latest block transactions count"
        value={latestBlock.transactions.length}
        contentLink={{
          href: `/transaction/${latestBlock.transactions[0]}`,
          text: "View latest transaction",
        }}
      />
      <Overview entity="ether" title="Ether price" value={ethPrice} />
    </div>
  );
}
