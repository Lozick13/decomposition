import { FC, ReactNode } from 'react';
import classes from './navlink.module.css';

interface IProps {
	children: ReactNode;
	link: string;
}

const NavLink: FC<IProps> = ({ children, link }) => {
	return (
		<>
			<a className={classes['nav-link']} href={link}>
				{children}
			</a>
		</>
	);
};

export default NavLink;
