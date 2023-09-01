import { Box } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
  Select, SelectBox, SelectItem, SelectItemDelete,
} from './style';
/**
 * More icon
 * @component
 * @property  {function} handleClick1 toggle showList or not
 * @property  {function} handleClickAway1 handle disable the list when click away
 * @property  {function} changeFavourit toggle favourit community

 * @return {React.Component} - More icon
 */
export default function More(props) {
  const {id}=props

  const [showList1, setShowList1] = useState(false);

  // toggle the list when click
  const handleClick1 = () => {
    setShowList1((prev) => !prev);
  };

  // handle disable the list when click away
  const handleClickAway1 = () => {
    setShowList1(false);
  };
  
  return (
    <>
      <Select>
        <ClickAwayListener onClickAway={handleClickAway1}>
          <Box data-testid="sort" sx={{ display: 'flex' }} onClick={() => { handleClick1(); }}>
            <MoreHorizIcon sx={{color:"black"}}/>
          </Box>
        </ClickAwayListener>
      </Select>
      {showList1 && (
      <SelectBox data-testid="items" >
        <SelectItem onClick={()=>document.getElementById(id).click()}>Edit</SelectItem>
        <SelectItemDelete> Delete </SelectItemDelete>
      </SelectBox>
      )}
    </>

  );
}