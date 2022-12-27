import { Suspense } from "react";
import Address from "components/Address";
import Details from "components/Details";
import { LineLoader } from "components/Loaders";
import AddressTransactions from "components/AddressTransactions";
interface AddressPageProps {
  params: {
    hash: string;
  };
}

export default async function AddressPage({ params }: AddressPageProps) {
  const { hash } = params;
  return (
    <>
      <Suspense
        fallback={
          <Details entity="address" title="Address details">
            <LineLoader quantity={2} />
          </Details>
        }
      >
        {/* @ts-expect-error Server Component */}
        <Address hash={hash} />
      </Suspense>
      <Suspense
        fallback={
          <Details entity="transaction" title="Address transactions">
            <LineLoader quantity={10} />
          </Details>
        }
      >
        {/* @ts-expect-error Server Component */}
        <AddressTransactions hash={hash} />
      </Suspense>
    </>
  );
}
