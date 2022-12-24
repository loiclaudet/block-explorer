import { getBlock } from "libs/alchemy";
import Details from "./Details";
import Link from "./Link";

interface BlockProps {
  tagOrHash: string;
}
const hiddenKeys = ["transactions", "_difficulty", "difficulty", "nonce"];
const linkKeys = ["parentHash"];
export default async function Block({ tagOrHash }: BlockProps) {
  let block;
  try {
    block = await getBlock(tagOrHash);
  } catch (e) {
    console.error(e);
    return (
      <Details entity="block" title="Block details">
        <p className="text-danger-100 font-bold text-sm">
          Error when fetching block data. Please refresh the page.
        </p>
      </Details>
    );
  }
  const rows = [];
  for (const [key, value] of Object.entries(block)) {
    if (hiddenKeys.includes(key)) {
      continue;
    }
    rows.push(Row({ label: key, value: value.toString() }));
  }
  return (
    <Details entity="block" title="Block details">
      <div className="grid grid-cols-[180px_1fr] gap-y-4">{rows}</div>
    </Details>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <>
      <h3 className="w-[180px] font-semibold first-letter:uppercase">
        {label}
      </h3>
      {linkKeys.includes(label) ? (
        <Link href={`/block/${value}`}>{value}</Link>
      ) : (
        <p className="truncate font-normal text-sm">{value}</p>
      )}
    </>
  );
}
