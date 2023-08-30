import React from 'react';
import { IconButton } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Card, Category, CategoryText, Disc, Header, Title } from './style';
import { DatePicker } from 'antd';
export default function TodoCard (props) {
    const {data,borderColor}=props
    const onChange = (date, dateString) => {
        
        console.log(date, dateString);
      };

      
    return (
    <Card borderColor={borderColor} 
        draggable 
        
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
    )};