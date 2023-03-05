"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomLoading, setRandomLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) {
      return;
    }

    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch() {
    setRandomLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) {
      return;
    }

    router.push(`/search/web?searchTerm=${response}`);
    setRandomLoading(false);
  }

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow items-center sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500  mr-3" />
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="flex space-x-4 justify-center mt-8">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button
          className="btn flex items-center justify-center disabled:opacity-80 disabled:ring-0"
          onClick={randomSearch}
          disabled={randomLoading}
        >
          {randomLoading ? (
            <Image
              src="spinner.svg"
              alt="Loading..."
              className="text-center"
              height={30}
              width={30}
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </Fragment>
  );
}
