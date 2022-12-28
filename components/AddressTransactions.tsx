import { getAddressTransactions } from "libs/alchemy";
import Details from "components/Details";
import Link from "components/Link";
import type { AddressTransactions } from "types";

interface AddressTransactionsProps {
  hash: string;
}

export default async function AddressTransactions({
  hash,
}: AddressTransactionsProps) {
  let transactions!: AddressTransactions[];
  try {
    transactions = await getAddressTransactions(hash);
  } catch (e) {
    console.error(e);
    return (
      <Details entity="transaction" title={`Address transactions`}>
        <p className="text-danger-100 font-bold text-sm">
          Error when fetching address transactions. Please refresh the page.
        </p>
      </Details>
    );
  }
  if (transactions.length === 0) {
    return (
      <Details entity="transaction" title={`Address transactions`}>
        <p className="text-danger-100 font-bold text-sm">
          No transactions found for this address.
        </p>
      </Details>
    );
  }

  return (
    <Details
      entity="transaction"
      title={`Address transactions (last ${transactions.length})`}
    >
      <div className="w-full grid grid-cols-[repeat(6,_1fr)] gap-y-4">
        <TransactionHead />
        {transactions.map((tx) => (
          <TransactionBody key={tx.hash} {...tx} />
        ))}
      </div>
    </Details>
  );
}

function TransactionBody(transaction: AddressTransactions) {
  return (
    <>
      <Link href={`/transaction/${transaction.hash}`}>
        <p className="text-center">{shortenHash(transaction.hash)}</p>
      </Link>
      <p className="truncate font-normal text-center text-sm">
        {Number(transaction.blockNum)}
      </p>
      <Link href={`/address/${transaction.from}`}>
        <p className="text-center">{shortenHash(transaction.from)}</p>
      </Link>
      {transaction.to ? (
        <Link href={`/address/${transaction.to}`}>
          <p className="text-center">{shortenHash(transaction.to)}</p>
        </Link>
      ) : (
        <p className="truncate font-normal text-center text-sm">null</p>
      )}
      <p className="truncate font-normal text-center text-sm">
        {transaction.value?.toString()}
      </p>
      <p className="truncate font-normal text-center text-sm">
        {transaction.asset}
      </p>
    </>
  );
}

function shortenHash(hash: string) {
  return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
}

function TransactionHead() {
  const transactionKeys = [
    "hash",
    "block number",
    "from",
    "to",
    "value",
    "asset",
  ];
  return (
    <>
      {transactionKeys.map((key) => (
        <h3
          key={key}
          className="text-sm text-center font-semibold first-letter:uppercase"
        >
          {key}
        </h3>
      ))}
    </>
  );
}
