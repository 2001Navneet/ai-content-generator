import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center">
      <div className="flex gap-2 item-center p-2 rounded-md max-w-lg">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="  outline-none "
        />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-blue-500 p-1 rounded-full text-xs text-white px-2">
          🔥Join membership just for &#8377;399/month
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
