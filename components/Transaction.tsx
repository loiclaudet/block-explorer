import { Utils } from "alchemy-sdk";

import { getTransaction } from "libs/alchemy";
import Details from "./Details";
import Link from "./Link";
import Row from "./Row";

interface TransactionProps {
  hash: string;
}

export default async function Transaction({ hash }: TransactionProps) {
  let tx;
  try {
    tx = await getTransaction(hash);
    if (tx === null) {
      throw new Error("Transaction not found");
    }
  } catch (e) {
    console.error(e);
    return (
      <Details entity="transaction" title="Transaction details">
        <p className="text-danger-100 font-bold text-sm">
          Error when fetching tx data. Please refresh the page.
        </p>
      </Details>
    );
  }
  return (
    <Details entity="transaction" title="Transaction details">
      <div className="grid grid-cols-[180px_1fr] gap-y-4">
        <Row label="value">
          <p className="truncate font-normal text-sm">
            {`${parseInt(tx.value._hex, 16)} Ξ`}
          </p>
        </Row>
        <Row label="from">
          <Link href={`/address/${tx.from}`}>{tx.from}</Link>
        </Row>
        <Row label="to">
          <Link href={`/address/${tx.to}`}>{tx.to}</Link>
        </Row>
        {tx.gasPrice && (
          <Row label="gas price">
            <p className="truncate font-normal text-sm">
              {`${Utils.formatUnits(tx.gasPrice, "gwei")} gwei`}
            </p>
          </Row>
        )}
        <Row label="gas limit">
          <p className="truncate font-normal text-sm">
            {parseInt(tx.gasLimit._hex, 16)}
          </p>
        </Row>
        {tx.maxPriorityFeePerGas && (
          <Row label="maxPriorityFeePerGas">
            <p className="truncate font-normal text-sm">
              {Utils.formatUnits(tx.maxPriorityFeePerGas?.toString(), "gwei")}
            </p>
          </Row>
        )}
        {tx.maxFeePerGas && (
          <Row label="maxFeePerGas">
            <p className="truncate font-normal text-sm">
              {Utils.formatUnits(tx.maxFeePerGas?.toString(), "gwei")}
            </p>
          </Row>
        )}
        <Row label="hash">
          <p className="truncate font-normal text-sm">{tx.hash}</p>
        </Row>
        <Row label="nonce">
          <p className="truncate font-normal text-sm">{tx.nonce}</p>
        </Row>
        <Row label="block hash">
          <Link href={`/block/${tx.blockHash}`}>{tx.blockHash}</Link>
        </Row>
        <Row label="block number">
          <Link href={`/block/${tx.blockHash}`}>{tx.blockNumber}</Link>
        </Row>
      </div>
    </Details>
  );
}
