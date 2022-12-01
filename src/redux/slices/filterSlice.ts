import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store'

interface FilterSliceState{
  categoryId: number;
  sort: number;
  page: number;
  search: string;
}

const initialState:FilterSliceState = {
  categoryId: 0,
  sort: 0,
  page: 1,
  search: ""
}

// dispatch()

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
      state.page = 1;
    },
    setSort(state, action) {
      state.sort = action.payload
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload
    },
    setFilter(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.page = Number(action.payload.page);
      state.sort = Number(action.payload.sort);
    },
    setSearch(state, action) {
      state.search = action.payload
    }
  }
})

export const selectSort = (state: RootState) => state.filter.sort

export const selectFilter = (state: RootState) => state.filter

export const { setCategoryId, setSort, setPage, setFilter, setSearch } = filterSlice.actions

export default filterSlice.reducer