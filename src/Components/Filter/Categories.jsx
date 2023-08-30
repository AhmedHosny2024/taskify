import { CheckSquareOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Collapse } from '@mui/material';
import React from 'react';
import { ALLList, Icon, IconText, ItemButton, MyList, SmallIconText, SubItemButton } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { category, changestate } from '../../Redux/filterSlice';

export default function  Categories () {

    const data= useSelector(state=>state.filter.filterState)
    const display= useSelector(state=>state.filter.category)

    const dispatch=useDispatch()
    const open=data[0]
    const handleClick = () => {
        dispatch(changestate(0))
    };


        return (
            <ALLList component="nav" aria-labelledby="nested-list-subheader" disablePadding>
            <ItemButton onClick={handleClick} sx={{width:"200px"}}>
                <Icon>
                <CheckSquareOutlined  style={{color: '#1890FF' }}/>
                </Icon>
                <IconText primary="Categories" />
                {open ? <MinusOutlined  style={{color: '#1890FF' }} />:<PlusOutlined style={{color: '#1890FF' }}/> }
            </ItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit >
                <MyList component="div" disablePadding > 
                <SubItemButton selected={(display[0]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(category(0))}>
                        <Icon/>
                        <SmallIconText primary="Intern" />
                    </SubItemButton>
                    <SubItemButton selected={(display[1]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(category(1))}>
                        <Icon/>
                        <SmallIconText primary="Work" />
                    </SubItemButton>
                    <SubItemButton selected={(display[2]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(category(2))}>
                        <Icon/>
                        <SmallIconText primary="UX Designer" />
                    </SubItemButton>
                </MyList>
            </Collapse>
        </ALLList>
        );
    }

