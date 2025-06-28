import React, { useState, useEffect } from "react";
import ProductGrid from "./ProductGrid";
import Loading from "./AppStates/Loading";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/products/all")
      .then((res) => res.json())
      .then((res) => {
        console.log("got:", res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      });
  }, []);
  if (loading) return <Loading />;
  return (
    <div>
      <h2>Products</h2>
      <ProductGrid products={products} />
    </div>
  );
}
