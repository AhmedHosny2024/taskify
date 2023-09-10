import { Box, styled } from "@mui/material";

export const SecondContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between('0', '700')]: {
        display: 'flex',
        flexDirection:"column",
      },
    width: "100%",
    display:'flex',
    flexDirection:'row', 
    overflowWrap: "anywhere",
  
  }));