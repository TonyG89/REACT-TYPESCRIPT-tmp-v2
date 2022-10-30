import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: {
  }
}

// dispatch()

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers:{
    setCategoryId(state,action){
      console.log(action);
      state.categoryId = action.payload
      console.log(state);
    }
  }
})

export const {setCategoryId} =filterSlice.actions

export default filterSlice.reducer