import React from 'react';
import { Container, Header, Todo } from './style';
import { IconButton } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import TodoCard from '../Card/Card';
import { useSelector } from 'react-redux';

export default function InProgressCard () {
  let inprogress=useSelector(state=>state.todo.inprogress)
    return (
  <Container droppable >
    <Header>
        <Todo >In Progress</Todo>
        <IconButton>
            <MoreHorizRoundedIcon sx={{color:"black"}}/>
        </IconButton>
    </Header>
    {inprogress.map((data,index) =>
    <TodoCard data={data} borderColor="yellow" index={index} type="1"/>
  )}  
  </Container>
)};
