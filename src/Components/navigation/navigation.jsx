import { Button, Space } from 'antd'
import { Container, SearchBar, SecondContainer, Title } from './style'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../Redux/filterSlice';
import { addnewtasktodo } from '../../Redux/newtaskSlice';

export default function Navigation() {
    const filter=useSelector(state=>state.filter.filter)
    const dispatch =useDispatch()
return (
   <Container>
        <Title variant="h6" component="div" >
            Tasks
        </Title>
        <SecondContainer>
            <Space style={{marginRight:5 }}>
                    <Button type="primary" data-testid="newTaskBtn" onClick={()=>dispatch(addnewtasktodo())}>New task</Button>
            </Space>
            <SearchBar placeholder="input search text"   />
            <IconButton onClick={()=>dispatch(changeFilter())} data-testid="filterBtn">
                <FilterAltOutlinedIcon sx={{color:(filter===true) ? "#1890FF":"black"}}/>
            </IconButton>
        </SecondContainer>
    </Container>
)}