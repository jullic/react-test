import { FC } from 'react';
import { IEntity } from '../../interfaces/entity.interface';
import Button from '../button/Button';
import Table from '../table/Table';
import { IMainProps } from './Main.props';

const Main: FC<IMainProps> = () => {

	const entities: IEntity[] = [{ date: '06.02.2022', distance: 200, id: 1, name: 'test', quantity: 10 }];

	return (
		<main className="main">
			<div className="container">
				<div className="main-content">
					<h1 className="title">Таблица данных</h1>
					<div className="table-wrapper">
						<Table entities={entities} />
					</div>
					<div className="main-btns">
						<button className="btn load-btn">Загрузить еще</button>
						<Button load>Загрузить все</Button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;