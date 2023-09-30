import { useEffect, useState } from "react";
import axios from "../../Server";

const useLog =  (image) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  useEffect(() => {
     axios
      .post(
        "api/User/image",
        JSON.stringify({
          image
        })
      )
      .then((response) => {
        setData(response.data);
        setStatusCode(response.status);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setStatusCode(error.response.status);
        console.log(error);
      });
  }, [image]);

  return [data, error, statusCode];
};

export default useLog;
