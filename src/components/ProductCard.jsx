import React from "react";

export default function ProductCard({ product }) {
  return (
    <div>
      <Image src={product.imageUrl}></Image>
      <h4>
        {product.name}
        <p>{product.price}</p>
      </h4>
    </div>
  );
}
