"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";
import { categories } from "@/utils/data";
import Link from "next/link";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="overflow-hidden  relative md:py-2 md:px-52 px-4 bg-white flex justify-between items-center shadow-lg">
      <Link href={`/`}>
        <p className="md:text-4xl text-3xl font-bold capitalize py-2 cursor-pointer">
          newsy
        </p>
      </Link>

      <div className="capitalize font-semibold text-lg overflow-hidden hidden md:flex items-center space-x-4">
        <span className="hover:bg-gray-100 p-3 cursor-pointer rounded-md">
          <Link href={`/search`}>Search</Link>
        </span>
        {categories.map((category) => (
          <>
            <span
              key={category}
              className="hover:bg-gray-100 p-3 cursor-pointer rounded-md"
            >
              <Link href={`/${category}`}>{category}</Link>
            </span>
          </>
        ))}
      </div>

      {/* MOBILE NAVBAR */}
      <p
        className="text-3xl font-bold md:hidden cursor-pointer border-none "
        onClick={() => setShow(true)}
      >
        <FiMenu />
      </p>

      <div
        className={`fixed z-50 md:hidden bg-white w-[70%] border-l-2 top-0 right-0 h-[100vh] 
        ${show ? "translate-x-0" : "translate-x-[100%]"} 
        flex flex-col space-x-4 transition duration-750 overflow-hidden py-10 `}
      >
        <p className="absolute top-5 cursor-pointer left-5 text-3xl font-bold text-gray-800">
          <IoMdCloseCircle onClick={() => setShow(false)} />
        </p>
        <span className="border-b my-3 capitalize text-lg font-semibold border-gray-400">
          <Link href={`/`} onClick={() => setShow(false)}>
            home
          </Link>
        </span>
        <span className="border-b my-3 capitalize text-lg font-semibold border-gray-400">
          <Link href={`/search`} onClick={() => setShow(false)}>
            search
          </Link>
        </span>
        {categories.map((category) => (
          <span
            key={category}
            className="border-b capitalize text-lg font-semibold my-3 border-gray-400"
          >
            <Link href={`/${category}`} onClick={() => setShow(false)}>
              {category}
            </Link>
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
