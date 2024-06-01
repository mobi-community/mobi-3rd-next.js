'use client'
import {useEffect, useRef, useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import {Typography} from './typograph'

type ToastPT = {
	toastKey: string | number
	title: string
	body: string
	bgColor?: string
}

export function Toast({title, body, bgColor = '#27AA9F'}: ToastPT) {
	const [visible, setVisible] = useState(true)
	const nodeRef = useRef(null)
	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false)
		}, 5000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={visible}
			timeout={500}
			classNames='toast'
			unmountOnExit
		>
			<div
				className='fixed bottom-3 right-3 z-10 grid  h-32 w-96 grid-rows-2 rounded-xl'
				style={{backgroundColor: bgColor}}
			>
				<Typography type='title3'>{title}</Typography>
				<Typography type='body3'>{body}</Typography>
			</div>
		</CSSTransition>
	)
}
