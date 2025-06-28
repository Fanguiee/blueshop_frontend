import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-2 ">
      {products.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
}
