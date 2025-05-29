import React, { useState, useEffect } from "react";
import ProductGrid from "./ProductGrid";
import Loading from "./AppStates/Loading";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products") // replace with your real API endpoint
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      });
  }, []); // empty dependency array = run only once on mount

  if (loading) return <Loading />;
  return (
    <div>
      <h2>Products</h2>
      <ProductGrid products={products} />
    </div>
  );
}
