import App from './App.jsx';
import { Provider } from 'react-redux';
import filterSlice from './Redux/filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import drowerSlice from './Redux/drowerSlice';
import todoSlice from './Redux/todoSlice';
import newtaskSlice from './Redux/newtaskSlice';
const store =configureStore({
  reducer:{
    drower : drowerSlice,
    filter : filterSlice,
    todo   : todoSlice,
    newtask : newtaskSlice,
  }
})

test('renders learn react link', () => {
  <Provider store={store}> 
  render(<App />);
  const linkElement = screen.getByText(/Taskify/);
  expect(linkElement).toBeInTheDocument();
  </Provider>
});
