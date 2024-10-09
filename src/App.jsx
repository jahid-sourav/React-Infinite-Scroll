import ProductList from "./components/ProductList";

function App() {
  return (
    <section className="bg-black text-white h-full w-full">
      <div className="container py-5">
        <h1 className="text-center">React Infinite Scroll</h1>
        <ProductList />
      </div>
    </section>
  );
}

export default App;
