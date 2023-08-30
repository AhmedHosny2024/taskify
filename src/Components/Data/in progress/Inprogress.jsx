import React from 'react';
import { Container, Header, Todo } from './style';
import { Box, IconButton } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import TodoCard from '../Card/Card';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

export default function InProgressCard () {
  let inprogress=useSelector(state=>state.todo.inprogress)

    return (
  <Container >
    <Header>
        <Todo >In Progress</Todo>
        <IconButton>
            <MoreHorizRoundedIcon sx={{color:"black"}}/>
        </IconButton>
    </Header>
    <Droppable droppableId="2" key="2">
        {(droppableProvided,droppableSnapshout) => (
          <Box ref={droppableProvided.innerRef} 
          {...droppableProvided.droppableProps}>
          {inprogress.map((data,index) =>
            <TodoCard data={data} borderColor="yellow" index={index} />
          )}  
        
          {droppableProvided.placeholder}

          </Box>
      )}
      </Droppable>
    
  </Container>
)};
