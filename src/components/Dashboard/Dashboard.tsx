import { useState, useEffect } from "react";

interface IStoreInfo {
  name: string;
  category: string;
  employees: string[];
}

function App() {
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
      <h1>
        {storeInfo.name} - {storeInfo.category}
      </h1>
    </>
  );
}

export default App;
