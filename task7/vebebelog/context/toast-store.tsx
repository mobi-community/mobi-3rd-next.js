'use client'

import {Toast} from '@/components/atom/toast'
import {
	ComponentProps,
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from 'react'

type ToastContextPT = {
	onOpen: (attribute: ComponentProps<typeof Toast>) => void
}

export const ToastContext = createContext<ToastContextPT>({
	onOpen: () => {},
})
export const useToast = () => useContext(ToastContext)
export const ToastProvider = ({children}: PropsWithChildren) => {
	const [toastAttributes, setToastAttributes] = useState<
		ComponentProps<typeof Toast>[]
	>([])

	const onOpen = (attribute: ComponentProps<typeof Toast>) => {
		setToastAttributes((prevs) => {
			const _prevs = prevs.filter(
				(prev) => prev.toastKey !== attribute.toastKey,
			)
			_prevs.push(attribute)
			return _prevs
		})
	}

	return (
		<ToastContext.Provider value={{onOpen}}>
			{children}
			{toastAttributes.map((attribute) => (
				<Toast key={attribute.toastKey} {...attribute} />
			))}
		</ToastContext.Provider>
	)
}
