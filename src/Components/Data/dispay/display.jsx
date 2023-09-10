import {React, useState } from 'react';
import { Button, Modal } from 'antd';
import { Box, IconButton, TextField } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
function Display(props) {
  const {data,display}=props
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = async() => {
   await setIsModalOpen(true);
    console.log("model")
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <IconButton sx={{padding:1,display:{display}}} id={"show"+data.id} onClick={showModal}>
              <VisibilityOutlinedIcon type="primary"   />
      </IconButton>
      <Modal title={data.title} open={isModalOpen} onOk={handleOk} onCancel={handleOk}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          OK
        </Button>
      ]}
      >
        <Box
          noValidate
          component="form"
          sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
          }}
          >
          <TextField
          disabled
          id="standard-search"
          label="Category"
          type="search"
          variant="standard"
          value={data.category}
          sx={{my:1}}
          />
          <TextField
          disabled
          id="standard-search"
          label="Title"
          type="search"
          variant="standard"
          value={data.title}
          sx={{my:1}}
          />
          <TextField
          // label="Discreption"
          value={data.disc}
          placeholder='Discreption'
          multiline
          rows={8}
          maxRows={8}
          sx={{overflowY:"clip"}}
          disabled
        />
        </Box>
      </Modal>
    </>
  );
};
export default Display;