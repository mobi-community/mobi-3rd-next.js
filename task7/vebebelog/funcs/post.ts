import {POST_STORE} from '@/constants/endpoint'
import {sync} from 'glob'
import path from 'path'
import {removeDuplicates, replaceSubstring, splitStrExceptEmpty} from './common'

export function getPostStorePath() {
	return path.join(process.cwd(), POST_STORE)
}

export function getAllPostPath(postStore: string) {
	const paths = sync(`${postStore}/**/**/*.mdx`)
	return paths
}

export const getCategoryItems = (postStore: string, postPaths: string[]) => {
	const categories = postPaths.map((path) => {
		const pathInStore = replaceSubstring(path, postStore, '')
		const pathChunks = splitStrExceptEmpty(pathInStore, '/')
		return pathChunks[0]
	})
	const uniqueCategories = removeDuplicates(categories)
	return uniqueCategories
}
