import ContentLoader from "react-content-loader";
import { Entity } from "types";
import EntityHeader from "./EntityHeader";
interface OverviewSkeletonProps {
  entity: Entity;
  title?: string;
  status?: "loading" | "error";
}

export default function OverviewSkeleton({
  entity,
  title,
  status = "loading",
}: OverviewSkeletonProps) {
  return (
    <div className="w-full shadow-warning border-2 border-dark-100">
      <EntityHeader entity={entity} title={title} />
      <div className="flex p-3 items-center justify-between bg-white-cream-100 font-semibold h-[56px]">
        {status === "error" ? (
          <p className="text-danger-100 font-bold text-sm">
            Error when fetching data. Please refresh the page
          </p>
        ) : (
          <LineLoader />
        )}
      </div>
    </div>
  );
}

function LineLoader() {
  return (
    <ContentLoader speed={1.2} width={400} height={32} viewBox="0 0 400 32">
      <rect x="0" y="0" rx="5" ry="5" width="200" height="32" />
      <rect x="300" y="4" rx="5" ry="5" width="140" height="24" />
    </ContentLoader>
  );
}
