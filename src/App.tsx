import { useState, useEffect } from "react";
import { IStoreInfo } from "./interfaces/backoffice.interfaces";
import { useProductsStore } from "./store/products/products.store";
import Products from "./components/Products/Products";
import "./App.scss";

function App() {
  const [storeInfo, setStoreInfo] = useState<IStoreInfo>({
    name: "",
    category: "",
    employees: [],
  });
  const { products, getAllProducts } = useProductsStore();

  const fetchStoreInfoData = () => {
    fetch(
      "https://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStoreInfo(data);
      });
  };

  useEffect(() => {
    fetchStoreInfoData();
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
}

export default App;
