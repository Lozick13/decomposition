import { FC, ReactNode } from 'react';
import classes from './line.module.css';

interface IProps {
	children: ReactNode;
	icon?: string;
}

const Line: FC<IProps> = ({ children, icon }) => {
	return (
		<>
			<div className={classes['line']}>
				{icon ? <img src={icon} className={classes['line__icon']} /> : ''}
				<div className={classes['line__content']}>{children}</div>
			</div>
		</>
	);
};

export default Line;
