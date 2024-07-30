import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice.js';
import { menuModeReducer } from './menuMode/menuModeSlice.js';
import { dashboardsReducer } from './dashboards/dashboardsSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menuMode: menuModeReducer,
    dashboards: dashboardsReducer,
  },
});
