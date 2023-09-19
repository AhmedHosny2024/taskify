import { Box, styled } from "@mui/material";
import Webcam from "react-webcam";

export const Container=styled(Box)(()=>({
    margin:"30px auto",
    // height:200,
    // width:"50%",
    display:"flex",
    textAlign:"center",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
}))
export const WebCam = styled(Webcam)(({ theme }) => ({
    width:"99%",
    margin:"10px auto"
    // [theme.breakpoints.between('0', '710')]: {
        //     width:"75%"
        // },
    }));