import { Container, SearchBar, SecondContainer, Title } from './style'
import { Box } from '@mui/material';
import { CancelUser } from '../../../Redux/IdsSlice';
import { useDispatch } from 'react-redux';
export default function Header() {
    const dispatch=useDispatch()
    const onSearch = (value) => {
 
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
                }}} 
                />
                
            </Box>
            
        </SecondContainer>
    </Container>
)}