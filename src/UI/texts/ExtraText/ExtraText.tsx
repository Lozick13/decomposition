import { PropsWithChildren } from 'react';
import classes from './extratext.module.css';

const ExtraText = ({ children }: PropsWithChildren) => {
	return (
		<>
			<span className={classes['extra-text']}>{children}</span>
		</>
	);
};

export default ExtraText;
