import { Entity } from "types";
import EntityHeader from "./EntityHeader";
import Link from "./Link";

interface OverviewProps {
  entity: Entity;
  title?: string;
  value?: string | number;
  SVGIcon?: string;
  contentLink?: string;
  headerLink?: string;
}

export default function Overview({
  entity,
  value,
  SVGIcon,
  contentLink,
  headerLink,
  title,
}: OverviewProps) {
  return (
    <div className="w-full shadow-warning border-2 border-dark-100">
      <EntityHeader
        entity={entity}
        SVGIcon={SVGIcon}
        title={title}
        link={headerLink}
      />
      <div className="flex p-3 items-center justify-between bg-white-cream-100 font-semibold">
        <p className="text-2xl font-semibold">{value}</p>
        {contentLink && <Link href={contentLink}>View all</Link>}
      </div>
    </div>
  );
}
