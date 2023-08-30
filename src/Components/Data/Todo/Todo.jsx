import React from 'react';
import { Container, Header, Todo } from './style';
import { IconButton } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import TodoCard from '../Card/Card'
import { useSelector } from 'react-redux';


export default function ToDo () {
  let todo=useSelector(state=>state.todo.todo)
    return (
  <Container droppable>
    <Header>
        <Todo >To do</Todo>
        <IconButton>
            <MoreHorizRoundedIcon sx={{color:"black"}}/>
        </IconButton>
    </Header>
    {todo.map((data,index) =>
    <TodoCard data={data} borderColor="red"index={index} type="0"/>
    )}
  </Container>
)};
