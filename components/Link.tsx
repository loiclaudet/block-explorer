import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode | React.ReactNode[] | string;
}

export default function Link({ href, children }: LinkProps) {
  return (
    <NextLink
      href={href}
      className="text-night-100 font-semibold text-sm hover:underline"
    >
      {children}
    </NextLink>
  );
}
