import { IEntity } from './../../interfaces/entity.interface';
import { DetailedHTMLProps, TableHTMLAttributes } from 'react';
export interface ITableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
	entities: IEntity[];
}

