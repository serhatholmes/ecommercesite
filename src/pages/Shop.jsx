import React from "react";
import { PRODUCTS } from "../products";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="">
      <div className="mt-10 text-4xl font-bold flex justify-center text-slate-600">
        <h1>Tekno Media</h1>
      </div>
      <div className="w-screen h-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center px-2 mx-2">
        {PRODUCTS.map((product, index) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
