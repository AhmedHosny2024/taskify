import React from 'react';
import { Actions, CancelBtn, Card, MyAvatar, Name, SaveBtn } from './style';
import { useDispatch } from 'react-redux';
import { setattendance, settasks } from '../../../Redux/IdsSlice';



function AllUsers(props) {
    const{data}=props
    
  const disatch=useDispatch()
  return (
    <>
    {data.map((user)=>(
    <Card>
        <MyAvatar src={user.profile}/>
        <Name>{user.name}</Name>
        <Actions>
        <SaveBtn border="#1677ff"onClick={() => {
            disatch(settasks(data.id))
        }}>Tasks</SaveBtn>
        <CancelBtn backgroundColor="#ff4d4f" onClick={() => {
            disatch(setattendance(data.id))
        }}>
            Attendance</CancelBtn>
        </Actions>
    </Card>
    ))}
    </>
    );
}

export default AllUsers;
