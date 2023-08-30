import React from 'react';
import { Container, Header, Todo } from './style';
import { Box, IconButton } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import TodoCard from '../Card/Card';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';


export default function Done () {
  let done=useSelector(state=>state.todo.done)
    return (
    <Container >
      <Header>
          <Todo >Done</Todo>
          <IconButton>
              <MoreHorizRoundedIcon sx={{color:"black"}}/>
          </IconButton>
      </Header>
      <Droppable droppableId="3" key="3">
        {(droppableProvided,droppableSnapshout) => (
          <Box ref={droppableProvided.innerRef} 
          {...droppableProvided.droppableProps}>
          {done.map((data,index) =>(
          <TodoCard data={data} borderColor="green" index={index} />
          ))}
          {droppableProvided.placeholder}
          </Box>
      )}

      </Droppable>
    </Container>
)};
