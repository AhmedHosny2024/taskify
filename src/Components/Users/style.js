import { Typography, styled } from "@mui/material";

export const SecondContainer = styled(Typography)(() => ({
    // flexGrow:1,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
    flexWrap:"wrap",
    // marginTop:-383
    }));
    export const Title = styled(Typography)(() => ({
        flexGrow:1,
        textAlign:"center",
        fontWeight:"bolder",
        fontSize:30,
        color:"red"
      }));