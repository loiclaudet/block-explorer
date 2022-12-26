import ContentLoader from "react-content-loader";

export function LineLoader({ quantity = 1 }: { quantity?: number }) {
  const rectangleHeight = 24;
  const loaderHeight = rectangleHeight * 1.5 * quantity;
  return (
    <ContentLoader
      speed={2}
      width={750}
      height={loaderHeight}
      viewBox={`0 0 750 ${loaderHeight}`}
    >
      {Array(quantity)
        .fill(0)
        .map((_, i) => {
          return (
            <>
              <rect
                x="0"
                y={i * (rectangleHeight * 1.6)}
                rx="5"
                ry="5"
                width="200"
                height={rectangleHeight}
              />
              <rect
                x="300"
                y={i * (rectangleHeight * 1.6)}
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
