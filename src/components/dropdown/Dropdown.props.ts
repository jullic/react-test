import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IDependencesOption, IOption } from '../../interfaces/option.interface';

export interface IDropdownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	options: IOption[] | IDependencesOption[];
	type: 'main' | 'dependence';
}