import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MySelect } from './style';
import { Box, TextField } from '@mui/material';
import { updateArrayElement } from '../../../Firebase/firebase';
import { msg } from '../../Snakbar';
function Edit(props) {
    const {data,borderColor}=props
    const [disc, setDisc] = React.useState(data.disc);
    const [title, setTitle] = React.useState(data.title);
    const [category, setCategory] = React.useState(data.category);
    const id=data.id
    const date=data.date
    // const dispatch=useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const newData={
      id,
      category,
      title,
      disc,
      date
    }
    let field;
    switch(borderColor){
      case "red":
        field="todo"
        break
      case "yellow":
        field="inprogress"
        break
      case "green":
        field="done"
        break
      default:
        field="todo"
    }

    if(title===''){msg("error","Please add title")}
    else if(date===''){msg("error","Please select date")}
    else{
    updateArrayElement (field,data,newData) 
    msg("success","Task edited")
    setIsModalOpen(false);
    }
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
                  value: 'Junior',
                  label: 'Junior',
                },
                {
                  value: 'Senior',
                  label: 'Senior',
                },
                {
                  value: 'Manager',
                  label: 'Manager',
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
          <TextField
          // label="Discreption"
          value={disc}
          placeholder='Discreption'
          onChange={(e) => setDisc(e.target.value)}
          multiline
          rows={8}
          maxRows={8}
          sx={{overflowY:"clip"}}
          inputProps={{
            maxlength: 200
          }}
          helperText={`${disc.length}/200`}

        />
        </Box>
      </Modal>
    </>
  );
};
export default Edit;