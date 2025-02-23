// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartState';  // تأكد من استيراد الـ cartReducer من CartState.js بشكل صحيح

export const store = configureStore({
  reducer: {
    cart: cartReducer,  // استخدام cartReducer في الـ reducer
  },
});

export default store;
