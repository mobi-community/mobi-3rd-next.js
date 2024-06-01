import {cn} from '@/lib/tailwind-css'
import {TGitmojiInfo} from '@/types'
import {HTMLAttributes} from 'react'
import {Emoji} from '../atom/emoji'
import {Typography} from '../atom/typograph'

type TBentoItem = HTMLAttributes<HTMLParagraphElement> & {
	gitmoji: TGitmojiInfo
}

export function BentoItem({gitmoji}: TBentoItem) {
	return (
		<article className='grid w-96 cursor-pointer grid-rows-[18rem_20rem] overflow-hidden rounded-lg bg-[#262626] hover:scale-110'>
			<div
				className={cn('flex items-center justify-center')}
				style={{backgroundColor: gitmoji.theme}}
			>
				<Emoji emoji={gitmoji.emoji} aria={gitmoji.name} size='3xl' />
			</div>
			<div className='flex flex-col items-center justify-center gap-3 py-4 text-white'>
				<Typography type='heading2' className='text-center text-white'>
					{gitmoji.code}
				</Typography>
				<Typography type='body3' className='text-center text-white'>
					{gitmoji.desc}
				</Typography>
			</div>
		</article>
	)
}
