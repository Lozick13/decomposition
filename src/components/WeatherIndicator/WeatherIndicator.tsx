import { FC } from 'react';
import classes from './weatherindicator.module.css';

const WeatherIndicator: FC<{ temp: string }> = ({ temp }) => {
	return (
		<>
			<div className={classes['weather-indicator']}>
				{/* по-хорошему картинка должна изменяться в зависимости от условия */}
				<img
					className={classes['weather-indicator__preview']}
					src='https://cdn-icons-png.flaticon.com/512/4150/4150897.png'
				/>
				<span className={classes['weather-indicator__value']}>{temp}</span>
				<span>
					Утром +17,
					<br />
					днём +20
				</span>
			</div>
		</>
	);
};

export default WeatherIndicator;
