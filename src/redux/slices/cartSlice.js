import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalPrice: 0,
        items: []
    },
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size && obj.brand === action.payload.brand)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({ ...action.payload, count: 1 })
            }
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        },
        minusItem(state, action) {
            const minusItem = state.items.find(obj => obj.id === action.payload.id)
            if (minusItem.count > 1) {
                minusItem.count--
            } else {
                const minusIndexItem = state.items.indexOf(minusItem)
                state.items.splice(minusIndexItem, 1)
                console.log(state.items.indexOf(minusIndexItem));
            }
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id)
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        },
        clearItems(state) {
            if (window.confirm("Ви впевнені, що бажаєте очистити кошик?")) {
                state.items = []
                state.totalPrice = 0
            }
        }
    }
})

export const selectCart = state => state.cart

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer