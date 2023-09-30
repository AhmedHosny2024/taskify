import { Box } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
  Select, SelectBox, SelectItem, SelectItemDelete,
} from './style';
// import { useDispatch } from 'react-redux';
// import { removeArrayElement } from '../../../../Firebase/firebase';
import { msg } from '../../../Snakbar';
import axios from "../../../../Server";

/**
 * More icon
 * @component
 * @property  {function} handleClick1 toggle showList or not
 * @property  {function} handleClickAway1 handle disable the list when click away
 * @property  {function} changeFavourit toggle favourit community

 * @return {React.Component} - More icon
 */
export default function More(props) {
  const {id,data,borderColor}=props
  // const dispatch=useDispatch()
  const [showList1, setShowList1] = useState(false);
  let field;
  switch(borderColor){
    case "red":
      field="todo"
      break
    case "yellow":
      field="inprogress"
      break
    case "green":
      field="done"
      break
    default:
      field="todo"
  }
  // toggle the list when click
  const handleClick1 = () => {
    setShowList1((prev) => !prev);
  };

  // handle disable the list when click away
  const handleClickAway1 = () => {
    setShowList1(false);
  };
  const deleteData = async (id) => {
    try {
       const response = await axios.delete(`api/Task/delete/${id}`);
       window.location.reload();

    } catch (error) {
       console.error(error);
    }
    
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
        <SelectItem onClick={()=>document.getElementById("edit"+id)?.click()}>Edit</SelectItem>
        <SelectItemDelete onClick={()=>{msg("success","Task deleted");deleteData(data.id)}}> Delete </SelectItemDelete>
      </SelectBox>
      )}
    </>

  );
}