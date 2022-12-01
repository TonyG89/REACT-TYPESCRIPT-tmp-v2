import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchClothes = createAsyncThunk('clothes/fetchClothesStatus', async (params) => {
    const { url, urlApendix, goodsOnPage } = params
    const res = await axios.get(url + urlApendix + "&limit=" + goodsOnPage)
    return res.data
})

type Clothes = {
    id: string;
    title: string;
    link: number;
    brand: string;
    size: string;
    color: string;
    price: number;
    count?: number;
}

interface ClothesSliceState {
    items: Clothes[];
    status: "loading" | "success" | "error";
}

const initialState: ClothesSliceState = {
    items: [],
    status: "loading"
}

const clothesSlice = createSlice({
    name: 'clothes',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchClothes.pending]: (state) => {
            state.status = "loading"
            state.items = []
        },
        [fetchClothes.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = "success"
        },
        [fetchClothes.rejected]: (state, action) => {
            state.status = "error"
            state.items = []
        },
    }
})

export const selectClothes = state => state.clothes

export const { setItems } = clothesSlice.actions

export default clothesSlice.reducer