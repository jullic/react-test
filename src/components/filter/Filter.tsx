import { FC } from 'react';
import Button from '../button/Button';
import Dropdown from '../dropdown/Dropdown';
import SearchInput from '../searchInput/SearchInput';
import { IFilterProps } from './Filter.props';
import searchImg from '../../resourses/search.svg';

const Filter: FC<IFilterProps> = () => {
	const nameOptions = ['Все', 'Название', 'Количество', 'Расстояние'];
	const conditionOptions = ['Любое', 'Равно', 'Содержит', 'Больше', 'Меньше'];

	return (
		<div className="filter">
			<div className="container">
				<div className="filter-content">
					<Dropdown options={nameOptions} />
					<Dropdown options={conditionOptions} />
					<SearchInput />
					<Button>
						<img className="btn-img" src={searchImg} alt="search" />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Filter;