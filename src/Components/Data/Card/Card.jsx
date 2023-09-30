import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Card, Category, CategoryText, Disc, Header, Title } from './style';
import { Draggable } from 'react-beautiful-dnd';
import More from './more/more';
import Edit from '../Edit/edit';
import Display from '../dispay/display';
export default function TodoCard (props) {
    const {data,borderColor,index,func,remove}=props
    return (
    <Draggable key={data?.id.toString()} draggableId={data?.id.toString()} index={index} >
        {(draggablePprovided,draggableSnapshot)=>(
        <Card borderColor={borderColor} 
            ref={draggablePprovided.innerRef} 
            {...draggablePprovided.draggableProps}
            {...draggablePprovided.dragHandleProps}
            style={{
                
                ...draggablePprovided.draggableProps.style
            }}
            data-testid={data?.id}
            >
        <Header>
            <Category>
                <CategoryText>{data.category}</CategoryText>
            </Category>
            <Box>
                <Display data={data}/>
                <IconButton sx={{padding:1}}>
                    <More index={index} remove={remove} id={data.id} borderColor={borderColor}data={data}/>
                    <Edit data={data} index={index} func={func} borderColor={borderColor}/>
                </IconButton>
            </Box>
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