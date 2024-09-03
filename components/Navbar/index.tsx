"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-8 py-2 backdrop-blur-sm shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-center ">
        <img src="/favicon.png" className="w-10" />
        <h2 className="text-xl font-bold">Uni Buddy</h2>
      </div>
      <div className="flex lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#1a1a1a] focus:outline-none"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center text-center gap-5 px-10 py-2 rounded-full`}
      >
        <h2 className="hover:text-[#dddddd] hover:scale-105 transition-all">
          <Link href="/" className="font-semibold">Home</Link>
        </h2>
        <span className="opacity-20">|</span>
        <h2 className="hover:text-[#dddddd] hover:scale-105 transition-all">
          <Link href="/post" className="font-semibold">Post your assignment</Link>
        </h2>
        <span className="opacity-20">|</span>
        <h2 className="hover:text-[#dddddd] hover:scale-105 transition-all">
          <Link href="/assignments" className="font-semibold">Do someone's assignment</Link>
        </h2>
        <Link href="/auth">
          <Button>
            Login / Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;