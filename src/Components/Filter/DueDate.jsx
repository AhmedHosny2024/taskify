import { CheckSquareOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Collapse } from '@mui/material';
import React from 'react';
import { ALLList, Icon, IconText, ItemButton, MyList, SmallIconText, SubItemButton } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { dudate, changestate } from '../../Redux/filterSlice';

export default function  DueDate () {

    const data= useSelector(state=>state.filter.filterState)
    const display= useSelector(state=>state.filter.dudate)
    const dispatch=useDispatch()
    const open=data[1]
    const handleClick = () => {
        dispatch(changestate(1))
    };


        return (
            <ALLList component="nav" aria-labelledby="nested-list-subheader" disablePadding>
            <ItemButton onClick={handleClick} sx={{width:"200px"}}>
                <Icon>
                <CheckSquareOutlined  style={{color: '#1890FF' }}/>
                </Icon>
                <IconText primary="DueDate" />
                {open ? <MinusOutlined  style={{color: '#1890FF' }} />:<PlusOutlined style={{color: '#1890FF' }}/> }
            </ItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit sx={{width:"250px"}}>
                <MyList component="div" disablePadding>
                    <SubItemButton selected={(display[0]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(dudate(0))}>
                        <Icon/>
                        <SmallIconText primary="Today" />
                    </SubItemButton>
                    <SubItemButton selected={(display[1]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(dudate(1))}>
                        <Icon/>
                        <SmallIconText primary="Next-Week" />
                    </SubItemButton>
                    <SubItemButton selected={(display[2]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(dudate(2))}>
                        <Icon/>
                        <SmallIconText primary="Next-Month" />
                    </SubItemButton>
                </MyList>
            </Collapse>
        </ALLList>
        );
    }

