import { useEffect, useState } from "react";

const useFetch = (url, itemsString = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const items = JSON.parse(itemsString) ?? [""];

  useEffect(() => {
    const fetchAllData = async () => {
      let newData = [];
      for (const item of items) {
        try {
          setIsLoading(true);
          const res = await fetch(url + item);
          const json = await res.json();

          if (Array.isArray(json)) {
            newData = [...json];
            break;
          }
          newData.push(json);
        } catch (error) {
          setIsLoading(false);
          return setErrorMessage(`Error: ${error.message}`);
        }
      }
      setIsLoading(false);
      setData(newData);
    };

    if (items.length) {
      fetchAllData();
    } else {
      setData(null);
    }
  }, [url, itemsString]);

  return { isLoading, data, errorMessage };
};

export default useFetch;
