import { Utils } from "alchemy-sdk";
import { getBlock } from "libs/alchemy";
import Details from "components/Details";
import Link from "components/Link";
import Row from "components/Row";

interface BlockProps {
  hash: string;
}

export default async function Block({ hash }: BlockProps) {
  let block;
  try {
    block = await getBlock(hash);
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

  return (
    <Details entity="block" title="Block details">
      <div className="grid grid-cols-[180px_1fr] gap-y-4">
        <Row label="hash">
          <p className="truncate font-normal text-sm">{block.hash}</p>
        </Row>
        <Row label="number">
          <p className="truncate font-normal text-sm">{block.number}</p>
        </Row>
        <Row label="timestamp">
          <p className="truncate font-normal text-sm">{block.timestamp}</p>
        </Row>
        <Row label="gas limit">
          <p className="truncate font-normal text-sm">
            {block.gasLimit.toString()}
          </p>
        </Row>
        <Row label="gas used">
          <p className="truncate font-normal text-sm">
            {`${block.gasUsed.toString()} (${(
              (block.gasUsed.toNumber() / block.gasLimit.toNumber()) *
              100
            ).toFixed(2)}%)`}
          </p>
        </Row>
        {block.baseFeePerGas && (
          <Row label="baseFeePerGas">
            <p className="truncate font-normal text-sm">
              {`${Utils.formatUnits(
                block.baseFeePerGas.toString(),
                "gwei"
              )} gwei`}
            </p>
          </Row>
        )}
        <Row label="parentHash">
          <Link href={`/block/${block.parentHash}`}>{block.parentHash}</Link>
        </Row>
      </div>
    </Details>
  );
}
