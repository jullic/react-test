import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IEntity } from '../../interfaces/entity.interface';

interface IFetchEntity {
	start: number;
	step: number;
}

export const fetchEntityBySteps = createAsyncThunk(
	'table/fetchEntity',
	async (option: IFetchEntity) => {
		const response = await fetch(`http://localhost:8080/data?id_gte=${option.start + 1}&id_lte=${option.start + option.step}`);
		return (await response.json()) as IEntity[];
	}
);

export const fetchAllEntity = createAsyncThunk(
	'table/fetchAllEntity',
	async () => {
		const response = await fetch(`http://localhost:8080/data`);
		return (await response.json()) as IEntity[];
	}
);

interface IInitialState {
	step: number;
	numberOfUploaded: number;
	entities: IEntity[];
	everythingIsLoaded: boolean;
	loadingStatus: 'idle' | 'loading' | 'error',
}

const initialState: IInitialState = {
	step: 10,
	numberOfUploaded: 0,
	entities: [],
	everythingIsLoaded: false,
	loadingStatus: 'idle',
}

const tableSlice = createSlice({
	name: 'table',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchEntityBySteps.pending, (state) => {
				state.loadingStatus = 'loading';
			})
			.addCase(fetchEntityBySteps.fulfilled, (state, action: PayloadAction<IEntity[]>) => {
				action.payload.forEach(entity => {
					state.entities.push(entity);
				});
				if (action.payload.length < state.step) {
					state.everythingIsLoaded = true;
				}
				state.numberOfUploaded += state.step;
				state.loadingStatus = 'idle';
			})
			.addCase(fetchEntityBySteps.rejected, state => {
				state.loadingStatus = 'error';
			});

		builder
			.addCase(fetchAllEntity.pending, (state) => {
				state.loadingStatus = 'loading';
			})
			.addCase(fetchAllEntity.fulfilled, (state, action: PayloadAction<IEntity[]>) => {
				state.entities = action.payload;
				state.everythingIsLoaded = true;
				state.loadingStatus = 'idle';
			})
			.addCase(fetchAllEntity.rejected, state => {
				state.loadingStatus = 'error';
			});
	}

});

const { reducer } = tableSlice;
export const tableReducer = reducer;