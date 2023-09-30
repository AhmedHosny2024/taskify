import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Actions, Card, MySelect,SaveBtn,CancelBtn } from './style';
import { useDispatch } from 'react-redux';
import { DatePicker } from 'antd';
// import {addToArray} from "../../../Firebase/firebase"
import moment from 'moment';
import { msg } from '../../Snakbar';
import { closeall } from '../../../Redux/dataSlice';
import AddTask from '../AddTask';
import { useSelector } from 'react-redux';
// const { v4: uuidv4 } = require('uuid');

export default function NewTask(props) {
  moment.locale('en')
  const {borderColor,type}=props
  const [disc, setDisc] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [date, setDate] = React.useState('');
// const [snak,setSnak]=react.useState(false)
  const userId=useSelector(state=>state.lastid)
  const dispatch=useDispatch()
  const Cancel = () => {
    setCategory('')
    setDisc('')
    setTitle('')
    dispatch(closeall())
  };
  let taskStatusId;
  // const id= uuidv4()
  const Save = async () => {
    switch(type){
      case "0":
        taskStatusId=1
        break
      case "1":
        taskStatusId=2
        break
      case "2":
        taskStatusId=3
        break
      default:
        taskStatusId=1
    }
    
      
    
    if(category!=='' && title!==''&&date !==''&&disc!=="")
    {
      // addToArray(field,newValue)
      const status = await AddTask(title,disc,category,date,taskStatusId,userId)
      Cancel()
      window.location.reload()
      msg("success","Task added successfuly")
    }
    else{
      if(category===''){msg("error","Please select Category")}
      else if(title===''){msg("error","Please add title")}
      else if(date===''){msg("error","Please select date")}
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

  }
  return (
    <Card borderColor={borderColor} data-testid="newTask">
      <MySelect
        showSearch
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
          inputProps={{
            maxlength: 200
          }}
          helperText={`${disc.length}/200`}
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
          placeholder="Discreption"
          multiline
          rows={8}
          maxRows={8}
          sx={{marginBottom:"8",overflowY:"clip"}}
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
