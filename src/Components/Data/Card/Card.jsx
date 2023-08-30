import React from 'react';
import { IconButton } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Card, Category, CategoryText, Disc, Header, Title } from './style';
import { DatePicker } from 'antd';
import { Draggable } from 'react-beautiful-dnd';
export default function TodoCard (props) {
    const {data,borderColor,index}=props
    const onChange = (date, dateString) => {
        
        console.log(date, dateString);
      };

      
    return (
    <Draggable key={data.id} draggableId={data.id} index={index}>
        {(draggablePprovided,draggableSnapshot)=>(
        <Card borderColor={borderColor} 
            ref={draggablePprovided.innerRef} 
            {...draggablePprovided.draggableProps}
            {...draggablePprovided.dragHandleProps}
            style={{
                
                ...draggablePprovided.draggableProps.style
            }}
            >
        <Header>
            <Category>
                <CategoryText>{data.category}</CategoryText>
            </Category>
            <IconButton>
                <MoreHorizRoundedIcon sx={{color:"black"}}/>
            </IconButton>
        </Header>
        <Title>
            {data.title}
        </Title>
        <Disc>
            {data.disc}
        </Disc>
        <DatePicker onChange={onChange} />
        </Card>
        )}
    </Draggable>
    )};