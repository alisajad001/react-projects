function CartItem() {
  return (
    <div className=" mt-5 flex items-center border-b border-gray-200 p-4 max-w-[50rem] mx-auto">
      <img
        className="h-16 w-16 object-cover rounded"
        src="https://www.helium10.com/app/uploads/2020/04/vit-c.jpg"
        alt="Product"
      />
      <div className="ml-4 flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">Product Name</h2>
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center">
            <button className="text-xs text-gray-500 hover:text-gray-700 focus:outline-none">
              Update Quantity
            </button>
            <button className="ml-2 text-xs text-red-500 hover:text-red-700 focus:outline-none">
              Remove
            </button>
          </div>
          <span className="text-sm font-medium text-gray-600">$10.99</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
