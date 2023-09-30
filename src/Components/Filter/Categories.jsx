import { CheckSquareOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Collapse } from '@mui/material';
import React from 'react';
import { ALLList, Icon, IconText, ItemButton, MyList, SmallIconText, SubItemButton } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { category, changestate } from '../../Redux/dataSlice';

export default function  Categories () {

    const data= useSelector(state=>state.filterState)
    const display= useSelector(state=>state.category)

    const dispatch=useDispatch()
    const open=data[0]
    const handleClick = () => {
        dispatch(changestate(0))
    };


        return (
            <ALLList component="nav" aria-labelledby="nested-list-subheader" disablePadding>
            <ItemButton onClick={handleClick} sx={{width:"200px"}} data-testid="category">
                <Icon>
                <CheckSquareOutlined  style={{color: '#1890FF' }}/>
                </Icon>
                <IconText primary="Categories" />
                {open ? <MinusOutlined  style={{color: '#1890FF' }} />:<PlusOutlined style={{color: '#1890FF' }}/> }
            </ItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit >
                <MyList component="div" disablePadding > 
                    <SubItemButton selected={(display[0]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(category(0))} data-testid="intern">
                        <Icon/>
                        <SmallIconText primary="Intern" />
                    </SubItemButton>
                    <SubItemButton selected={(display[1]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(category(1))}>
                        <Icon/>
                        <SmallIconText primary="Junior" />
                    </SubItemButton>
                    <SubItemButton selected={(display[2]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(category(2))}>
                        <Icon/>
                        <SmallIconText primary="Senior" />
                    </SubItemButton>
                    <SubItemButton selected={(display[3]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(category(3))}>
                        <Icon/>
                        <SmallIconText primary="Manager" />
                    </SubItemButton>
                </MyList>
            </Collapse>
        </ALLList>
        );
    }

