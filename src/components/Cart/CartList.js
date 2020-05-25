import React from "react";
import CartItem from "./CartItem";

const CartList = ({ cart }) => {
  return (
    <div className="caontainer-fluid">
      {cart.map((item) => {
        return <CartItem key={item.id} product={item} />;
      })}
    </div>
  );
};

export default CartList;
