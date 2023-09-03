import React from 'react';
import ToDo from './Todo/Todo';
import { Container } from './style';
import InProgressCard from './in progress/Inprogress';
import Done from './Done/done';
import { useSelector,useDispatch } from 'react-redux';
import { addInDoneIndex, addInInProcessIndex, addInTodoIndex, removeInDone, removeInInProcess, removeInTodo } from '../../Redux/todoSlice';
import { DragDropContext } from 'react-beautiful-dnd';


export default function Data () {
  const dispatch=useDispatch()
  const todo=useSelector(state=>state.todo.todo)
  const inprogress=useSelector(state=>state.todo.inprogress)
  const done=useSelector(state=>state.todo.done)

  const dragEnd=(result)=>{
    if(!result.destination) return ;
    const {destination , source}=result;
    console.log(result)
    let data=0

    switch(source.droppableId){
      case "1":
        data=todo[source.index]
        dispatch(removeInTodo(source.index))
        break
      case "2":
        data=inprogress[source.index]
        dispatch(removeInInProcess(source.index))
        break
      case "3":
        data=done[source.index]
        dispatch(removeInDone(source.index))
        break
      default:break
    }
    switch(destination.droppableId){
      case "1":
        dispatch(addInTodoIndex([destination.index,data]))
        break
      case "2":
        dispatch(addInInProcessIndex([destination.index,data]))
        break
      case "3":
        dispatch(addInDoneIndex([destination.index,data]))
        break
      default:break
    }
  }
  // const dragEnd1=()=>{}
    return (
  <DragDropContext onDragEnd={dragEnd}>
  <Container>
    <ToDo todo={todo} borderColor="#1677ff"/>
    <InProgressCard inprogress={inprogress}borderColor="#1677ff"/>
    <Done done={done} borderColor="#1677ff"/>
  </Container>
  </DragDropContext>

)};
