import Link from "next/link";

export default function Logo() {
  const triangleStyle =
    "after:absolute after:w-0 after:h-0 after:border-solid after:border-t-[32px] after:border-x-[16px] after:border-transparent after:border-t-mint-200 after:right-9 after:-bottom-[32px] after:drop-shadow-dark hover:after:border-t-mint-100 after:focus:border-t-mint-100 after:transition-colors after:duration-500";
  return (
    <Link
      href="/"
      className={`outline-none transition-colors duration-500 hover:bg-mint-100 focus:bg-mint-100 relative bg-mint-200 border-dark-100 border-2 shadow-dark px-4 py-2 w-52 ${triangleStyle}`}
    >
      <h1 className="font-extrabold flex flex-col">
        <span className="text-[26px] self-start">Ethereum</span>
        <span className="text-[36px] italic self-end leading-[100%]">Scan</span>
      </h1>
    </Link>
  );
}
