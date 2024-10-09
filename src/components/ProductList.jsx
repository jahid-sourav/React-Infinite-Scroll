import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

const productsPerPage = 10;

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          page * productsPerPage
        }`
      );
      const data = await response.json();
      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setPage((prevPage) => prevPage + 1);
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // cleanUp
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  return (
    <div className="py-5">
      <h1>Products : {products.length}</h1>
      <div className="py-5 grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {hasMore && (
        <div ref={loaderRef} className="flex justify-center py-5">
          <img
            className="w-[50px] h-[50px] object-cover"
            src="https://discuss.wxpython.org/uploads/default/original/2X/6/6d0ec30d8b8f77ab999f765edd8866e8a97d59a3.gif"
            alt="Loading"
          />
        </div>
      )}
    </div>
  );
}

export default ProductList;
