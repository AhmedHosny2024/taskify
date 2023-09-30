import { useEffect, useState } from "react";
import axios from "../Server";
const  Departments =  ()=> {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [statusCode, setStatusCode] = useState(null);
  
    useEffect(() => {
      axios.get(`/api/Departments`).then(async (response) => {
        // console.log(response);
        await setData(response.data);
        await setStatusCode(response.status);
        await setError(null);
      }).catch((error) => {
        setError(error);
        setStatusCode(error.response.status);
        console.log(error);
      });
    }, []);
    console.log('hosny', data);
  
     return [data, error, statusCode];
  };
  export default Departments