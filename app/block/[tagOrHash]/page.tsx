import Block from "components/Block";
import Details from "components/Details";
import { Suspense } from "react";
import ContentLoader from "react-content-loader";

interface BlockPageProps {
  params: {
    tagOrHash: string;
  };
}

export default async function BlockPage({ params }: BlockPageProps) {
  const { tagOrHash } = params;
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
        <Block tagOrHash={tagOrHash} />
      </Suspense>
    </>
  );
}

function LineLoader({ quantity = 1 }: { quantity?: number }) {
  const rectangleHeight = 32;
  return (
    <ContentLoader
      speed={2}
      width={750}
      height={368}
      viewBox={`0 0 750 ${368}`}
    >
      {Array(quantity)
        .fill(0)
        .map((_, i) => {
          return (
            <>
              <rect
                key={i}
                x="0"
                y={i * rectangleHeight + 16 * i}
                rx="5"
                ry="5"
                width="200"
                height={rectangleHeight}
              />
              <rect
                key={i}
                x="300"
                y={i * rectangleHeight + 16 * i}
                rx="5"
                ry="5"
                width="800"
                height={rectangleHeight}
              />
            </>
          );
        })}
    </ContentLoader>
  );
}
