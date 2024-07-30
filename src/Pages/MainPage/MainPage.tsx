// import classes from './mainpage.module.css';

import Search from '../../components/Search/Search';
import MainPageContentBlocks from '../MainPageContentBlocks/MainPageContentBlocks';
import MainPageHeader from '../MainPageHeader/MainPageHeader';

const MainPage = () => {
	return (
		<>
			<MainPageHeader />

			<br />
			<br />
			<br />
			<br />
			<br />
			<Search></Search>
			<br />
			<br />
			<br />
			<br />

			<MainPageContentBlocks />
		</>
	);
};

export default MainPage;
