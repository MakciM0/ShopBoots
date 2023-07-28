import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        goods:[], //Товары в корзине
        total : 0, //Итоговая цена корзины
    },
    reducers:{
        addItem(state, action){
            state.goods.push({
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                img: action.payload.img,
                count: 1,
            })
            state.total = state.total + action.payload.price;
        },
        deleteItem:(state, action) =>{
            const isFind = state.goods.find(item => item.id === action.payload.id); //Поиск нужного элемента
            state.total = state.total - (action.payload.price * isFind.count);

            state.goods = state.goods.filter(item => item.id !== action.payload.id);
        },
        minusItem:(state, action) =>{
            const isFind = state.goods.find(item => item.id === action.payload.id); //Поиск нужного элемента
            if(isFind.count !== 1){
                isFind.count -= 1;
                state.total = state.total - action.payload.price;
            }  
        },
        plusItem:(state, action) =>{
            const isFind = state.goods.find(item => item.id === action.payload.id); //Поиск нужного элемента
            isFind.count += 1;
            state.total = state.total + action.payload.price;
        }
    }
});

export const {addItem, deleteItem, plusItem, minusItem} = cartSlice.actions;

export default cartSlice.reducer;
