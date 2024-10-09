function ProductCard({ product }) {
  return (
    <div className="p-2 rounded-md border border-white relative">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-[200px] object-cover w-full"
      />
      <h4 className="text-center my-3 font-bold text-xl">{product.title}</h4>
      <div className="absolute flex justify-center items-center top-[-10px] left-[-10px] bg-green-600 rounded-full h-[50px] w-[50px]">
        ${product.price}
      </div>
    </div>
  );
}

export default ProductCard;
