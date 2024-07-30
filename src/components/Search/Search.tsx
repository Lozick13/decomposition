import BaseList from '../../UI/lists/BaseList/BaseList';
import ExtraText from '../../UI/texts/ExtraText/ExtraText';
import NavLink from '../../UI/texts/NavLink/NavLink';
import SearchBox from '../SearchBox/SearchBox';
import classes from './search.module.css';

const Search = () => {
	return (
		<>
			<article className={classes['search']}>
				<BaseList>
					<li>
						<NavLink link='#'>Видео</NavLink>
					</li>
					<li>
						<NavLink link='#'>Картинки</NavLink>
					</li>
					<li>
						<NavLink link='#'>Новости</NavLink>
					</li>
					<li>
						<NavLink link='#'>Карты</NavLink>
					</li>
					<li>
						<NavLink link='#'>Маркет</NavLink>
					</li>
					<li>
						<NavLink link='#'>Переводчик</NavLink>
					</li>
					<li>
						<NavLink link='#'>Эфир</NavLink>
					</li>
					<li>
						<NavLink link='#'>ещё</NavLink>
					</li>
				</BaseList>
				<SearchBox></SearchBox>
				<span>
					Найдётся всё. Например, <ExtraText>фаза луны сегодня</ExtraText>
				</span>
			</article>
		</>
	);
};

export default Search;
