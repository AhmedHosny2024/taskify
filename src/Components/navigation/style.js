import { Typography, styled } from "@mui/material";
import { Input } from 'antd';

const { Search } = Input;
export const Title = styled(Typography)(() => ({
    flexGrow:1,
    color:"black",
    textAlign:"left",
    fontWeight:"bolder",
    fontSize:30,
  }));
export const Container = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.between('0', '830')]: {
          display: 'flex',
          flexDirection:"column",
        },
    flexGrow:1,
   display:"flex",
   alignItems:"center",
   justifyContent:"flex-end",
  marginBottom:10
  }));
export const SecondContainer = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.between('0', '500')]: {
      display: 'flex',
      flexDirection:"column",
    },
flexGrow:1,
display:"flex",
alignItems:"center",
justifyContent:"flex-end",
marginBottom:10
}));
export const SearchBar = styled(Search)(() => ({
    width: 350,
    flexShrink:1,
    borderRadius:6,
    border:1,
  }));