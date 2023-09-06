import React from 'react';
import {  Conatiner, SubHeader } from './style';
import Categories from './Categories';
import DueDate from './DueDate';
import Priority from './States';

function Filter() {
    return ( 
<Conatiner data-testid="filter">
    <SubHeader component="div" id="nested-list-subheader">
        Filters
    </SubHeader>
    <Categories/>
    <DueDate/>
    <Priority/>
</Conatiner>
    )
}

export default Filter;