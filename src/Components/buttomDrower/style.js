import { Box, styled } from "@mui/material";

export const ButtomDrower = styled(Box)(
    ({ theme }) => ({
        display:'none',
      [theme.breakpoints.between('0', '600')]: {
        display:'block',
      },
      width:"100%",
      position:"absolute",
      bottom:0,
    }),
    );
    