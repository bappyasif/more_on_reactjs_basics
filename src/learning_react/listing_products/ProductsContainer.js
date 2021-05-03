import React from "react";
import { ProductItem } from "./ProductItem";
import { products } from "./products";

export function ProductsContainer() {
  let prods = products.map((product) => (
    <ProductItem
      key={product.id}
      name={product.name}
      price={product.price}
      desc={product.desc}
    />
  ));
  return <div>{prods}</div>;
}
