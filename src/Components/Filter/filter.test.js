import { fireEvent, render, screen } from "@testing-library/react";
import Filter from "./filter";
import filterSlice from "../../Redux/filterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store =configureStore({
    reducer:{
      filter : filterSlice,
    }
})
test('tset filter appear', async () => {
  
    render(
      <Provider store={store}> 
      <Filter/>
      </Provider>
      );
    const add = screen.getByTestId('category');
    fireEvent.click(add);
    const input = screen?.getByTestId('intern');
    expect(input).toBeInTheDocument();
});