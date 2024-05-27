import {removeDuplicates} from '@/funcs/common'
import {SideListItem} from '../atom'

export function SideList({items}: {items: string[]}) {
	const uniqueItems = removeDuplicates(items)
	return (
		<div className='flex flex-col gap-2'>
			<h2>사이드 리스트</h2>
			<h3>👇=====================👇</h3>
			{uniqueItems.map((item) => (
				<SideListItem key={item}>{item}</SideListItem>
			))}
			<h3>👆=====================👆</h3>
		</div>
	)
}
