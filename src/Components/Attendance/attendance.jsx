import { Box } from '@mui/material';
import { Callender } from './style';
import "../../App.css"
const moment = require('moment');


const data=[
  "2023-01-1","2023-02-1","2023-02-3","2023-09-04","2023-09-9","2023-10-8","2023-9-2"
]
const getListData = (value) => {
  let myarray=data.filter((m)=>(
    (moment(new Date(m)).format('YYYY-MM-DD')===value.format('YYYY-MM-DD'))
  ))
  return myarray
  // let listData;
  // console.log(value.format('MM'))
  // switch (value.date()) {
  //   case 8:
  //     listData = [
  //       {
  //         type: 'warning',
  //         content: 'This is warning event.',
  //       },
  //     ];
  //     break;
  //   case 10:
  //     listData = [
  //       {
  //         type: 'warning',
  //         content: 'This is warning event.',
  //       },
  //     ];
  //     break;
  //   case 15:
  //     listData = [
  //       {
  //         type: 'warning',
  //         content: 'This is warning event',
  //       },
  //     ];
  //     break;
  //   default:
  // }
  // return listData || [];
};



export default function Time() {
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
        listData.map((item) => (
        <Box sx={{amrgin:"auto",display:"flex",fontSize:55,justifyContent:"center" }}>✓</Box>
        ))
    );
  };
  
  return (

  <Callender cellRender={dateCellRender} mode='month'/>
  )
};
