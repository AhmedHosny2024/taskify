import { styled } from "@mui/material";
import { Modal, Select } from "antd";

export const MySelect = styled(Select)(() => ({
    margin:"8px 0 0 0"
}));

export const MyModal=styled(Modal)(()=>({
    "& .ant-modal-close" : {
        display: "none"
      }
}))