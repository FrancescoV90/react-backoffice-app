import { useEffect } from "react";
import { useProductsStore } from "./store/products.store";
import { useStoreInfo } from "./store/store-info.store";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { ReactNotifications } from "react-notifications-component";
import Products from "./components/Products/Products";
import "react-notifications-component/dist/theme.css";
import "./App.scss";

const App = () => {
  const { storeInfo, getStoreInfo } = useStoreInfo();
  const { products, stats, getAllProducts, getStats } = useProductsStore();
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  useEffect(() => {
    getStoreInfo();
    getAllProducts();
    getStats();
  }, []);

  const polarAreaData = {
    labels: stats.map((stat) => stat.category),
    datasets: [
      {
        label: "# of Products",
        backgroundColor: stats.map(
          () =>
            "rgba(" +
            Math.round(Math.random() * 255) +
            "," +
            Math.round(Math.random() * 255) +
            "," +
            Math.round(Math.random() * 255) +
            "," +
            Math.random().toFixed(1) +
            ")"
        ),
        data: stats.map((stat) => stat.numberOfProducts),
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <ReactNotifications />
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
      <PolarArea data={polarAreaData} />
    </>
  );
};

export default App;
