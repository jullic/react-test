import { FC } from 'react';
import Dropdown from '../dropdown/Dropdown';
import SearchInput from '../searchInput/SearchInput';
import { IFilterProps } from './Filter.props';
import { useAppSelector } from '../../hooks/reduxHooks';

const Filter: FC<IFilterProps> = () => {
	const nameOptions = useAppSelector(state => state.filterReducer.columns);
	const conditionOptions = useAppSelector(state => state.filterReducer.conditions);
	const disabled = useAppSelector(state => state.filterReducer.inputDisactive);

	return (
		<div className="filter">
			<div className="container">
				<div className='filter-content'>
					<Dropdown options={nameOptions} type='main' />
					<Dropdown options={conditionOptions} type='dependence' />
					<SearchInput disabled={disabled} />
				</div>
			</div>
		</div>
	);
}

export default Filter;