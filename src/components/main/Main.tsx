import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { IEntity } from '../../interfaces/entity.interface';
import { fetchAllEntity, fetchEntityBySteps } from '../../redux/slices/tableSlice';
import Button from '../button/Button';
import Table from '../table/Table';
import { IMainProps } from './Main.props';

const Main: FC<IMainProps> = () => {
	const { numberOfUploaded, step, everythingIsLoaded, loadingStatus } = useAppSelector(state => state.tableReducer);
	const { input } = useAppSelector(state => state.filterReducer);
	const dispatch = useAppDispatch();
	const filteredEntities = useAppSelector(state => {
		const { entities } = state.tableReducer;
		const { activeColumn, activeCondition, input } = state.filterReducer;

		if (input.length === 0 || activeColumn === 'any') {
			return entities;
		}
		else if (activeColumn === 'title') {
			if (activeCondition === 'contains') {
				return entities.filter(entity => entity.name.toLowerCase().includes(input.toLowerCase()));
			}
		}
		else if (activeColumn === 'quantity' || activeColumn === 'distance') {
			if (activeCondition === 'equaly') {
				return entities.filter(entity => entity[activeColumn] === parseFloat(input));
			}
			if (activeCondition === 'more') {
				return entities.filter(entity => entity[activeColumn] > parseFloat(input));
			}
			if (activeCondition === 'less') {
				return entities.filter(entity => entity[activeColumn] < parseFloat(input));
			}
		}
		return [];
	});

	useEffect(() => {
		loadHandler('steps');
	}, []);

	const loadHandler = (type: 'steps' | 'all') => {
		if (type === 'steps') {
			const entityArgs = { start: numberOfUploaded, step };
			dispatch(fetchEntityBySteps(entityArgs));
		}
		if (type === 'all') {
			dispatch(fetchAllEntity());
		}
	};

	return (
		<main className="main">
			<div className="container">
				<div className="main-content">
					<h1 className="title">Таблица данных</h1>
					<div className={classNames('table-wrapper', { 'load': loadingStatus !== 'idle' })}>
						<Table entities={filteredEntities} />
					</div>
					<div className="main-btns">
						{input.length === 0 && <Button disabled={everythingIsLoaded || loadingStatus !== 'idle'} onClick={() => loadHandler('steps')} load>Загрузить еще</Button>}
						<Button disabled={everythingIsLoaded || loadingStatus !== 'idle'} onClick={() => loadHandler('all')} load>Загрузить все</Button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;