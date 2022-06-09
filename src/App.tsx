import { FC } from 'react';
import Filter from './components/filter/Filter';
import './index.scss';

const App: FC = () => {
	return (
		<div className="App">
			<Filter />
			<main className="main">
				<div className="container">
					<div className="main-content">
						<h1 className="title">Таблица данных</h1>
						<div className="table-wrapper">
							<table className="table">
								<tbody className="tbody">
									<tr className="tr">
										<th className="th">Дата</th>
										<th className="th">Название</th>
										<th className="th">Количество</th>
										<th className="th">Расстояние</th>
									</tr>
									<tr className="tr">
										<td className="td">08.06.2022</td>
										<td className="td">Название №2</td>
										<td className="td">5</td>
										<td className="td">320</td>
									</tr>
									<tr className="tr">
										<td className="td">08.06.2022</td>
										<td className="td">Название №3</td>
										<td className="td">10</td>
										<td className="td">120</td>
									</tr>
									<tr className="tr">
										<td className="td">08.06.2022</td>
										<td className="td">Название №4</td>
										<td className="td">2</td>
										<td className="td">530</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="main-btns">
							<button className="btn load-btn">Загрузить еще</button>
							<button className="btn load-btn">Загрузить все</button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
