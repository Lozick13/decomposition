import ContentBlock from '../../components/ContentBlock/ContentBlock';
import Line from '../../components/Line/Line';
import WeatherIndicator from '../../components/WeatherIndicator/WeatherIndicator';
import ActivityButton from '../../UI/buttons/ActivityButton/ActivityButton';
import ContentList from '../../UI/lists/ContentList/ContentList';
import ContentLink from '../../UI/texts/ContentLink/ContentLink';
import ExtraText from '../../UI/texts/ExtraText/ExtraText';
import Header2 from '../../UI/texts/Header2/Header2';
import ImportantText from '../../UI/texts/ImportantText/ImportantText';
import classes from './mainpagecontentblocks.module.css';

const MainPageContentBlocks = () => {
	return (
		<>
			<section className={classes['main-page__content-blocks']}>
				{/* погода */}
				<ContentBlock header={<Header2 active={true}>Погода</Header2>}>
					<WeatherIndicator temp='+17' />
				</ContentBlock>

				{/* посещаемое */}
				<ContentBlock header={<Header2 active={true}>Посещаемое</Header2>}>
					<ContentList>
						<li>
							<Line>
								<ContentLink link='#'>
									<ImportantText>Недвижимость</ImportantText> — о сталинках
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line>
								<ContentLink link='#'>
									<ImportantText>Маркет</ImportantText> — люстры и светильники
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line>
								<ContentLink link='#'>
									<ImportantText>Авто.ру</ImportantText> — привод 4х4 до 500 000
								</ContentLink>
							</Line>
						</li>
					</ContentList>
				</ContentBlock>

				{/* карта Германии */}
				<ContentBlock header={<Header2 active={true}>Карта Германии</Header2>}>
					<Line>
						<ContentLink link='#'>Расписания</ContentLink>
					</Line>
				</ContentBlock>

				{/* телепрограмма */}
				<ContentBlock
					header={
						<>
							<Header2 active={true}>Телепрограмма</Header2>
							<ActivityButton>
								<img
									style={{ width: 20 }}
									src='https://static.vecteezy.com/system/resources/previews/019/639/603/original/gradient-play-ui-icon-button-free-png.png'
								/>
								Эфир
							</ActivityButton>
						</>
					}
				>
					<ContentList>
						<li>
							<Line>
								<ContentLink link='#'>02:00</ContentLink>
								<ContentLink link='#'>ТНТ. Best</ContentLink>
								<ContentLink link='#'>
									<ExtraText>ТНТ International</ExtraText>
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line>
								<ContentLink link='#'>02:15</ContentLink>
								<ContentLink link='#'>Джинглики</ContentLink>
								<ContentLink link='#'>
									<ExtraText>Карусель Int</ExtraText>
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line>
								<ContentLink link='#'>02:25</ContentLink>
								<ContentLink link='#'>Наедине со всеми</ContentLink>
								<ContentLink link='#'>
									<ExtraText>Первый</ExtraText>
								</ContentLink>
							</Line>
						</li>
					</ContentList>
				</ContentBlock>

				{/* эфир */}
				<ContentBlock header={<Header2 active={true}>Эфир</Header2>}>
					<ContentList>
						<li>
							<Line icon='https://static.vecteezy.com/system/resources/previews/019/639/603/original/gradient-play-ui-icon-button-free-png.png'>
								<ContentLink link='#'>Управление как искусство</ContentLink>
								<ContentLink link='#'>
									<ExtraText>Успех</ExtraText>
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line icon='https://static.vecteezy.com/system/resources/previews/019/639/603/original/gradient-play-ui-icon-button-free-png.png'>
								<ContentLink link='#'>Ночь. Мир в это время</ContentLink>
								<ContentLink link='#'>
									<ExtraText>earthTV</ExtraText>
								</ContentLink>
							</Line>
						</li>
						<li>
							<Line icon='https://static.vecteezy.com/system/resources/previews/019/639/603/original/gradient-play-ui-icon-button-free-png.png'>
								<ContentLink link='#'>Андрей Возн...</ContentLink>
								<ContentLink link='#'>
									<ExtraText>Совершенно секретно</ExtraText>
								</ContentLink>
							</Line>
						</li>
					</ContentList>
				</ContentBlock>
			</section>
		</>
	);
};

export default MainPageContentBlocks;
