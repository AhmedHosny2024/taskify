import React, { useEffect, useState } from 'react';
import { Actions, CancelBtn, Card, MyAvatar, Name, SaveBtn } from './style';
import { useDispatch } from 'react-redux';
import { setattendance, settasks } from '../../../Redux/IdsSlice';
import { SearchByUser } from './functions';
import { useSelector } from 'react-redux';



function AllUsers(props) {
    const {data}=props
    const [finalData,setFinalData]=useState(data)
    const searchState=useSelector(state=>state.search.searchUser)
    const word=useSelector(state=>state.search.userName)
    
    useEffect(()=>{
        if(searchState){
            setFinalData(SearchByUser(data,word))
        }
        else{
            setFinalData(data)
        }
    },[searchState,word])
  const disatch=useDispatch()
  return (
    <>
    {finalData.map((user)=>(
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
