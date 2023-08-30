import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, styled } from "@mui/material";

export const SubHeader = styled(ListSubheader)(() => ({
    fontSize: 'larger',
    fontWeight: 'bolder',
    color: 'black',
    display:"flex",
    marginBottom:-10,
    position: "inherit",
  }));

export const ALLList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: 250, 
  bgcolor: 'background.paper'
}));
export const IconText = styled(ListItemText)(() => ({
  '& .css-877dw6-MuiListItemText-root': {
   marginBottom:-4, 
   marginTop:-4,
   margin:0
 },
   marginBottom:-4, 
   marginRight:10,
   color:"#1890FF",
  }));
export const SmallIconText = styled(ListItemText)(() => ({
    '& .MuiListItemText-root': {
      marginBottom:0,
      marginTop:0,
    },
    marginBottom:0,
    marginTop:0,
   }));
export const Icon = styled(ListItemIcon)(() => ({
    margin:"0 -20px 0 0" ,
    padding:0,
   }));

export const MyList = styled(List)(() => ({
    alignItems:"center",
    width:200,
   }));
export const ItemButton = styled(ListItemButton)(() => ({
    alignItems:"end",
   }));
export const SubItemButton = styled(ListItemButton)(({ selected })  => ({
  backgroundColor: "white !important",
  ...( (selected==='true' )&& {
  backgroundColor: "#E6F7FF",
  color:"#1890FF",
  borderRight: "solid",
  borderColor:"#1890FF",
}),
   }));

   export const Conatiner = styled(Box)(() => ({
    height:"100%",
    width:203,
    // boxShadow:"1px 1px 1px 1px gray",
  }));