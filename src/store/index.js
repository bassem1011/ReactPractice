import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import favoritesReducer from './slices/favoritesSlice';
import authReducer from './slices/authSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    auth: authReducer,
  },
});