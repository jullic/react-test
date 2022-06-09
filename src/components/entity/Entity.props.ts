import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IEntity } from '../../interfaces/entity.interface';

export interface IEntityProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	entity: IEntity;
}