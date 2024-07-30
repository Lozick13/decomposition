import ContentBlock from '../../components/ContentBlock/ContentBlock';
import Course from '../../components/Course/Course';
import Line from '../../components/Line/Line';
import ContentList from '../../UI/lists/ContentList/ContentList';
import HeadersList from '../../UI/lists/HeadersList/HeadersList';
import ContentLink from '../../UI/texts/ContentLink/ContentLink';
import ExtraText from '../../UI/texts/ExtraText/ExtraText';
import Header2 from '../../UI/texts/Header2/Header2';
import classes from './mainpageheader.module.css';

const MainPageHeader = () => {
	return (
		<>
			<header className={classes['main-page__header']}>
				{/* новости */}
				<ContentBlock
					header={
						<HeadersList>
							<li>
								<Header2 active={true}>Сейчас в СМИ</Header2>
							</li>
							<li>
								<Header2>в Германии</Header2>
							</li>
							<li>
								<Header2>Рекомендуем</Header2>
							</li>
							<li>
								<ExtraText>31 июля, среда 02 32</ExtraText>
							</li>
						</HeadersList>
					}
				>
					<ContentList>
						<li>
							<Line icon='https://cdn-icons-png.flaticon.com/512/1042/1042680.png'>
								<ContentLink link='#'>
									Путин упростил получение автомобильных номеров
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line icon='https://cdn-icons-png.flaticon.com/512/1042/1042680.png'>
								<ContentLink link='#'>
									В команде Зеленского раскрыли план реформ на Украине
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line icon='https://cdn-icons-png.flaticon.com/512/1042/1042680.png'>
								<ContentLink link='#'>
									«Турпомощь» прокомментировала гибель десятков россиян в
									Анталье
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line icon='https://cdn-icons-png.flaticon.com/512/1042/1042680.png'>
								<ContentLink link='#'>
									Суд закрыл дело Демпартии США против России
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line icon='https://cdn-icons-png.flaticon.com/512/1042/1042680.png'>
								<ContentLink link='#'>
									На Украине призвали создать ракеты для удара по Москве
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line>
								<Course unit='USD MOEX' price='63,52' changes='+0,09' />
								<Course unit='EUR MOEX' price='70,86' changes='+0,14' />
								<Course unit='НЕФТЬ' price='64,90' changes='+1,63%' />
							</Line>
						</li>
					</ContentList>
				</ContentBlock>

				{/* работа над ошибками */}
				<ContentBlock
					header={<Header2 active={true}>Работа над ошибками</Header2>}
					preview='https://cdn-icons-png.flaticon.com/512/196/196363.png'
				>
					<Line>
						<ContentLink link='#'>
							Смотрите на Яндексе и запоминайте
						</ContentLink>
					</Line>
				</ContentBlock>
			</header>
		</>
	);
};

export default MainPageHeader;
