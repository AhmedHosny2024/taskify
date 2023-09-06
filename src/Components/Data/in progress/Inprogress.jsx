import React from 'react';
import { Container, Header, Todo } from './style';
import { Box, IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TodoCard from '../Card/Card';
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { UpdateInInprogress, addInProcess, removeInInProcess } from '../../../Redux/todoSlice';
import NewTask from '../Newtask/newTask';
import { useDispatch } from 'react-redux';
import { addnewtaskinprogress } from '../../../Redux/newtaskSlice';
import Loading from '../loading';

export default function InProgressCard (props) {
  const {inprogress,borderColor,inprogressloading,ref}=props
  const newtask = useSelector(state=>state.newtask.addinprogress)
  const dispatch=useDispatch()
    return (
  <Container >
    <Header>
        <Todo >In Progress</Todo>
        <IconButton onClick={()=>dispatch(addnewtaskinprogress())}>
            <AddRoundedIcon  sx={{color:"black"}}/>
        </IconButton>
    </Header>
    {inprogressloading ? <>
        <Loading/>
        <Loading/>
        <Loading/>
      </> :
      <>
    {newtask && <NewTask add={addInProcess} type="1"borderColor={borderColor} ref={ref}/>}
    <Droppable droppableId="2" key="2" >
        {(droppableProvided,droppableSnapshout) => (
          <Box ref={droppableProvided.innerRef} 
          {...droppableProvided.droppableProps}
          data-testid="inprogress"
          sx={{height:"100%"}}

          >
          {inprogress.map((data,index) =>
            <TodoCard data={data} borderColor="yellow" index={index} func={UpdateInInprogress} remove={removeInInProcess}/>
          )}  
        
          {droppableProvided.placeholder}

          </Box>
      )}
      </Droppable>
      </>
    }
  </Container>
)};
