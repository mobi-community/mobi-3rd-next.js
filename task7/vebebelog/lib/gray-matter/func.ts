import fs from 'fs'
import matter from 'gray-matter'

export function getMDFileInfo(filePath: string) {
	const file = fs.readFileSync(filePath, 'utf-8')
	const parsed = matter(file)
	return parsed
}
