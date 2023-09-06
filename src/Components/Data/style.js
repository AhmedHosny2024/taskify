import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between('0', '799')]: {
    display: 'flex',
    flexDirection:"column",
  },
    [theme.breakpoints.between('800', '900')]: {
      display: 'flex',
      flexDirection:"column",
      flexFlow:"wrap",
      justifyContent:"center"
    },
    margin:10,
    display:"flex",
    flexDirextion:"row",
    width:"inherit",
    height:"fit-content"
}));