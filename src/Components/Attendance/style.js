import { styled } from "@material-ui/core"
import { Calendar } from "antd"

export const Callender=styled(Calendar)(()=>({
    
'& .ant-radio-button': {
    display:"none"
  },
'& .ant-picker-calendar-year-select': {
    display:"none"
  },
// '& .ant-picker-calendar-date-today': {
//     border:"#f0f0f0 !important" ,
//     color:"black !important"
// },
// '& .ant-picker-calendar-date-value': {
//     color:"black !important"
// },


}))

