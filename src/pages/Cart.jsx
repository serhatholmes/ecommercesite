import React, { useContext } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/ShopContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold text-2xl py-2">Your Cart Items</h1>
      </div>
      <div className="flex flex-col w-96 h-auto shadow-lg rounded-3xl">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="pt-2">
          <p className="bg-gray-300 rounded-lg p-1 text-center font-bold">
            Subtotal: ${totalAmount}
          </p>
          <div className="flex justify-between gap-4 mt-2">
            <button
              className="bg-slate-800 text-white p-1 rounded-md cursor-pointer shadow-xl shadow-black pt-2"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
            <button className="bg-slate-600 text-white p-1 rounded-md cursor-pointer shadow-xl shadow-black pt-2">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
