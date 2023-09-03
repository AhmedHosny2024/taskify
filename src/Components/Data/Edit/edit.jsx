import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { MySelect } from './style';
import { Box, TextField } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';
function Edit(props) {
    const {data,index,func}=props
    const [disc, setDisc] = React.useState(data.disc);
    const [title, setTitle] = React.useState(data.title);
    const [category, setCategory] = React.useState(data.category);
    const id=data.id
    const dispatch=useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const newData={
      id,
      category,
      title,
      disc
    }
    dispatch(func([index,newData]))
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value) => {
    setCategory(value)
  };
  return (
    <>
      <Button type="primary" onClick={showModal} id={"edit"+data.id} style={{display:"none" }}>
        
      </Button>
      <Modal title={data.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Box
          noValidate
          component="form"
          sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
          }}
          >
            <MySelect
              showSearch
              sx={{fontWeight:700,color:"black"}}
              placeholder="Select Category"
              value={category}
              optionFilterProp="children"
              onChange={onChange}
              // onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={[
                {
                  value: 'Intern',
                  label: 'Intern',
                },
                {
                  value: 'Work',
                  label: 'Work',
                },
                {
                  value: 'UX Designer',
                  label: 'UX Designer',
                },
              ]}
            />
          <TextField
          required
          id="standard-search"
          label="Title"
          type="search"
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          sx={{my:1}}
          />
          <TextArea
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
          placeholder="Discreption"
          autoSize={{ minRows: 4, maxRows: 8 }}
          />
        </Box>
      </Modal>
    </>
  );
};
export default Edit;