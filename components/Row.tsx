export default function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h3 className="text-sm w-[180px] font-semibold first-letter:uppercase">
        {label}
      </h3>
      {children}
    </>
  );
}
