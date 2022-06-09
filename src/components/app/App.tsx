import { FC } from 'react';
import Filter from '../filter/Filter';
import Main from '../main/Main';
import '../../index.scss';

const App: FC = () => {
	return (
		<div className="App">
			<Filter />
			<Main />
		</div>
	);
}

export default App;
