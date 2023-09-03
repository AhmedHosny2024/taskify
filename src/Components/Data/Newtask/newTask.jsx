import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';
import { Actions, Card, MySelect,SaveBtn,CancelBtn } from './style';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeall } from '../../../Redux/newtaskSlice';
import { DatePicker } from 'antd';

export default function NewTask(props) {
  const {add,borderColor}=props
  const [disc, setDisc] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const id=useSelector(state=>state.todo.lastid)
  const dispatch=useDispatch()

  const Cancel = () => {
    setCategory('')
    setDisc('')
    setTitle('')
    dispatch(closeall())
  };
  const Save = () => {
    const item={
      id,
      category,
      title,
      disc
    }
    if(category!=='' && title!=='')
    {dispatch(add(item))
    Cancel()}
  };
  const onChange = (value) => {
    setCategory(value)
  };
  return (
    <Card borderColor={borderColor}>
      <MySelect
        showSearch
        sx={{fontWeight:700,color:"black"}}
        placeholder="Select Category"
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
          autoSize={{ minRows: 4, maxRows: 8}}
          style={{marginBottom:8}}
          />
        <DatePicker/>
        </Box>
      <Actions >
        <SaveBtn border="#1677ff" onClick={Save}>Save</SaveBtn>
        <CancelBtn backgroundColor="#ff4d4f" onClick={Cancel}>Cancel</CancelBtn>
      </Actions>
    </Card>
  );
}
