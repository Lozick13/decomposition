import { FC, ReactNode } from 'react';
import classes from './contentlink.module.css';

interface IProps {
	children: ReactNode;
	link: string;
}

const ContentLink: FC<IProps> = ({ children, link }) => {
	return (
		<>
			<a className={classes['content-link']} href={link}>
				{children}
			</a>
		</>
	);
};

export default ContentLink;
