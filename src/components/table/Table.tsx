import { FC } from 'react';
import Entity from '../entity/Entity';
import { ITableProps } from './Table.props';

const Table: FC<ITableProps> = ({ entities }) => {
	if (entities.length === 0) {
		return (
			<h2 className='h2'>Таблица пуста</h2>
		);
	}

	return (
		<table className="table">
			<tbody className="tbody">
				<tr className="tr">
					<th className="th">Дата</th>
					<th className="th">Название</th>
					<th className="th">Количество</th>
					<th className="th">Расстояние</th>
				</tr>
				{entities.map(entity => <Entity key={entity.id} entity={entity} />)}
			</tbody>
		</table>
	);
}

export default Table;