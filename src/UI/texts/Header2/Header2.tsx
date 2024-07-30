import { FC, ReactNode } from 'react';
import classes from './header2.module.css';

interface IProps {
	children: ReactNode;
	active?: boolean;
}

const Header2: FC<IProps> = ({ children, active }) => {
	return (
		<>
			<h2
				className={`${classes['header2']} ${
					active ? classes['header2_active'] : ''
				}`}
			>
				{children}
			</h2>
		</>
	);
};

export default Header2;
