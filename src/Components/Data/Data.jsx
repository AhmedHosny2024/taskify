import React, { useEffect, useState } from 'react';
import ToDo from './Todo/Todo';
import { Container } from './style';
import InProgressCard from './in progress/Inprogress';
import Done from './Done/done';
import { useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import {db, removeArrayElement, updateField} from'../../Firebase/firebase'
import { useSelector } from 'react-redux';
import { checkCategory } from './functions';


export default function Data () {
  const ref = db.collection("data");
  const [data,setData] =useState([])

  const [todo,setTodo] =useState([])
  const [todoloading, setToDoLoading] = useState(true);

  const [inprogress,setInprogress] =useState([])

  const [done,setDone] =useState([])

  useEffect(() => {
    // Reference to your Firestore collection
    const collectionRef = db.collection('data');

    // Subscribe to real-time changes with onSnapshot
    const unsubscribe = collectionRef.onSnapshot((querySnapshot) => {
      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        // Convert each document to an object with data
        fetchedData.push({ id: doc.id, ...doc.data() });
      });
      setData(fetchedData);
      setTodo((fetchedData.map((a) => a.todo)).flat())
      setInprogress(fetchedData.map((a) => a.inprogress).flat())
      setDone(fetchedData.map((a) => a.done).flat())
      setToDoLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // const dispatch=useDispatch()
  // const todo=useSelector(state=>state.todo.todo)
  // const inprogress=useSelector(state=>state.todo.inprogress)
  // const done=useSelector(state=>state.todo.done)
  const category=useSelector(state=>state.filter.category)
useEffect(()=>{
  if(category.some((element) => element === true))
  {
  setTodo(checkCategory(todo,category))
  setInprogress(checkCategory(inprogress,category))
  setDone(checkCategory(done,category))
  }
  else{
    setTodo((data.map((a) => a.todo)).flat())
    setInprogress(data.map((a) => a.inprogress).flat())
    setDone(data.map((a) => a.done).flat())
    setToDoLoading(false);
  }

},[category])
   const dragEnd=async(result)=>{ 

    if(!result.destination) return ;
    const {destination , source}=result;
    let data
    if(source.droppableId===destination.droppableId){
      switch(source.droppableId){
        case "1":
          todo[source.index] = todo.splice(destination.index, 1, todo[source.index])[0];
          updateField("todo",todo)
          break
        case "2":
          inprogress[source.index] = inprogress.splice(destination.index, 1, inprogress[source.index])[0];
          updateField("inprogress",inprogress)
          break
        case "3":
          done[source.index] = done.splice(destination.index, 1, done[source.index])[0];
          updateField("done",done)
          break
        default:break
      }
    }
    else{
    switch(source.droppableId){
      case "1":
        data=todo[source.index]
        removeArrayElement("todo",data)
        break
      case "2":
        data=inprogress[source.index]
        removeArrayElement("inprogress",data)
        break
      case "3":
        data=done[source.index]
        removeArrayElement("done",data)
        break
      default:break
    }
     switch(destination.droppableId){
      case "1":
        todo.splice(destination.index, 0, data)
         updateField("todo",todo)
        break
      case "2":
        inprogress.splice(destination.index, 0, data)
        updateField("inprogress",inprogress)
        break
      case "3":
        done.splice(destination.index, 0, data)
        updateField("done",done)
        break
      default:
        break
    }
  }
}
    return (
  <DragDropContext onDragEnd={dragEnd}>
  <Container>
    <ToDo todo={todo} borderColor="#1677ff" todoloading={todoloading}ref={ref}/>
    <InProgressCard inprogress={inprogress}borderColor="#1677ff" inprogressloading={todoloading} ref={ref}/>
    <Done done={done} borderColor="#1677ff" doneloading={todoloading} ref={ref}/>
  </Container>
  </DragDropContext>

)};
