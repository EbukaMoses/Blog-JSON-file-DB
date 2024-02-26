import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsePending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could'nt connect to endpoint: " + res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          console.log(data);
          setIsePending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log(err.message);
          } else {
            setIsePending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
