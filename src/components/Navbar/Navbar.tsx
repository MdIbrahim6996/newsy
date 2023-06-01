"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";
import { categories } from "@/utils/data";
import Link from "next/link";
const Navbar = () => {
  const [tran, setTran] = useState(100);
  return (
    <nav className="relative md:py-2 md:px-52 px-4 bg-white flex justify-between items-center shadow-lg">
      <p className="md:text-4xl text-3xl font-bold capitalize py-2">newsy</p>

      <div className="capitalize font-semibold text-lg hidden md:flex items-center space-x-4">
        <span className="hover:bg-gray-100 p-3 cursor-pointer rounded-md">
          <Link href={`/`}>Home</Link>
        </span>
        {categories.map((category) => (
          <span
            key={category}
            className="hover:bg-gray-100 p-3 cursor-pointer rounded-md"
          >
            <Link href={`/${category}`}>{category}</Link>
          </span>
        ))}
      </div>

      <p
        className="text-3xl font-bold md:hidden cursor-pointer border-none "
        onClick={() => setTran(0)}
      >
        <FiMenu />
      </p>

      <div
        className={`absolute z-[200] bg-white md:w-[20%] w-[55%] border-l-2 top-0 right-0 h-[100vh] 
        translate-x-[${tran}%] capitalize font-semibold text-lg flex flex-col
          space-x-4 transition duration-500 overflow-hidden py-10 ${
            tran === 100 ? "hidden" : ""
          }`}
      >
        <p
          className="absolute top-5 cursor-pointer left-5 text-3xl font-bold text-gray-800"
          onClick={() => setTran(100)}
        >
          <IoMdCloseCircle />
        </p>
        <span className="border-b my-3 border-gray-400">
          <Link href={`/`}>Home</Link>
        </span>
        {categories.map((category) => (
          <span key={category} className="border-b my-3 border-gray-400">
            <Link href={`/${category}`}>{category}</Link>
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
