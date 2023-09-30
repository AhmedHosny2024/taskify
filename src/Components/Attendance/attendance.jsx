import { Box } from '@mui/material';
import { Callender } from './style';
import "../../App.css"
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Attendance from './attndServer';
const moment = require('moment');


// const data=[
//   "2023-01-1","2023-02-1","2023-02-3","2023-09-04","2023-09-9","2023-10-8","2023-9-2"
// ]




export default function Time() {

  const id=useSelector(state=>state.lastid)

  const [data, error, statusCode]= Attendance(id)
  const[data2,setdata2]=useState([])

  const getListData = (value) => {
    let myarray=data2?.filter((m)=>(
      (moment(new Date(m)).format('YYYY-MM-DD')===value.format('YYYY-MM-DD'))
    ))
    return myarray

  };
  function removewithfilter(arr) {
    let outputArray = arr?.filter(function (v, i, self) {
 
        // It returns the index of the first
        // instance of each value
        return i === self?.indexOf(v);
    });
 
    return outputArray;
}
  const dateCellRender = (value) => {
    let listData = getListData(value);
    listData=removewithfilter(listData)
    return (
        listData?.map((item) => (
        <Box sx={{amrgin:"auto",display:"flex",fontSize:55,justifyContent:"center" }}>✓</Box>
        ))
    );
  };
  useEffect(()=>{
    setdata2(data?.map((x)=>x.date))
    console.log(data2)
  },[data])
  return (

  <Callender cellRender={dateCellRender} mode='month'/>
  )
};
