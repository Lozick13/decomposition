import { PropsWithChildren } from 'react';
import classes from './activitybutton.module.css';

const ActivityButton = ({ children }: PropsWithChildren) => {
	return (
		<>
			<button className={classes['activity-button']}>{children}</button>
		</>
	);
};

export default ActivityButton;
