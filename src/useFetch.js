import { useEffect, useState } from "react";

/**
 * A custom hook for fetching data from a url
 * allows to get the data from an endpoint
 */
const useFetch = (url) => {
  // receive the url endpoint as a parameter
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        // you can check for HTTP status codes like 200, 404, etc... here
        if (!res.status === 200) {
          throw Error("Could not fetch the data for that resource.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        // set the isPending state to false so the loading message will be hidden
        setIsPending(false);
        // remove error message
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error }; // return the props. this allows to use this hook like: 'const { data, isPending, error} = useFetch('http://localhost);' where this hook is used.
};

export default useFetch;
