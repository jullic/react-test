import { IDependencesOption } from './../../interfaces/option.interface';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOption } from '../../interfaces/option.interface';

interface IState {
	input: string;
	inputDisactive: boolean,
	columns: IOption[];
	conditions: IDependencesOption[];
	activeColumn: string;
	activeCondition: string;
};

const initialState: IState = {
	input: '',
	inputDisactive: true,
	columns: [{ option: 'Все', value: 'all', dependencies: [{ option: 'Любое', value: 'any' }] }, { option: 'Название', value: 'title', dependencies: [{ option: 'Содержит', value: 'contains' }] }, { option: 'Количество', value: 'quantity', dependencies: [{ option: 'Равно', value: 'equaly' }, { option: 'Больше', value: 'more' }, { option: 'Меньше', value: 'less' }] }, { option: 'Расстояние', value: 'distance', dependencies: [{ option: 'Равно', value: 'equaly' }, { option: 'Больше', value: 'more' }, { option: 'Меньше', value: 'less' }] }],
	conditions: [{ option: 'Любое', value: 'any' }],
	activeColumn: 'all',
	activeCondition: 'any',
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		columnChanged: (state, action: PayloadAction<string>) => {
			state.activeColumn = action.payload;
			state.input = '';

			let activeColumn = state.columns.find(col => col.value === action.payload);

			if (activeColumn) {
				state.conditions = activeColumn.dependencies;
			}
			if (action.payload === 'all') {
				state.inputDisactive = true;
			}
			else {
				state.inputDisactive = false;
			}
		},
		conditionChanged: (state, action: PayloadAction<string>) => {
			state.activeCondition = action.payload;
		},
		inputChanged: (state, action: PayloadAction<string>) => {
			state.input = action.payload;
		}
	},

});

const { actions, reducer } = filtersSlice;

export const filterReducer = reducer;
export const { columnChanged, conditionChanged, inputChanged } = actions;