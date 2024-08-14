import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center p-4 bg-white border-b-2 border-spacing-y-60">
      <div className="flex items-center space-x-2 text-black">
        <Link href="/" className=" ">
          <div className="text-xl font-bold text-black">Multiversal Writer</div>
        </Link>
        <span>|</span>
        <Link href="/explore" className="hover:underline">
          Explore
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
