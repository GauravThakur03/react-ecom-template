import React, { useContext } from "react";
import Title from "./../Title";
import CartColumns from "./CartColumns";
import { ProductContext } from "../../context";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  const { cart, cartSubTotal, cartTax, cartTotal, clearCart } = useContext(
    ProductContext
  );

  return (
    <section>
      {cart.length ? (
        <>
          <Title name="your" title="cart"></Title>
          <CartColumns />
          <CartList cart={cart} />
          <CartTotals
            values={{ cartSubTotal, cartTax, cartTotal, clearCart }}
          />
        </>
      ) : (
        <EmptyCart></EmptyCart>
      )}
    </section>
  );
};

export default Cart;
