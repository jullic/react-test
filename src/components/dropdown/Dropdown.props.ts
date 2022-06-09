import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IDropdown extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	options: string[]
}