import { useEffect, useState } from "react";

const useFetch = (url, stringifiedProductIds = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // parse the stringified array to get all product ids
  const products = JSON.parse(stringifiedProductIds) ?? [""];

  useEffect(() => {
    const fetchAllData = async () => {
      let newData = [];
      for (const item of products) {
        try {
          setIsLoading(true);
          const res = await fetch(url + item);
          const json = await res.json();

          // If we get an array back, we are fetching all data
          // in a single fetch so we can break otherwise continue fetching
          // new products one by one
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

    // Only fetch products for favorite page if fav array isn't emppty
    if (products.length) {
      fetchAllData();
    } else {
      setData(null);
    }
  }, [url, stringifiedProductIds]);

  return { isLoading, data, errorMessage };
};

export default useFetch;
