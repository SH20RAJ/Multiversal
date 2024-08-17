import React from "react";
import Link from "next/link";

const Nav = () => {
  const isLoggedIn = 1;
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
      {/* Justify end is used to align the items to the end of the container */}
      <div className="
      ml-auto 
      ">

      {
        !isLoggedIn ? (
          <div className="flex items-center space-x-2 text-black">
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <Link href="/register" className="hover:underline">
          Register
        </Link>
      </div>
        ) : (
          <div className="flex items-center space-x-2 text-black">
            <Link href="/profile" className="hover:underline">
              Profile
            </Link>
          </div>
        )
      }
      </div>
      
    </nav>
  );
};

export default Nav;
