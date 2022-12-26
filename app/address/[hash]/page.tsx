import { Suspense } from "react";
import Address from "components/Address";
import Details from "components/Details";
import { LineLoader } from "components/Loaders";
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
            <LineLoader quantity={9} />
          </Details>
        }
      >
        {/* @ts-expect-error Server Component */}
        <Address hash={hash} />
      </Suspense>
    </>
  );
}
