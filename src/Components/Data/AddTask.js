

import { useEffect, useState } from "react";
import axios from "../../Server";

const AddTask =  (title,disc,category,date,taskStatusId,userId) => {
//   useEffect(() => {
     axios
      .post(
        "api/Task/add",
        JSON.stringify({
            title,
            disc,
            category,
            date,
            taskStatusId,
            userId
        })
      )
      .then((response) => {
        
    })
      .catch((error) => {
        
      });

};

export default AddTask;
