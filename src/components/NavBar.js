import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex justify-center space-x-4 p-4 bg-white">
      <Link href="/">
        <span className="text-black">Home</span>
      </Link>
      <Link href="/categories">
        <span className="text-black">Categories</span>
      </Link>
      <Link href="/explore">
        <span className="text-black">Explore</span>
      </Link>
      <Link href="/about">
        <span className="text-black">About</span>
      </Link>
      <Link href="/contact">
        <span className="text-black">Contact</span>
      </Link>
    </nav>
  );
};

export default Nav;
