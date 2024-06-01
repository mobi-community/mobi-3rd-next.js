import {Header} from '@/components/molecule/header'
import {ToastProvider} from '@/context/toast-store'
import type {Metadata} from 'next'
import type {ReactNode} from 'react'
import '../global.css'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en' className='h-full w-full'>
			<body>
				<ToastProvider>
					<Header />
					{children}
				</ToastProvider>
			</body>
		</html>
	)
}
