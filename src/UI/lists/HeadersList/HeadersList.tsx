import { PropsWithChildren } from 'react';
import classes from './headerslist.module.css';

const HeadersList = ({ children }: PropsWithChildren) => {
	return (
		<>
			<ul className={classes['headers-list']}>{children}</ul>
		</>
	);
};

export default HeadersList;
