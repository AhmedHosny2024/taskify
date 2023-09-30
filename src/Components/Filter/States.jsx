import { CheckSquareOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Collapse } from '@mui/material';
import React from 'react';
import { ALLList, Icon, IconText, ItemButton, MyList, SmallIconText, SubItemButton } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { changestate, staues } from '../../Redux/filterSlice';

export default function  Priority () {

    const data= useSelector(state=>state.filterState)
    const display= useSelector(state=>state.staues)

    const dispatch=useDispatch()
    const open=data[2]
    const handleClick = () => {
        dispatch(changestate(2))
    };

        return (
            <ALLList component="nav" aria-labelledby="nested-list-subheader" disablePadding>
            <ItemButton onClick={handleClick} sx={{width:"200px", alignItems:"end"}}>
                <Icon>
                <CheckSquareOutlined  style={{color: '#1890FF' }}/>
                </Icon>
                <IconText primary="Priority" />
                {open ? <MinusOutlined  style={{color: '#1890FF' }} />:<PlusOutlined style={{color: '#1890FF' }}/> }
            </ItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit >
                <MyList component="div" disablePadding> 
                <SubItemButton selected={(display[0]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(staues(0))}>
                        <Icon/>
                        <SmallIconText primary="Low" />
                    </SubItemButton>
                    <SubItemButton selected={(display[1]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(staues(1))}>
                        <Icon/>
                        <SmallIconText primary="Meduim" />
                    </SubItemButton>
                    <SubItemButton selected={(display[2]===true).toString()} sx={{ pl: 4 }} onClick={()=>dispatch(staues(2))}>
                        <Icon/>
                        <SmallIconText primary="High" />
                    </SubItemButton>
                </MyList>
            </Collapse>
        </ALLList>
        );
    }

