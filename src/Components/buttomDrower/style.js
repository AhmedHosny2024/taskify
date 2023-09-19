import { Box, styled } from "@mui/material";

export const ButtomDrower = styled(Box)(
    ({ theme }) => ({
        display:'none',
      [theme.breakpoints.between('0', '600')]: {
        display:'block',
      },
      zIndex: 10,
      position: "fixed",
      bottom: 0,
      width: "-webkit-fill-available",
    }),
    );
    