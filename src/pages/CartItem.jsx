import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="flex items-center w-96 h-60 shadow-lg rounded-3xl">
      <img className="w-44 h-auto" src={productImage} />
      <div className="w-full text-2xl text-black">
        <p className="font-bold pb-4">{productName}</p>
        <p className="text-xl">$ {price}</p>
        <div className="flex flex-center font-bold">
          <button
            className="flex flex-row items-center justify-center"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className="w-14 mx-4 flex flex-row items-center justify-center"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
