import React from 'react';
import ToDo from './Todo/Todo';
import { Container } from './style';
import InProgressCard from './in progress/Inprogress';
import Done from './Done/done';


export default function Data () {
    return (
  <Container>
    <ToDo/>
    <InProgressCard/>
    <Done/>
  </Container>
)};
