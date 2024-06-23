import {combineReducers} from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';

const rootReducer = combineReducers({
    products: productsSlice,
});

export default rootReducer;
