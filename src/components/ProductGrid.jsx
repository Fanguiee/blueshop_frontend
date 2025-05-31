import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="bg-amber-200 w-full grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8  gap-2 ">
      {products.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
}
