import { Box, Button, List, ListItemText, ListSubheader } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Select = styled(Box)(() => ({
  display: 'flex',
  '&:hover': {
    cursor: 'pointer',
    // backgroundColor: '#e8e8e8',
  },
}));

export const SelectBox = styled(List)(() => ({
//   width: 180,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  marginTop: 45,
  marginRight: 15,
  top:0,
  right:18,
  width: '-webkit-fill-available',
  maxWidth: "350px",
  bgcolor: 'background.paper',
  overflow: 'auto',
  '& ul': { padding: 0 },
  overflowX: "hidden"


}));
  export const IteamHeader = styled(ListSubheader)(({color}) => ({
    // padding: 5,
    color,
    fontSize: 14,
    fontWeight: 700,
    width: '100%',
    justifyContent: 'left',
    textTransform: 'none',
    // height:20
  }));
  export const Iteam = styled(ListItemText)(() => ({
    // padding: 5,
    color:"black",
    fontSize: 14,
    fontWeight: 700,
    width: '100%',
    justifyContent: 'left',
    textTransform: 'none',
    margin:0,
  }));
  export const Text = styled("p")(() => ({
    padding:0,
    margin:"0 2px 0 2px",
    fontSize:"large",
  }));
  export const Disc = styled("h6")(() => ({
    padding:0,
    margin:"0 2px 0 6px",
    fontSize:"small",
    opacity:0.5

  }));
  export const Date = styled("p")(() => ({
    padding:0,
    margin:"0 2px 0 6px",
    opacity:0.5
  }));
  export const SelectItemDelete = styled(Button)(() => ({
    padding: 5,
    color: 'black',
    fontSize: 14,
    fontWeight: 700,
    width: '100%',
    textTransform: 'none',
    display: "flex",
    justifyContent: "space-between",
    // not working
    '& .MuiButtonBase-root:hover': {
      color: '#1a1a1b',
      backgroundColor: '#e9f5fd',
    },
    '&:hover': {
      color: 'white',
      backgroundColor: 'red',
    },
  }));
  export const SelectItem = styled(Button)(() => ({
    padding: 5,
    color: 'black',
    fontSize: 14,
    fontWeight: 700,
    width: '100%',
    justifyContent: 'left',
    textTransform: 'none',
    alignItems:"baseline",
    // not working
    '& .MuiButtonBase-root:hover': {
      backgroundColor: "#1677ff",
      color: "white",
    },
    '&:hover': {
      backgroundColor: "#1677ff",
      color: "white",
    },
  }));