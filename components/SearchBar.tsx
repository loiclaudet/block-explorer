"use client";
import { useRouter } from "next/navigation";
import { classifyEthereumHash } from "lib/hash";
import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const placeholderStyle = "placeholder:italic placeholder:text-gray-400";
  return (
    <div className="flex border-2 border-dark-100 w-[700px] max-w-full shadow-warning">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for an address, transaction hash, or block number"
        className={`outline-none p-4 h-12 flex-grow bg-white-100 ${placeholderStyle}`}
      />
      <button
        onClick={() => {
          const trimmedValue = value.trim();
          if (trimmedValue.length < 0) {
            return;
          }
          const hashType = classifyEthereumHash(trimmedValue);
          if (hashType === "unknown") {
            return;
          }
          setValue("");
          router.push(`/${hashType}/${trimmedValue}`);
        }}
        className="outline-none w-12 h-12 flex justify-center items-center bg-mint-200 hover:bg-mint-100 focus:bg-mint-100 border-l-2 border-dark-100 transition-colors duration-500"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m20 20-1.6-1.6m-6.8.8a7.601 7.601 0 1 0 0-15.202 7.601 7.601 0 0 0 0 15.202v0Z"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
