import React from 'react';
import { Container, Header, Todo } from './style';
import { Box, IconButton } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import TodoCard from '../Card/Card'
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';



export default function ToDo () {
  const todo=useSelector(state=>state.todo.todo)


    return (
    <Container>
      <Header>
          <Todo >To do</Todo>
          <IconButton>
              <MoreHorizRoundedIcon sx={{color:"black"}}/>
          </IconButton>
      </Header>
      <Droppable droppableId="1" key="1">
        {(droppableProvided,droppableSnapshout) => (
          <Box ref={droppableProvided.innerRef} 
          {...droppableProvided.droppableProps}>
          {todo.map((data,index) =>(
          <TodoCard data={data} borderColor="red" index={index} />
          ))}
          {droppableProvided.placeholder}
          </Box>
      )}
      </Droppable>
    </Container>
)};
