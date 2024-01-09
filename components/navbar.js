import React from "react";
import { Link } from "@/navigation";

// components
import LangSwitcher from "./langSwitcher";

function NavBar() {
  return (
    <div className="min-h-[64px] container mx-auto flex items-center justify-between p-4 m-4 w-full bg-white rounded-xl gap-x-4">
      <div className="uppercase font-bold hover:text-gray-500">
        <Link href="/">Home</Link>
      </div>
      <div className="flex flex-row gap-x-4 ">
        <Link href="/about" className="hover:text-gray-500">
          About
        </Link>
        <LangSwitcher />
      </div>
    </div>
  );
}

export default NavBar;
