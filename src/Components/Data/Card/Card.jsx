import React from 'react';
import { IconButton } from '@mui/material';
import { Card, Category, CategoryText, Disc, Header, Title } from './style';
import { DatePicker } from 'antd';
import { Draggable } from 'react-beautiful-dnd';
import More from './more/more';
import Edit from '../Edit/edit';
export default function TodoCard (props) {
    const {data,borderColor,index,func,remove}=props
    console.log(data.date)  
    return (
    <Draggable key={data.id} draggableId={data.id} index={index} >
        {(draggablePprovided,draggableSnapshot)=>(
        <Card borderColor={borderColor} 
            ref={draggablePprovided.innerRef} 
            {...draggablePprovided.draggableProps}
            {...draggablePprovided.dragHandleProps}
            style={{
                
                ...draggablePprovided.draggableProps.style
            }}
            data-testid={data.id}
            >
        <Header>
            <Category>
                <CategoryText>{data.category}</CategoryText>
            </Category>
            <IconButton>
                <More index={index} remove={remove} id={data.id} borderColor={borderColor}data={data}/>
                <Edit data={data} index={index} func={func} borderColor={borderColor}/>
            </IconButton>
        </Header>
        <Title>
            {data.title}
        </Title>
        <Disc>
            {data.disc}
        </Disc>
        <Title disabled>{data.date}</Title> 
        </Card>
        )}
    </Draggable>
    )};