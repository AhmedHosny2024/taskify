import { Box, Button, styled } from "@mui/material";
import { Select } from "antd";

export const Card = styled(Box)(({ borderColor })  => ({
    display:"flex",
    width:"100%",
    flexDirection:"column",
    boxSizing: "border-box",
    padding: "0px 15px 10px 15px",
    borderRight: "solid",
    borderBottom: "solid",
    borderWidth: "thick",
    borderColor,
    borderRadius: 10,
    borderLeft: "2px outset",
    borderTop: "2px outset",
    textOverflow: "ellipsis",
    marginBottom:20,

}));
export const Actions = styled(Box)(()  => ({
    display:"flex",
    width:"100%",
    flexDirection:"row",
    justifyContent:"flex-end",
    margin:"13px 0 0 0"
}));
export const SaveBtn = styled(Button)(()  => ({
   height:20,
   margin:"0 3px 0 3px",
   border:"solid 1px #1677ff",
   color:"#1677ff",
   '&:hover': {
    backgroundColor:"#1677ff",
   height:20,
   color:"white",
   margin:"0 3px 0 3px",
  },
}));
export const CancelBtn = styled(Button)(()  => ({
    height:20,
    margin:"0 3px 0 3px",
    border:"solid 1px #ff4d4f",
    color:"#ff4d4f",
    '&:hover': {
     backgroundColor:"#ff4d4f",
    height:20,
    color:"white",
    margin:"0 3px 0 3px",
   },
 }));

export const MySelect = styled(Select)(() => ({
        margin:"8px 0 0 0",
        fontWeight:700,
        color:"black"
  }));
