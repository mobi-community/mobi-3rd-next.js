import {Logo} from '../atom/logo'
import {Typography} from '../atom/typograph'

export function Header() {
	return (
		<div className='flex h-[45rem] w-full flex-col items-center justify-center gap-4 bg-[#ffdd67]'>
			<Logo />
			<Typography type='heading1' className='text-black'>
				An emoji guide for your commit messages
			</Typography>
		</div>
	)
}
