"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!term.trim()) {
      return;
    }

    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-2xl items-center gap-x-4"
    >
      <input
        type="text"
        className="flex-1 focus:outline-none "
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {term && (
        <div className="border-r-2 border-gray-400 pr-3">
          <RxCross2
            onClick={() => setTerm("")}
            className="text-2xl text-gray-500 cursor-pointer"
          />
        </div>
      )}
      <BsFillMicFill className="hidden sm:inline-flex text-xl text-blue-500" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
}
