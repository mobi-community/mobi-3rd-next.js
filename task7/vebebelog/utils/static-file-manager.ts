import {PUBLIC_SEGMENT} from '@/constants/dir-path'
import fs from 'fs'
import {sync} from 'glob'
import matter from 'gray-matter'
import path from 'path'

export function getPublicPath() {
	const projectPath = process.cwd()
	const publicDirPath = path.join(projectPath, PUBLIC_SEGMENT)
	return publicDirPath
}

export function getFilePaths(dirPath: string) {
	const filesPath = sync(`${dirPath}/**/*.mdx`)
	return filesPath
}

export function readMDXFile<T>(filePath: string) {
	const file = fs.readFileSync(filePath, 'utf-8')
	const {data, content} = matter(file)
	return {data, markdown: content}
}
