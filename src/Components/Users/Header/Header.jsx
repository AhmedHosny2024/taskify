import { Container, SearchBar, SecondContainer, Title } from './style'
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { CancelUser, changeUserName, changeUserSearch } from '../../../Redux/dataSlice';
export default function Header() {
    const dispatch=useDispatch()
    const onSearch = (value) => {
        dispatch(changeUserName(value))
        dispatch(changeUserSearch(true))
    };
    return (
   <Container>
        <Title variant="h6" component="div" >
            Users
        </Title>
        <SecondContainer>
            <Box >
                <SearchBar placeholder="Search"
                allowClear
                onChange={(e)=>{
                    if(e.target.value.trim()===""){
                        dispatch(CancelUser(""))
                        dispatch(changeUserSearch(false))
                        dispatch(changeUserName(""))
                }}} 
                onSearch={onSearch} 
                />
                
            </Box>
            
        </SecondContainer>
    </Container>
)}