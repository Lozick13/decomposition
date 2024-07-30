import { PropsWithChildren } from 'react';
import classes from './importanttext.module.css';

const ImportantText = ({children}: PropsWithChildren) => {
	return (
		<>
			<span className={classes['important-text']}>{children}</span>
		</>
	);
};

export default ImportantText;
