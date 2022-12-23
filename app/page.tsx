import { Suspense } from "react";
import Overviews from "components/Overviews";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <Overviews />;
      </Suspense>
    </>
  );
}
