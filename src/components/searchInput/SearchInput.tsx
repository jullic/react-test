import { FC } from 'react';
import { ISearchInputProps } from './SearchInput.props';

const SearchInput: FC<ISearchInputProps> = () => {
	return (
		<input type="text" className="filter-element search" placeholder="Значение" />
	)
}

export default SearchInput;