import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="min-w-full h-20 bg-slate-600 flex justify-end items-center text-white">
      <div className="mr-10 flex items-center ">
        <ul className="flex flex-row gap-2">
          <li className="font-bold">
            <Link to={"/"}> Shop </Link>
          </li>
          <li>
            <Link to={"/cart"}>
              {" "}
              <ShoppingCart size={32} />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
