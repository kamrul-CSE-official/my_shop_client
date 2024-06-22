import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '@/types/products';

interface ProductsState {
    products: IProduct[];
}

const initialState: ProductsState = {products: []};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            state.products.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(
                (product) => product._id !== action.payload,
            );
        },
    },
});

export const {addToCart, removeFromCart} = productsSlice.actions;
export default productsSlice.reducer;
