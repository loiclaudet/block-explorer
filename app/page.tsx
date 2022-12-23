import { Suspense } from "react";
import Overviews from "components/Overviews";
import OverviewsSkeleton from "components/OverviewsSkeleton";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<OverviewsSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <Overviews />
      </Suspense>
    </>
  );
}
