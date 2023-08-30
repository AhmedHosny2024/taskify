import { Box, styled } from "@mui/material";

export const Header = styled(Box)(() => ({
    display:"flex",
    width:"100%",
    justifyContent:"space-between",
    alignItems: "center",

}));
export const Card = styled(Box)(({ borderColor })  => ({
    display:"flex",
    width:"100%",
    flexDirection:"column",
    boxSizing: "border-box",
    padding: "0px 15px 10px 15px",
    borderRight: "solid",
    borderBottom: "solid",
    borderWidth: "thick",
    borderColor,
    borderRadius: 10,
    borderLeft: "2px outset",
    borderTop: "2px outset",
    textOverflow: "ellipsis",
    marginBottom:20,
    cursor:"move"

}));
export const Category = styled(Box)(() => ({
    display:"flex",
    backgroundColor:"#F0F0F0",
    alignItems: "center",
    borderRadius: 7,
    height: "-webkit-fill-available",
    padding: "3px 12px 3px 12px",
}));
export const CategoryText = styled(Box)(() => ({
    color:"#40A9FF",
    fontSize:12,
    fontWeight:400,

}));
export const Title = styled(Box)(() => ({
    fontWeight:500,
    fontSize:16,
    color:"black",
    display:"flex",
    alignItems:"flex-start",
    marginTop:"10px 0px 10px 0px",

}));
export const Disc = styled(Box)(() => ({
    fontWeight:400,
    fontSize:14,
    color:"black",
    alignItems:"flex-start",
    textAlign: "-webkit-auto",
    textOverflow:"ellipsis",
    overflow:"hidden",
    display: "-webkit-box",
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    margin:"8px 0px 12px 0px",

}));