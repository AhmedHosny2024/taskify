import { configureStore } from "@reduxjs/toolkit";
import drowerSlice from "../../Redux/drowerSlice";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import MiniDrawer from "./drower";

const store =configureStore({
    reducer:{
      drower : drowerSlice,
    }
})

test('tset filter appear', async () => {
  
    render(
      <Provider store={store}> 
       <MiniDrawer />
      </Provider>
      );
    const add = screen.getByTestId('drower');
    fireEvent.mouseEnter(add);
    const input = screen.getByTestId('mouseEnter');
    expect(input).toBeInTheDocument();
});