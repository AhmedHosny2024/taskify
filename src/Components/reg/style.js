import { Box, styled } from "@mui/material";
import { Select } from "antd";
import Webcam from "react-webcam";

export const Container=styled(Box)(({ theme }) => ({
    flexDirection:"row",
    justifyContent:"space-evenly",
    margin:"8px auto 0px",
    [theme.breakpoints.between('0', '710')]: {
      flexDirection:"column",
      justifyContent:"center",
    //   margin:0
    },
    // height:200,
    width:"100%",
    display:"flex",
    alignItems:"center",
}))

export const MyBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('0', '710')]: {
     width:"75%"
    },
    width:"30%",
}))
export const MyBox2 = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('0', '710')]: {
     width:"75%"
    },
    width:"60%",
}))
export const MyContainer = styled(Box)(({ theme }) => ({
    margin:"40px auto 0px",
    [theme.breakpoints.between('0', '710')]: {
        marginTop:5
    },
    display:"flex",
    flexDirection:"column",
    width:"80%"
}))
export const MySelect = styled(Select)(() => ({
    margin:"8px 0 8px 0",
    fontWeight:700,
    color:"black"
}));
export const WebCam = styled(Webcam)(({ theme }) => ({
    width:"99%",
    // [theme.breakpoints.between('0', '710')]: {
    //     width:"75%"
    // },
}));
export const Image = styled("img")(({ theme }) => ({
    width:"100%",
    [theme.breakpoints.between('0', '710')]: {
        width:"100%"
    },
}));