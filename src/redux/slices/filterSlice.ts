import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'
import { FilterSliceState } from './types';

export const initialState: FilterSliceState = {
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
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
      state.page = 1;
    },
    setSort(state, action: PayloadAction<number>) {
      state.sort = action.payload
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setFilter(state, action: PayloadAction<FilterSliceState>) {
      state.categoryId = Number(action.payload.categoryId);
      state.page = Number(action.payload.page);
      state.sort = Number(action.payload.sort);
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    }
  }
})

export const selectSort = (state: RootState) => state.filter.sort

export const selectFilter = (state: RootState) => state.filter

export const { setCategoryId, setSort, setPage, setFilter, setSearch } = filterSlice.actions

export default filterSlice.reducer