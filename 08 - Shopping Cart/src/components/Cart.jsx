import CartItem from './CartItem';

function Cart() {
  return (
    <div className="container mx-auto py-5">
      <h2 className="font-bold px-3 text-2xl mb-4">Cart</h2>

      <div className="mt-10">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full mt-4 focus:outline-none">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
