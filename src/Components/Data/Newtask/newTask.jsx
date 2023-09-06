import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Actions, Card, MySelect,SaveBtn,CancelBtn } from './style';
import { useDispatch } from 'react-redux';
import { closeall } from '../../../Redux/newtaskSlice';
import { DatePicker } from 'antd';
import {addToArray} from "../../../Firebase/firebase"
import moment from 'moment';
const { v4: uuidv4 } = require('uuid');

export default function NewTask(props) {
  moment.locale('en')
  const {add,borderColor,ref,type}=props
  const [disc, setDisc] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [date, setDate] = React.useState('');

  // const id=useSelector(state=>state.todo.lastid)
  const dispatch=useDispatch()

  const Cancel = () => {
    console.log(date)
    setCategory('')
    setDisc('')
    setTitle('')
    dispatch(closeall())
  };
  let field;
  const id= uuidv4()
  const Save = async () => {
    switch(type){
      case "0":
        field="todo"
        break
      case "1":
        field="inprogress"
        break
      case "2":
        field="done"
        break
      default:
        field="todo"
    }
    const newValue={
      id,
      category,
      title,
      disc,
      date
    }
    if(category!=='' && title!==''&&date !=='')
    {
      addToArray(field,newValue)
      Cancel()
  }
  };
  const onChange = (value) => {
    setCategory(value)
  };
  const handleDateChange = (date, dateString) => {
    // 'date' is a moment object representing the selected date
    // 'dateString' is a string in the format 'YYYY-MM-DD'
    // setDate(moment(date, 'YYYY-MM-DD'));
    setDate(dateString);
    console.log(dateString)

  }
  return (
    <Card borderColor={borderColor} data-testid="newTask">
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

          <TextField
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
          placeholder="Discreption"
          multiline
          rows={4}
          sx={{marginBottom:"8"}}
          />
        <DatePicker onChange={handleDateChange}/>
        </Box>
      <Actions >
        <SaveBtn border="#1677ff" onClick={Save}>Save</SaveBtn>
        <CancelBtn backgroundColor="#ff4d4f" onClick={Cancel}>Cancel</CancelBtn>
      </Actions>
    </Card>
  );
}
