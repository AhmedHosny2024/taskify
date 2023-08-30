import React from 'react';
import { Container, Header, Todo } from './style';
import { IconButton } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import TodoCard from '../Card/Card';
import { useSelector } from 'react-redux';


export default function Done () {
  let done=useSelector(state=>state.todo.inprogress)
  return (
    <Container droppable >
      <Header>
          <Todo >Done</Todo>
          <IconButton>
              <MoreHorizRoundedIcon sx={{color:"black"}}/>
          </IconButton>
      </Header>
      {done.map((data,index) =>
      <TodoCard data={data} borderColor="green"index={index} type="2"/>
    )}
    </Container>
)};
