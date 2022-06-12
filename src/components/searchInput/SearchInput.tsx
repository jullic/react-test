import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { inputChanged } from '../../redux/slices/filterSlice';
import { ISearchInputProps } from './SearchInput.props';

const SearchInput: FC<ISearchInputProps> = ({ ...props }) => {

	const value = useAppSelector(state => state.filterReducer.input);
	const { activeColumn } = useAppSelector(state => state.filterReducer);
	const dispatch = useAppDispatch();

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(inputChanged(e.target.value));
	}

	const validateInput = (activeColumn: string) => {
		switch (activeColumn) {
			case 'title':
				return 'text';
			case 'quantity':
			case 'distance':
				return 'number'
			default:
				return 'text';
		}
	}

	return (
		<input onChange={changeHandler} value={value} type={validateInput(activeColumn)} className="filter-element search" placeholder="Значение" {...props} />
	);
}

export default SearchInput;