import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchClothes = createAsyncThunk('clothes/fetchClothesStatus', async (params) => {
    const { url, urlApendix, goodsOnPage } = params
    const res = await axios.get(url + urlApendix + "&limit=" + goodsOnPage)
    console.log(res.data);
    return res.data
})

const clothesSlice = createSlice({
    name: 'clothes',
    initialState: {
        items: [],
        status: "loading" // loading | success | error
    },
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers:{
        [fetchClothes.pending]:(state)=> {
            state.status = "loading"
            state.items = []
        },
        [fetchClothes.fulfilled]:(state,action)=> {
            state.items = action.payload
            state.status = "success"
        },
        [fetchClothes.rejected]:(state,action)=> {
            state.status = "error"
            state.items = []
        },
    }
})


export const { setItems } = clothesSlice.actions

export default clothesSlice.reducer