import { Typography, styled } from "@mui/material";

export const SecondContainer = styled(Typography)(() => ({
    flexGrow:1,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
    flexWrap:"wrap"
    
    }));
    export const Title = styled(Typography)(() => ({
        flexGrow:1,
        textAlign:"center",
        fontWeight:"bolder",
        fontSize:30,
        color:"red"
      }));