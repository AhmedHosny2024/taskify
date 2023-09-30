import React, { useEffect, useMemo, useState } from 'react';
import ToDo from './Todo/Todo';
import { Container } from './style';
import InProgressCard from './in progress/Inprogress';
import Done from './Done/done';
import { useDispatch } from 'react-redux';
import axios from "../../Server";
import { DragDropContext } from 'react-beautiful-dnd';

// import {db, removeArrayElement, updateField} from'../../Firebase/firebase'
import { useSelector } from 'react-redux';
import { Today, Yesterday, checkCategory, checkall, chekDate, searchByVal, } from './functions';
import { SetToday, SetYesterday } from '../../Redux/dataSlice';
import AllData from './DataServer';
import AddTask from './AddTask';
import { msg } from '../Snakbar';


export default function Data () {
  // const ref = db.collection("data");
  const [fetchedData,setfetchedData] =useState([])
  const dispatch=useDispatch()
  const [mainTodo,setmainTodo] =useState([])
  const [mainInprogress,setmainInprogress] =useState([])
  const [mainDone,setmainDone] =useState([])

  const [todo,setTodo] =useState([])
  const [todoloading, setToDoLoading] = useState(true);

  const [inprogress,setInprogress] =useState([])

  const [done,setDone] =useState([])

  // useEffect(() => {
  //   setToDoLoading(true)
  //   // Reference to your Firestore collection
  //   const collectionRef = db.collection('data');

  //   // Subscribe to real-time changes with onSnapshot
  //   const unsubscribe = collectionRef.onSnapshot((querySnapshot) => {
  //     const fetchedData = [];
  //     querySnapshot.forEach((doc) => {
  //       // Convert each document to an object with data
  //       fetchedData.push({ id: doc.id, ...doc.data() });
  //     });
  //     // setData(fetchedData);
  //     setmainTodo((fetchedData.map((a) => a.todo)).flat())
  //     setmainTodo((fetchedData.map((a) => a.todo)).flat())
  //     setTodo((fetchedData.map((a) => a.todo)).flat())
  //     setmainInprogress(fetchedData.map((a) => a.inprogress).flat())
  //     setInprogress(fetchedData.map((a) => a.inprogress).flat())
  //     setDone(fetchedData.map((a) => a.done).flat())
  //     setmainDone(fetchedData.map((a) => a.done).flat())
  //     let x=[(fetchedData.map((a) => a.todo)).flat(),(fetchedData.map((a) => a.inprogress)).flat()].flat()
  //     dispatch(SetToday(Today(x)))
  //     dispatch(SetYesterday(Yesterday(x)))
  //     setToDoLoading(false);
  //   });

  //   // Clean up the listener when the component unmounts
  //   return () => unsubscribe();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const dispatch=useDispatch()
  // const todo=useSelector(state=>state.todo.todo)
  // const inprogress=useSelector(state=>state.todo.inprogress)
  
  
  const id=useSelector(state=>state.lastid)
  const [data, error, statusCode]= AllData(id)
console.log(data)
const value2 = useMemo(() => ({ data, error }), [data, error]);
  console.log(value2);
  useEffect(() => {
    setToDoLoading(true)
    // Reference to your Firestore collection

    // Subscribe to real-time changes with onSnapshot
      setfetchedData(data)
      // setData(fetchedData);
      setmainTodo(fetchedData?.filter((a) => a.task_Status==="ToDo"))
      setTodo((fetchedData?.filter((a) => a.task_Status==="ToDo")))
      setmainInprogress(fetchedData?.filter((a) => a.task_Status==="InProgress"))
      setInprogress(fetchedData?.filter((a) => a.task_Status==="InProgress"))
      setDone(fetchedData?.filter((a) => a.task_Status==="Done"))
      setmainDone(fetchedData?.filter((a) => a.task_Status==="Done"))

      let temp1=(fetchedData?.filter((a) => a.task_Status==="ToDo"))
      let temp2=(fetchedData?.filter((a) => a.task_Status==="InProgress"))
      let x=[]
      if(temp1!==undefined&&temp1!==null){
        x.push(temp1)
      }
      if(temp2!==undefined&&temp2!==null){
        x.push(temp2)
      }
      x=x?.flat()
      dispatch(SetToday(Today(x)))
      dispatch(SetYesterday(Yesterday(x)))
      setToDoLoading(false);
      console.log(data)
    }, [data,id,fetchedData]);
    console.log(todo)
    const values = useMemo(() => ({ data, error }), [data, error]);

  const category=useSelector(state=>state.category)
  const datefilter=useSelector(state=>state.filterState)[1]
  const start=useSelector(state=>state.startDate)
  const end=useSelector(state=>state.endDate)
  const searchState=useSelector(state=>state.searchState)
  const searchval=useSelector(state=>state.val)
  
useEffect(()=>{
  let checkf=category.some((element) => element === true)
  let chechd=(datefilter && (start||end))

  if(checkf && chechd){
    console.log(mainTodo)
    setTodo(checkall(mainTodo,category,start,end))
    setInprogress(checkall(mainInprogress,category,start,end))
    setDone(checkall(mainDone,category,start,end))
  }
  else if(checkf)
  {
    setTodo(checkCategory(mainTodo,category))
    setInprogress(checkCategory(mainInprogress,category))
    setDone(checkCategory(mainDone,category))
  }
  
  else if(chechd){
    setTodo(chekDate(mainTodo,start,end))
    setInprogress(chekDate(mainInprogress,start,end))
    setDone(chekDate(mainDone,start,end))

  }
  else{
    setTodo(mainTodo)
    setInprogress(mainInprogress)
    setDone(mainDone)
  }
  if(searchState){
    setTodo(searchByVal(todo,searchval))
    setInprogress(searchByVal(inprogress,searchval))
    setDone(searchByVal(done,searchval))
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
},[category,datefilter,start,end,searchState,searchval,data,fetchedData,mainDone,mainInprogress,mainTodo])


const deleteData = async (id) => {
  try {
     const response = await axios.delete(`api/Task/delete/${id}`);
     window.location.reload();

  } catch (error) {
     console.error(error);
  }
  
};

   const dragEnd=async(result)=>{ 
     
     console.log(result)
    if(!result.destination) return ;
    const {destination , source}=result;
    let data
    // if(source.droppableId===destination.droppableId){
    //   switch(source.droppableId){
    //     case "1":
    //       todo[source.index] = todo.splice(destination.index, 1, todo[source.index])[0];
    //       // updateField("todo",todo)
    //       break
    //     case "2":
    //       inprogress[source.index] = inprogress.splice(destination.index, 1, inprogress[source.index])[0];
    //       updateField("inprogress",inprogress)
    //       break
    //     case "3":
    //       done[source.index] = done.splice(destination.index, 1, done[source.index])[0];
    //       updateField("done",done)
    //       break
    //     default:break
    //   }
    // }
    // else{
      console.log(todo)
    switch(source.droppableId) {
      case "1":
         data=todo[source.index]
        //  console.log(data)
        // removeArrayElement("todo",data)
        break
      case "2":
        data=inprogress[source.index]
        // console.log(data)
        // removeArrayElement("inprogress",data)
        break
      case "3":
        data=done[source.index]
        // console.log(data)
        // removeArrayElement("done",data)
        break
      default:break
    }
    console.log(data)
    deleteData(data?.id)

      
     switch(destination.droppableId){
      case "1":
        AddTask(data.title,data.disc,data.category,data.date,"1",data.userId)  

        // todo.splice(destination.index, 0, data)
        //  updateField("todo",todo)
        break
      case "2":
        AddTask(data.title,data.disc,data.category,data.date,"2",data.userId)  
        // inprogress.splice(destination.index, 0, data)
        // updateField("inprogress",inprogress)
        break
      case "3":
        AddTask(data.title,data.disc,data.category,data.date,"3",data.userId)  
        // done.splice(destination.index, 0, data)
        // updateField("done",done)
        break
      default:
        break
    }
    msg("success","element moved to the buttom of this column")
      window.location.reload()
  }
  //  }
    return (
  <DragDropContext onDragEnd={dragEnd}>
  <Container>
    <ToDo todo={todo} borderColor="#1677ff" todoloading={todoloading}/>
    <InProgressCard inprogress={inprogress}borderColor="#1677ff" inprogressloading={todoloading} />
    <Done done={done} borderColor="#1677ff" doneloading={todoloading} />
  </Container>
  </DragDropContext>

)};
