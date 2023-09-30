import { useEffect, useState } from "react";
import axios from "../../Server";
import { useDispatch } from "react-redux";
import { SetMyId, setdep, setlastId, setrole, stmyname } from "../../Redux/dataSlice";

const useReg =  (name,image,roleId,departmentId,jobTitle) => {
  const [error, setError] = useState(null);
  const [data2, setData] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  const dispatch=useDispatch()
  useEffect(() => {
    if(name!==""&&name!==null&&image!==""&&image!==null&&roleId!==""&&roleId!==null&&departmentId!==""&&departmentId!==null&&jobTitle!==""&&jobTitle!==null){
     axios
      .post(
        "api/User/add",
        JSON.stringify({
          name,
          image,
          roleId,
          departmentId,
          jobTitle
        })
      )
      .then((response) => {
        console.log(response)
        setStatusCode(response.status);
        if(response.status===200){
            dispatch(SetMyId(response.data.id))
            dispatch(setlastId(response.data.id))
            dispatch(setdep(response.data.department.id))
            dispatch(setrole(response.data.role.name))
            dispatch(stmyname(response.data.name))
            window.location.pathname = `/`;
        }
        setError(null);
      })
      .catch((error) => {
        setError(error);
        // setStatusCode(error.response.status);
      });}
  }, [departmentId, image, jobTitle, name, roleId]);

  return [error,data2, statusCode];
};

export default useReg;
