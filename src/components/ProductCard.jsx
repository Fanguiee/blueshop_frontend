import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-lg overflow-hidden w-64 p-2 m-4">
      {product.images.map((image) => (
        <img
          src={image.downloadUrl}
          key={image.id}
          alt={image.fileName}
          className="w-full rounded-lg"
        ></img>
      ))}

      <div className="w-full">
        <h4>
          {product.title}
          <p>{product.price}€</p>
        </h4>
        <button className="bg-indigo-500 border-4 border-sky-500 hover:bg-indigo-400 shadow-md shadow-amber-400 hover:shadow-amber-600 p-1 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
}
