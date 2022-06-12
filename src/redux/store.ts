import { tableReducer } from './slices/tableSlice';
import { filterReducer } from './slices/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		filterReducer,
		tableReducer
	}
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;