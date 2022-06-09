import { FC } from 'react';
import Entity from '../entity/Entity';
import { ITableProps } from './Table.props';

const Table: FC<ITableProps> = ({ entities }) => {
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
	)
}

export default Table;

				// <tr className="tr">
				// 	<td className="td">08.06.2022</td>
				// 	<td className="td">Название №2</td>
				// 	<td className="td">5</td>
				// 	<td className="td">320</td>
				// </tr>
				// <tr className="tr">
				// 	<td className="td">08.06.2022</td>
				// 	<td className="td">Название №3</td>
				// 	<td className="td">10</td>
				// 	<td className="td">120</td>
				// </tr>
				// <tr className="tr">
				// 	<td className="td">08.06.2022</td>
				// 	<td className="td">Название №4</td>
				// 	<td className="td">2</td>
				// 	<td className="td">530</td>
				// </tr>