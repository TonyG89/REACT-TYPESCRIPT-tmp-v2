import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { CartItem } from './cartSlice'

export type FetchClothesArgs = {
    categoryId: number;
    sort: number;
    page: number;
    search: string;
}

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

export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
}

interface ClothesSliceState {
    items: Clothes[];
    status: Status;
}

const initialState: ClothesSliceState = {
    items: [],
    status: Status.LOADING
}

export const fetchClothes = createAsyncThunk('clothes/fetchClothesStatus', async (params: FetchClothesArgs) => {
    const { url, urlApendix, goodsOnPage } = params
    const res = await axios.get<Clothes[]>(url + urlApendix + "&limit=" + goodsOnPage)
    return res.data as Clothes[]
})

const clothesSlice = createSlice({
    name: 'clothes',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Clothes[]>) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchClothes.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        }
        )

        builder.addCase(fetchClothes.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        }
        )

        builder.addCase(fetchClothes.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
        }
        )
    }
})

export const selectClothes = state => state.clothes

export const { setItems } = clothesSlice.actions

export default clothesSlice.reducer