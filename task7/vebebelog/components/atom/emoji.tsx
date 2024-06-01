import {cn} from '@/lib/tailwind-css'
import {VariantProps, cva} from 'class-variance-authority'
import type {HTMLAttributes} from 'react'

const emojiVariants = cva('text-center', {
	variants: {
		size: {
			'3xl': 'text-[55px]',
			'2xl': 'text-[40px]',
			xl: 'text-[30px]',
			md: 'text-[20px]',
			sm: 'text-[10px]',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

type EmojiProps = HTMLAttributes<HTMLParagraphElement> &
	VariantProps<typeof emojiVariants> & {
		emoji: string
		aria: string
	}

export function Emoji({className, size, emoji, aria}: EmojiProps) {
	return (
		<span
			className={cn(emojiVariants({size}), className)}
			role='img'
			aria-label={aria}
		>
			{emoji}
		</span>
	)
}
Emoji.display = 'Emoji'
