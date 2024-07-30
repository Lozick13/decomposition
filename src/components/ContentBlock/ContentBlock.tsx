import { FC, ReactNode } from 'react';
import classes from './contentblock.module.css';

interface IProps {
	header: ReactNode;
	children: ReactNode;
	preview?: string;
}

const ContentBlock: FC<IProps> = ({ header, children, preview }) => {
	return (
		<>
			<article className={classes['content-block']}>
				{preview ? (
					<img src={preview} className={classes['content-block__preview']} />
				) : (
					''
				)}
				<div className={classes['content-block__header']}>{header}</div>
				<div className={classes['content-block__content']}>{children}</div>
			</article>
		</>
	);
};

export default ContentBlock;
