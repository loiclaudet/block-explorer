import { Entity, ILink } from "types";
import EntityHeader from "./EntityHeader";
import Link from "./Link";
interface OverviewProps {
  entity: Entity;
  title?: string;
  headerLink?: ILink;
  contentLink?: ILink;
  value: string | number;
}

export default function Overview({
  entity,
  headerLink,
  contentLink,
  title,
  value,
}: OverviewProps) {
  return (
    <div className="w-full shadow-warning border-2 border-dark-100">
      <EntityHeader entity={entity} title={title} link={headerLink} />
      <div className="flex p-3 items-center justify-between bg-white-cream-100 font-semibold">
        <p className="text-2xl font-semibold">{value.toLocaleString()}</p>
        {contentLink && <Link href={contentLink.href}>{contentLink.text}</Link>}
      </div>
    </div>
  );
}
