import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { CartItem, CartSliceState } from './types';

const initialState: CartSliceState = getCartFromLS()
console.log(initialState);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size && obj.brand === action.payload.brand)
            
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({ ...action.payload, count: 1 })
            }

            state.totalPrice = calcTotalPrice(state.items)
        },
        minusItem(state, action: PayloadAction<string>) {
            const minusItem = state.items.find(obj => obj.id === action.payload) //payload.id
            
            if (minusItem.count > 1) {
                minusItem.count--
            } else {
                const minusIndexItem = state.items.indexOf(minusItem)
                state.items.splice(minusIndexItem, 1)
            }
            
            console.log(action.payload);

            state.totalPrice = calcTotalPrice(state.items)
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload) //payload.id
            state.totalPrice = calcTotalPrice(state.items)
        },
        clearItems(state) {
            if (window.confirm("Ви впевнені, що бажаєте очистити кошик?")) {
                state.items = []
                localStorage.setItem("cart", JSON.stringify([]))
                state.totalPrice = 0
            }
        }
    }
})

export const selectCart = (state: RootState) => state.cart

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer