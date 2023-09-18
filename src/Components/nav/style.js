import { Box, Button, Toolbar, Typography, styled } from "@mui/material";

export const Container = styled(Toolbar)(() => ({
    backgroundColor:"white"
  }));

export const Name = styled("p")(() => ({
    flexGrow:1,
    color:"black",
    paddingBottom:5
  }));
  export const UserContainer = styled("div")(() => ({
    display:"flex",
    flexDirection:"row",
    alignItems:"baseline"
  }));
  export const UserData = styled("div")(() => ({
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
  }));
  export const Title = styled(Typography)(() => ({
    flexGrow:1,
    color:"#1890FF",
    textAlign:"left",
    fontWeight: "bolder"
  }));
  export const Icon = styled("div")(() => ({
    margin:5
  }));

//////////////////////////////////////////////////////////////////
export const Select = styled(Box)(() => ({
  display: 'flex',
  '&:hover': {
    cursor: 'pointer',
    // backgroundColor: '#e8e8e8',
  },
}));

export const SelectBox = styled(Box)(() => ({
//   width: 180,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  margin:"7px 0 0px -11px",
}));

export const SelectItemDelete = styled(Button)(() => ({
    padding: 5,
    color: '#878a8c',
    fontSize: 14,
    fontWeight: 700,
    width: '100%',
    justifyContent: 'left',
    textTransform: 'none',
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