import { Box } from '@mui/material';
import { Callender } from './style';
import "../../App.css"

const getListData = (value) => {
  let listData;
  console.log(value.format('MM'))
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event',
        },
      ];
      break;
    default:
  }
  return listData || [];
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
