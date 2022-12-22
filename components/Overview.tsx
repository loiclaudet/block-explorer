import Image from "next/image";
import Link from "./Link";

interface OverviewProps {
  entity: Entity;
  title?: string;
  value?: string | number;
  SVGIcon?: string;
  link?: string;
}

type Entity = "block" | "transaction" | "address" | "asset";
type Color = "sun" | "purple" | "danger";
const EntityToColor = new Map<Entity, Color>([
  ["block", "purple"],
  ["transaction", "danger"],
  ["address", "sun"],
  ["asset", "sun"],
]);

export default function Overview({
  entity,
  value,
  SVGIcon,
  link,
  title,
}: OverviewProps) {
  return (
    <div className="w-full shadow-warning border-2 border-dark-100">
      <header
        className={`flex p-3 gap-3 items-center border-b-2 border-dark-100 ${getHeaderBackgroundColor(
          entity
        )}`}
      >
        {SVGIcon && (
          <Image
            width={16}
            height={16}
            alt={entity}
            src={`/icons/${SVGIcon}.svg`}
          />
        )}
        <h2 className="font-semibold first-letter:uppercase">
          {title ?? entity}
        </h2>
      </header>
      <div className="flex p-3 items-center justify-between bg-white-cream-100 font-semibold">
        <p className="text-2xl font-semibold">{value}</p>
        {link && <Link href={link}>View all</Link>}
      </div>
    </div>
  );
}

function getHeaderBackgroundColor(entity: Entity) {
  const color = EntityToColor.get(entity);
  // Switch case is used here to deal with TailwindCSS that doesn't support dynamic class names
  switch (color) {
    case "sun":
      return `bg-sun-200`;
    case "purple":
      return `bg-purple-200`;
    case "danger":
      return `bg-danger-200`;
    default:
      return `bg-sun-200`;
  }
}
