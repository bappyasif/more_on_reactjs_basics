import { useEffect, useState } from "react";

export function useHttp(url, dependencies) {
  let [isLoading, setLoading] = useState(false);
  let [fetchedData, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log("requesting: ", url);

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("could not fetch data");
        }
      })
      .then((data) => {
        console.log("data:", data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, dependencies);
  return [isLoading, fetchedData];
}
