import { Box, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import Navigation from '../navigation/navigation';
import Filter from '../Filter/filter';
import Data from '../Data/Data';
import { SecondContainer } from './style';

function Main() {
  const filter=useSelector(state=>state.filter.filter)

  return (
        <Box sx={{ width: "-webkit-fill-available", display:"flex",flexDirection:"column"}}>
          <Box>
            <Navigation/>
            <Divider/>
          </Box>
          <SecondContainer>
            {(filter)&&<Filter/>}
            <Data/>
          </SecondContainer>
        </Box>
  );
}

export default Main;
