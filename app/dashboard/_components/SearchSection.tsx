import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-blue-500 to-purple-500 text-white flex justify-center items-center flex-col ">
      <h2 className="text-3xl font-bold ">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[30%] text-black ">
          <Search className="text-blue-500" />
          <input
            type="text"
            placeholder="search...."
            className="bg-transparent outline-none w-full"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
