import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-green-200 rounded-lg overflow-hidden">
      <img src={product.image} className="h-32 rounded-lg"></img>
      <h4>
        {product.title}
        <p>{product.price}</p>
      </h4>
    </div>
  );
}
