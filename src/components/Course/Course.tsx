import { FC } from 'react';
import ExtraText from '../../UI/texts/ExtraText/ExtraText';
import ImportantText from '../../UI/texts/ImportantText/ImportantText';
import classes from './course.module.css';

interface IProps {
	unit: string;
	price: string;
	changes: string;
}

const Course: FC<IProps> = ({ unit, price, changes }) => {
	return (
		<>
			<div className={classes['course']}>
				<ImportantText>{unit}</ImportantText>
				{price}
				<ExtraText>{changes}</ExtraText>
			</div>
		</>
	);
};

export default Course;
