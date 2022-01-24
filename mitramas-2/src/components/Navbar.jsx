import React from "react";
import { BiAnalyse } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full mx-auto shadow-xl py-2">
      <div className="flex flex-row justify-around items-center mx-10">
        <Link to="/">
          <BiAnalyse size={30} className="" color="#000000" />
        </Link>
        <Link to="create" className="font-bold text-gray-800 underline">
          Create
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
