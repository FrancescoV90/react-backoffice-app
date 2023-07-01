import { useEffect } from "react";
import { useProductsStore } from "./store/products.store";
import { useStoreInfo } from "./store/store-info.store";
import Products from "./components/Products/Products";
import "./App.scss";

const App = () => {
  const { storeInfo, getStoreInfo } = useStoreInfo();
  const { products, getAllProducts } = useProductsStore();

  useEffect(() => {
    getStoreInfo();
    getAllProducts();
  }, []);

  return (
    <>
      {storeInfo.name && storeInfo.category && storeInfo.employees.length && (
        <header className="header">
          <h1>
            {storeInfo.name} - {storeInfo.category}
          </h1>
          <p>
            <span>Dipendenti: </span>
            {storeInfo.employees.map((employe, index) => (
              <span key={`emplye_${index}`}>
                {employe}
                {index < storeInfo.employees.length - 1 ? "," : ""}{" "}
              </span>
            ))}
          </p>
        </header>
      )}
      <Products products={products} />
    </>
  );
};

export default App;
