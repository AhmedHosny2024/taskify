import { ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
const drawerWidth = 150;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    // margin:0
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 10px)`,
  // margin:0,

  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 10px)`,
    // margin:0,
  },
});




export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    [theme.breakpoints.between('0', '600')]: {
      display:'none',
    },
    [theme.breakpoints.between('800', '900')]: {
      width:"20%",
    },
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    position: "inherit",
    minHeight:"84vh",
    "& .MuiPaper-root":{
        // zIndex:1,
        position: "static",
        /* border-right: solid 1px red; */
        // marginLeft: -5,
        // marginTop:-15
    },
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export const Item = styled(ListItemButton)((open,selected) => ({
    minHeight: 55,
    justifyContent: open ? 'initial' : 'center',
    px: 2.5,
    ...(selected &&{
        backgroundColor:"#E6F7FF",
        color:"blue"
    })
  }));
export const ItemIcone = styled(ListItemIcon)((open) => ({
    minWidth: 0,
    mr: open ? 3 : 3,
    justifyContent: 'center',
    paddingLeft:7,
    marginRight:10,
    
  }));
export const Text = styled(ListItemText)((selected,open) => ({
  // color: selected? "#1890FF":"black",
  // opacity: open ? 1 : 0,
  ...(selected &&{
    color:"#1890FF"
  }),
 ...(!open &&{
    opacity:0
  })
  }));
