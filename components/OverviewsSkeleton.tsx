"use client";

import OverviewSkeleton from "./OverviewSkeleton";

interface OverviewsSkeletonProps {
  status?: "loading" | "error";
}

export default function OverviewsSkeleton({ status }: OverviewsSkeletonProps) {
  return (
    <div className="flex gap-12">
      <OverviewSkeleton
        entity="block"
        title="Latest block number"
        status={status}
      />
      <OverviewSkeleton
        entity="transaction"
        title="Latest block transactions count"
        status={status}
      />
      <OverviewSkeleton entity="ether" title="Ether price" status={status} />
    </div>
  );
}
