"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <div className="my-10 flex justify-center h-screen">
      <div className="md:w-[60%] w-[90%] flex flex-col">
        <label htmlFor="search" className="text-xl underline font-bold">
          Search Every News
        </label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          autoFocus={true}
          className=" p-2  rounded-md text-lg outline-none border my-2"
        />
        <button
          disabled={!search}
          onClick={() => router.push(`/search/${search.trim()}?page=1`)}
          className="bg-sky-500 disabled:bg-sky-500/80 disabled:cursor-not-allowed text-white px-5 py-2 rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
