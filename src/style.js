import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
    display: 'flex',
    margin:"22px 20px 30px 10px",
  }));

export const Header = styled(Box)(({ theme }) => ({
        [theme.breakpoints.between('0', '700')]: {
          display: 'flex',
          flexDirection:"column",
        },

  }));
export const SecondContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between('0', '700')]: {
      display: 'flex',
      flexDirection:"column",
    },
  width: "100%",
  display:'flex',
  flexDirection:'row', 
}));
