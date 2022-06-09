import { FC } from 'react';
import { IDropdown } from './Dropdown.props';

const Dropdown: FC<IDropdown> = ({ options }) => {
	return (
		<div className="filter-element dropdown">
			<select className="select">
				{options.map((option, i) => <option key={i} className='option'>{option}</option>)}
			</select>
		</div>
	)
}

export default Dropdown;