import type {TGitmojiInfo} from '@/types'
import {BentoItem} from '../molecule/bento-item'

type BentoMenuPT = {
	gitmojis: TGitmojiInfo[]
}

export function BentoMenu({gitmojis}: BentoMenuPT) {
	return (
		<div className='flex w-full flex-wrap justify-around gap-12'>
			{gitmojis.map((gitmoji) => (
				<BentoItem key={gitmoji.id} {...{gitmoji}} />
			))}
		</div>
	)
}
