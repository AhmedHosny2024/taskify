import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('0', '799')]: {
        width:"100%",
        
    },
    [theme.breakpoints.between('800', '900')]: {
        width:"45%",
  
    },
    width: "33%",
    boxShadow:"1px 1px 1px 1px gray",
    margin:5,
    boxSizing: "border-box",
    padding: "0px 15px 10px 15px",

}));
export const Header = styled(Box)(() => ({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:10,
}));
export const Todo = styled("h6")(() => ({
   fontSize:"larger",
   marginBottom:5,
   marginTop:5,
   fontWeight:600,
   
}));