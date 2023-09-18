import { Avatar, Box, Button, Typography, styled } from "@mui/material";

export const Card = styled(Box)(() => ({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f7f7f7",
    padding: "10px 5px",
    margin: 10,
    borderRadius: 10,
  }));
export const Actions = styled(Box)(() => ({
    display:"flex",
    flexDirection:"Row",
    justifyContent:"center",

  }));
export const Name = styled(Typography)(() => ({
    // fontSize:600,
    fontWeight:800,
    coloe:"black",
    margin:"10px 0"
  }));
export const SaveBtn = styled(Button)(()  => ({
    height:25,
    margin:"0 3px 0 3px",
    border:"solid 1px #1677ff",
    color:"#1677ff",
    textTransform: "inherit",
    '&:hover': {
     backgroundColor:"#1677ff",
    height:25,
    color:"white",
    margin:"0 3px 0 3px",

   },
 }));
 export const CancelBtn = styled(Button)(()  => ({
    height:25,
    margin:"0 3px 0 3px",
    border:"solid 1px #ff4d4f",
    color:"#ff4d4f",
    textTransform: "inherit",

    '&:hover': {
     backgroundColor:"#ff4d4f",
     height:25,
     color:"white",
    margin:"0 3px 0 3px",
    textTransform: "inherit",
   },
 }));
 export const MyAvatar = styled(Avatar)(()  => ({
   margin:5,
   width:60,
   height:60
 }));