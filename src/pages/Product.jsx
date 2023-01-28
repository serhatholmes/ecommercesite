import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="rounded-2xl w-64 h-auto flex flex-col justify-center items-center">
      <img src={productImage} />
      <div className="text-center">
        <p className="font-bold">{productName}</p>
        <p>${price}</p>
        <button
          className="text-black max-w-xl bg-transparent px-2 py-2 border-2 border-teal-400 rounded-2xl
         hover:bg-teal-500 hover:text-white hover:cursor-pointer "
          onClick={() => addToCart(id)}
        >
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
