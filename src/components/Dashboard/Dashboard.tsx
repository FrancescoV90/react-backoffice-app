import { useState, useEffect } from 'react'

function App() {
  const [storeInfo, setStoreInfo] = useState({});

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
        {storeInfo.name} {storeInfo.category}
    </>
  )
}

export default App
