import React, { useEffect, useState } from 'react';
import { Actions, CancelBtn, Card, MyAvatar, Name, SaveBtn } from './style';
import { useDispatch } from 'react-redux';
import { SearchByUser } from './functions';
import { useSelector } from 'react-redux';
import { setattendance, setlastId, setname, settasks } from '../../../Redux/dataSlice';
import Users from './usersServer';



function AllUsers(props) {
    // const {data}=props
    const dep=useSelector(state=>state.dep)
    const [data, error, statusCode]= Users(dep)
    const [finalData,setFinalData]=useState(data)
    useEffect(()=>{
        setFinalData(data)
    },[data])
    const searchState=useSelector(state=>state.searchUser)
    const word=useSelector(state=>state.userName)
    
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
    {finalData?.map((user)=>(
    <Card>
        <MyAvatar src={user.image}/>
        <Name>{user.name}</Name>
        <Actions>
        <SaveBtn border="#1677ff"onClick={() => {
            disatch(setname(user.name))
            disatch(setlastId(user.id))
            disatch(settasks(user.id))
        }}>Tasks</SaveBtn>
        <CancelBtn backgroundColor="#ff4d4f" onClick={() => {
            disatch(setname(user.name))
            disatch(setlastId(user.id))
            disatch(setattendance(user.id))
        }}>
            Attendance</CancelBtn>
        </Actions>
    </Card>
    ))}
    </>
    );
}

export default AllUsers;
