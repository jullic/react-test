import classNames from 'classnames';
import { FC } from 'react';
import { IButtonProps } from './Button.props';

const Button: FC<IButtonProps> = ({ children, load = false, ...props }) => {
	return (
		<button className={classNames('btn', { 'load-btn': load })} {...props}>
			{children}
		</button>
	);
}

export default Button;