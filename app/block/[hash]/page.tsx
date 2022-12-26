import Block from "components/Block";
import Details from "components/Details";
import { LineLoader } from "components/Loaders";
import { Suspense } from "react";

interface BlockPageProps {
  params: {
    hash: string;
  };
}

export default async function BlockPage({ params }: BlockPageProps) {
  const { hash } = params;
  return (
    <>
      <Suspense
        fallback={
          <Details entity="block" title="Block details">
            <LineLoader quantity={9} />
          </Details>
        }
      >
        {/* @ts-expect-error Server Component */}
        <Block hash={hash} />
      </Suspense>
    </>
  );
}
