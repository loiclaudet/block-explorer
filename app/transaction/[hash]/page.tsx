import Details from "components/Details";
import { Suspense } from "react";
import Transaction from "components/Transaction";
import { LineLoader } from "components/Loaders";

interface TransactionPageProps {
  params: {
    hash: string;
  };
}

export default async function TransactionPage({
  params,
}: TransactionPageProps) {
  const { hash } = params;
  return (
    <>
      <Suspense
        fallback={
          <Details entity="transaction" title="Transaction details">
            <LineLoader quantity={9} />
          </Details>
        }
      >
        {/* @ts-expect-error Server Component */}
        <Transaction hash={hash} />
      </Suspense>
    </>
  );
}
