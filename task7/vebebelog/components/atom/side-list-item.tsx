import {ReactNode} from 'react'

export function SideListItem({children}: {children: ReactNode}) {
	return (
		<div className='flex items-center text-center rounded-md ml-2 bg-blue-600 text-white hover:bg-blue-400'>
			{children}
		</div>
	)
}
