import '@testing-library/jest-dom';
import {
  render,fireEvent,screen
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../../Redux/filterSlice';
import App from '../../App';
import drowerSlice from '../../Redux/drowerSlice';
import todoSlice from '../../Redux/todoSlice';
import newtaskSlice from '../../Redux/newtaskSlice';
const store =configureStore({
    reducer:{
      drower : drowerSlice,
      filter : filterSlice,
      todo   : todoSlice,
      newtask : newtaskSlice,
    }
})

test('tset filter appear', async () => {
  
    render(
      <Provider store={store}> 
       <App />
      </Provider>
      );
    const add = screen.getByTestId('filterBtn');
    fireEvent.click(add);
    const input = screen?.getByTestId('filter');
    expect(input).toBeInTheDocument();
});
test('tset new task appear', async () => {
  
  render(
    <Provider store={store}> 
     <App />
    </Provider>
    );
  const add = screen.getByTestId('newTaskBtn');
  fireEvent.click(add);
  const input = screen?.getByTestId('newTask');
  expect(input).toBeInTheDocument();
});