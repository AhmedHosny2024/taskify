import React from 'react';
import { Container, Header, Todo } from './style';
import { Box, IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TodoCard from '../Card/Card';
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { UpdateInDone, addInDone, removeInDone } from '../../../Redux/todoSlice';
import NewTask from '../Newtask/newTask';
import { addnewtaskdone } from '../../../Redux/newtaskSlice';


export default function Done (props) {
  const {done,borderColor}=props
  const newtask = useSelector(state=>state.newtask.adddone)
  const dispatch=useDispatch()
    return (
    <Container >
      <Header>
          <Todo >Done</Todo>
          <IconButton onClick={()=>dispatch(addnewtaskdone())}>
              <AddRoundedIcon sx={{color:"black"}}/>
          </IconButton>
      </Header>
      {newtask && <NewTask add={addInDone} borderColor={borderColor}/>}
      <Droppable droppableId="3" key="3">
        {(droppableProvided,droppableSnapshout) => (
          <Box ref={droppableProvided.innerRef} 
          {...droppableProvided.droppableProps}>
          {done.map((data,index) =>(
          <TodoCard data={data} borderColor="green" index={index} func={UpdateInDone} remove={removeInDone}/>
          ))}
          {droppableProvided.placeholder}
          </Box>
      )}

      </Droppable>
    </Container>
)};
