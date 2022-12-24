import { Entity } from "types";
import EntityHeader from "./EntityHeader";

interface DetailsProps {
  entity: Entity;
  title?: string;
  children: React.ReactNode;
}

export default function Details({ entity, title, children }: DetailsProps) {
  return (
    <div className="overflow-hidden shadow-warning border-2 border-dark-100">
      <EntityHeader entity={entity} title={title} />
      <div className="flex p-3 items-center justify-between bg-white-cream-100 font-semibold">
        {children}
      </div>
    </div>
  );
}
