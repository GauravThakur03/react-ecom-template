import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState({
    storeProducts: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalProduct: {},
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  });

  const getItem = (id) => {
    return products.storeProducts.find((item) => item.id === id);
  };
  const handleDetail = (id) => {
    const detailProduct = getItem(id);
    setProducts({ ...products, detailProduct });
  };
  const setData = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      tempProducts = [...tempProducts, { ...item }];
    });
    setProducts({
      ...products,
      storeProducts: tempProducts,
      detailProduct: { ...detailProduct },
      cart:[]
    });
  };
  const addToCart = (id) => {
    const tempProducts = [...products.storeProducts];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts((products) => {
      return {
        ...products,
        storeProducts: tempProducts,
        cart: [...products.cart, product],
      };
    });
  };

  const openModal = (id) => {
    const product = getItem(id);
    setProducts((products) => {
      return { ...products, modalOpen: true, modalProduct: product };
    });
  };

  const closeModal = () => {
    setProducts((products) => {
      return { ...products, modalOpen: false, modalProduct: {} };
    });
  };

  const increment = (id) => {
    const tempCart = products.cart;
    const product = tempCart.find((item) => item.id === id),
      index = tempCart.indexOf(product);
    const tempProduct = tempCart[index];
    tempProduct.count = tempProduct.count + 1;
    tempProduct.total = tempProduct.price * tempProduct.count;
    setProducts((products) => {
      return { ...products, cart: tempCart };
    });
  };
  const decrement = (id) => {
    const tempCart = products.cart;
    const product = tempCart.find((item) => item.id === id),
      index = tempCart.indexOf(product);
    const tempProduct = tempCart[index];
    if (tempProduct.count > 1) {
      tempProduct.count = tempProduct.count - 1;
      tempProduct.total = tempProduct.price * tempProduct.count;
      setProducts((products) => {
        return { ...products, cart: tempCart };
      });
    } else {
      removeItem(id);
    }
  };
  const clearCart = () => {
    setData();
  };
  const removeItem = (id) => {
    const tempCart = [...products.cart];
    const storeProducts = [...products.storeProducts];
    const cart = tempCart.filter((item) => item.id !== id);
    const index = storeProducts.indexOf(getItem(id));
    let product = storeProducts[index];
    product.inCart = false;
    product.count = 0;
    product.total = 0;

    setProducts((products) => {
      return { ...products, cart, storeProducts };
    });
  };

  const addTotals = () => {
    let subTotal = 0;
    products.cart.forEach((item) => {
      subTotal += item.total;
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));

    const total = subTotal + tax;

    setProducts((products) => {
      return {
        ...products,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  useEffect(() => {
    addTotals();
  }, [products.cart]);

  useEffect(() => {
    setData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...products,
        addToCart,
        handleDetail,
        openModal,
        closeModal,
        increment,
        decrement,
        clearCart,
        removeItem,
        addTotals,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
