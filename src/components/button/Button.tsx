import { FC } from 'react';
import { IButton } from './Button.props';

const Button: FC<IButton> = ({ children }) => {
	return (
		<button>
			{children}
		</button>
	)
}

export default Button;