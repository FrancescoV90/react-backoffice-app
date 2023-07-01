import { useState, useEffect } from "react";
import "./Dashboard.scss";
import Products from "../Products/Products";

interface IStoreInfo {
  name: string;
  category: string;
  employees: string[];
}

function Dashboard() {
  const [storeInfo, setStoreInfo] = useState<IStoreInfo>({
    name: "",
    category: "",
    employees: [],
  });

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
      <Products />
    </>
  );
}

export default Dashboard;
