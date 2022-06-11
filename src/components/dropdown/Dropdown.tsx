import { ChangeEvent, FC, useEffect, useRef } from 'react';
import { useAppDispatch, } from '../../hooks/reduxHooks';
import { columnChanged, conditionChanged } from '../../redux/slices/filterSlice';
import { IDropdownProps } from './Dropdown.props';

const Dropdown: FC<IDropdownProps> = ({ options, type, ...props }) => {

	const dispatch = useAppDispatch();
	const selectRef = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		if (selectRef && type === 'dependence') {
			dispatch(conditionChanged(selectRef.current!.value));
		}
		console.log(1);
	});

	const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		if (type === 'main') {
			dispatch(columnChanged(e?.target.value));
		}
		if (type === 'dependence') {
			dispatch(conditionChanged(e.target.value));
		}
	};

	return (
		<div className="filter-element dropdown" {...props}>
			<select onChange={(e) => changeHandler(e)} className="select" ref={selectRef}>
				{options.map((option, i) => <option key={i} value={option.value} className='option'>{option.option}</option>)}
			</select>
		</div>
	);
}

export default Dropdown;