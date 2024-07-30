import { PropsWithChildren } from 'react';
import classes from './baselist.module.css';

const BaseList = ({ children }: PropsWithChildren) => {
	return (
		<>
			<ul className={classes['base-list']}>{children}</ul>
		</>
	);
};

export default BaseList;
