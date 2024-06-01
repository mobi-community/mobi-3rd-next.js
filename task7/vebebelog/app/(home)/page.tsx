import {SearchBar} from '@/components/atom/search-bar'
import {BentoMenu} from '@/components/organism/bento-menu'
import {GITMOGI_SEGMENT} from '@/constants/dir-path'
import {TGitmojiInfo} from '@/types'
import {
	getFilePaths,
	getPublicPath,
	readMDXFile,
} from '@/utils/static-file-manager'
import path from 'path'

export default async function Page() {
	const gitmojis = getAllGitmoji()
	return (
		<div className='flex w-full justify-center'>
			<main className='flex max-w-[1200px] flex-col items-center gap-12 py-12'>
				<SearchBar />
				<BentoMenu {...{gitmojis}} />
			</main>
		</div>
	)
}

export function getAllGitmoji() {
	const publicDirPath = getPublicPath()
	const dirPath = path.join(publicDirPath, GITMOGI_SEGMENT)
	const filePaths = getFilePaths(dirPath)
	const assets = filePaths.map((path) => {
		const {data} = readMDXFile(path)
		const gitmojiInfo: TGitmojiInfo = {
			...(data as TGitmojiInfo),
		}
		return gitmojiInfo
	})
	return assets
}
