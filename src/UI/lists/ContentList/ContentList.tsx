import { PropsWithChildren } from 'react';
import classes from './contentlist.module.css';

const ContentList = ({ children }: PropsWithChildren) => {
	return (
		<>
			<ul className={classes['content-list']}>{children}</ul>
		</>
	);
};

export default ContentList;
