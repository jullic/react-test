import { FC } from 'react';
import Dropdown from '../dropdown/Dropdown';

const Filter: FC = () => {
	const nameOptions = ['Все', 'Название', 'Количество', 'Расстояние'];
	const conditionOptions = ['Равно', 'Любое', 'Содержит', 'Больше', 'Меньше'];

	return (
		<div className="filter">
			<div className="container">
				<div className="filter-content">
					<Dropdown options={nameOptions} />
					<Dropdown options={conditionOptions} />
					<input type="text" className="filter-element search" placeholder="Значение" />
					<button className="filter-element btn">
						<img className="btn-img" src="search.svg" alt="search" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Filter;