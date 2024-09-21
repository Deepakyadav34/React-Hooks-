import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};

export default UseFetch;
