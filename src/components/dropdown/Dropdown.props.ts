import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IDropdownProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	options: string[]
}