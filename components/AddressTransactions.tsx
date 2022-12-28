import { getAddressTransactions } from "lib/alchemy";
import Details from "components/Details";
import Link from "components/Link";
import type { AddressTransactions } from "types";
import { shortenHash } from "lib/hash";

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
          <TransactionBody
            key={tx.hash}
            routeAddressHash={hash}
            transaction={tx}
          />
        ))}
      </div>
    </Details>
  );
}

interface TransactionBodyProps {
  routeAddressHash: string;
  transaction: AddressTransactions;
}

function TransactionBody({
  routeAddressHash,
  transaction,
}: TransactionBodyProps) {
  return (
    <>
      <Link href={`/transaction/${transaction.hash}`}>
        <p className="text-center">{shortenHash(transaction.hash)}</p>
      </Link>
      <p className="truncate font-normal text-center text-sm">
        {Number(transaction.blockNum)}
      </p>
      <AddressHash
        routeAddressHash={routeAddressHash}
        fromToHash={transaction.from}
      />
      <AddressHash
        routeAddressHash={routeAddressHash}
        fromToHash={transaction.to}
      />
      <p className="truncate font-normal text-center text-sm">
        {/**@TODO use dynamic fixed value according to token metadata */}
        {Number(transaction.value?.toFixed(6))}
      </p>
      <p className="truncate font-normal text-center text-sm">
        {transaction.asset}
      </p>
    </>
  );
}

interface AddressHashProps {
  routeAddressHash: string;
  fromToHash: string | null;
}

function AddressHash({ routeAddressHash, fromToHash }: AddressHashProps) {
  if (!fromToHash) {
    return <p className="truncate font-normal text-center text-sm">null</p>;
  }

  const isSender =
    fromToHash.toLocaleLowerCase() === routeAddressHash.toLowerCase();
  if (isSender) {
    return (
      <p className="truncate font-normal text-center text-sm">
        {shortenHash(fromToHash)}
      </p>
    );
  }

  return (
    <Link href={`/address/${fromToHash}`}>
      <p className="text-center">{shortenHash(fromToHash)}</p>
    </Link>
  );
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
