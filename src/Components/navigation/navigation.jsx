import { Button, Space } from 'antd'
import { Container, SearchBar, SecondContainer, Title } from './style'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Box, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addnewtasktodo, changeFilter, changeVale, changesearch} from '../../Redux/dataSlice';

export default function Navigation() {
    const filter=useSelector(state=>state.filter)
    const dispatch =useDispatch()
    const onSearch = (value) => {
        dispatch(changeVale(value))
        dispatch(changesearch(true))
    };
    
    return (
   <Container>
        <Title variant="h6" component="div" >
            Tasks
        </Title>
        <SecondContainer>
            <Space style={{marginRight:5 }}>
                    <Button type="primary" data-testid="newTaskBtn" onClick={()=>dispatch(addnewtasktodo())}>New task</Button>
            </Space>
            <Box >
                <SearchBar placeholder="Search"
                allowClear
                onChange={(e)=>{
                    if(e.target.value.trim()===""){
                        dispatch(changesearch(false))
                        dispatch(changeVale(""))
                }}} 
                onSearch={onSearch} 
                />
                
            </Box>
            <IconButton onClick={()=>dispatch(changeFilter())} data-testid="filterBtn">
                <FilterAltOutlinedIcon sx={{color:(filter===true) ? "#1890FF":"black"}}/>
            </IconButton>
        </SecondContainer>
    </Container>
)}