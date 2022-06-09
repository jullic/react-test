import { FC } from 'react'
import { IEntityProps } from './Entity.props'

const Entity: FC<IEntityProps> = ({ entity }) => {
	return (
		<tr className='tr'>
			<td className='td'>{entity.date}</td>
			<td className='td'>{entity.name}</td>
			<td className='td'>{entity.quantity}</td>
			<td className='td'>{entity.distance}</td>
		</tr>
	)
}

export default Entity;