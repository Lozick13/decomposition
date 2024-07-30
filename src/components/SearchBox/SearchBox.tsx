import ImportantText from '../../UI/texts/ImportantText/ImportantText';
import classes from './searchbox.module.css';

const SearchBox = () => {
	return (
		<>
			<div className={classes['searchbox']}>
				<input className={classes['searchbox__input']} type='text'></input>
				<button className={classes['searchbox__keyboard']}>
					<img
						className={classes['searchbox__keyboard-image']}
						src='https://cdn-icons-png.flaticon.com/512/102/102256.png'
					/>
				</button>
				<button className={classes['searchbox__search']}>
					<ImportantText>Найти</ImportantText>
				</button>
				<div className={classes['searchbox__decorator']}></div>
			</div>
		</>
	);
};

export default SearchBox;
