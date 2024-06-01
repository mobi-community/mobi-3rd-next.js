'use client'

import type {TGitmojiInfo} from '@/types'
import {BentoItem} from '../molecule/bento-item'

type BentoMenuPT = {
	gitmojis: TGitmojiInfo[]
}

export function BentoMenu({gitmojis}: BentoMenuPT) {
	const onCopyGitmoji = (asset: TGitmojiInfo) => {
		if (navigator.clipboard) navigator.clipboard.writeText(asset.code)
		alert(`${asset.emoji} 의 코드를 클립보드에 복사했습니다!`)
	}
	return (
		<div className='flex w-full flex-wrap justify-around gap-12'>
			{gitmojis.map((gitmoji) => (
				<BentoItem
					key={gitmoji.id}
					{...{gitmoji}}
					onClick={() => {
						onCopyGitmoji(gitmoji)
					}}
				/>
			))}
		</div>
	)
}
