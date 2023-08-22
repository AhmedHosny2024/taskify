import { Toolbar, Typography, styled } from "@mui/material";

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
    alignItems:"center"
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