import { useEffect, useState } from "react";

const useFetch = (url, itemsString = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const items = JSON.parse(itemsString);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData");

      try {
        setIsLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchAllData = async () => {
      const newData = [];
      console.log("fetchAllData");
      for (const item of items) {
        try {
          setIsLoading(true);
          const res = await fetch(url + item);
          const json = await res.json();
          newData.push(json);
          console.log(newData);
          // debugger;
        } catch (error) {
          setIsLoading(false);
          return setErrorMessage(error.message);
        }
      }
      setIsLoading(false);
      // debugger;
      setData(newData);
    };

    if (!items) {
      return fetchData();
    }

    if (items.length) {
      fetchAllData();
    } else {
      setData(null);
    }
  }, [url, itemsString]);

  return { isLoading, data, errorMessage };
};

export default useFetch;
