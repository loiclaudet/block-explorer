import Overview from "components/Overview";

export default async function Home() {
  return (
    <div className="flex gap-12">
      <Overview
        entity="block"
        title="blocks"
        SVGIcon="block"
        value={1234}
        contentLink="/"
      />
      <Overview
        entity="transaction"
        title="transactions"
        SVGIcon="transaction"
        value={991234}
        contentLink="/"
      />
      <Overview
        entity="asset"
        title="Ether Price"
        SVGIcon="ether"
        value={1282.14}
      />
    </div>
  );
}
