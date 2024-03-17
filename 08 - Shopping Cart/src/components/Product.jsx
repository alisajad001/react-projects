function Product({ product }) {
  return (
    <div className="w-60 bg-slate-200 rounded-md p-2 flex flex-col">
      <img
        src={product.thumbnail}
        alt="Product image"
        className="object-cover h-40 mx-auto rounded-md"
      />
      <h3 className="flex mt-5 items-center justify-between text-lg font-semibold">
        {product.title}{' '}
        <span className="text-sm p-1 rounded-md text-white bg-green-600">
          ${product.price}
        </span>
      </h3>
      <button className="bg-orange-500 text-sm mt-5 rounded-md py-2 text-white hover:bg-orange-600 transition">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
