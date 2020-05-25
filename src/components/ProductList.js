import React, { useContext } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductContext } from "./../context";

const ProductList = () => {
  const products = useContext(ProductContext);
  const { storeProducts } = products;

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="Our" title="Products"></Title>
          <div className="row">
            {storeProducts.map((product, i) => (
              <Product product={product} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
