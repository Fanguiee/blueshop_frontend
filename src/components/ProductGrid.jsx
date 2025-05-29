import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items }) {
  return (
    <div>
      {items.map((item) => {
        <ProductCard product={item} />;
      })}
    </div>
  );
}
