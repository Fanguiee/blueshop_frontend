export default function CartRow({ cartItem }) {
  return (
    <div className="w-full md:w-1/2 p-2 bg-green-50 flex">
      <img src={cartItem.product.image} className="h-24 rounded-lg"></img>
      <div className="w-full">
        <div>{cartItem.product.title}</div>
        <div className="flex justify-between">
          <p>{cartItem.product.price}</p>
          <p>x{cartItem.quantity}</p>
        </div>
        <div className="flex justify-end font-medium">
          <p>{cartItem.quantity * cartItem.product.price}</p>
        </div>
      </div>
    </div>
  );
}
