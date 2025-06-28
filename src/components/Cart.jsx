import { useEffect, useState } from "react";
import CartRow from "./CartRow";

export default function Cart() {
  const cartItems = [
    {
      quantity: 1,
      product: {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
    },
    {
      quantity: 2,
      product: {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
          rate: 4.1,
          count: 259,
        },
      },
    },
  ];
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);
  return (
    <div className="m-2 flex flex-col items-center bg-amber-200">
      <h3>Cart</h3>
      {cartItems.map((item) => {
        return <CartRow key={item.product.id} cartItem={item}></CartRow>;
      })}
      <div className="font-medium flex items-end">
        <p>Total:{total}</p>
      </div>
      <button className="bg-sky-500/45 hover:bg-sky-500/60 p-1 rounded-md">
        Buy now
      </button>
    </div>
  );
}
