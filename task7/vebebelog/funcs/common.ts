export function removeDuplicates<T>(arr: T[]): T[] {
	return [...new Set(arr)]
}

export function replaceSubstring(
	source: string,
	target: string,
	replacement: string,
) {
	return source.replace(target, replacement)
}

export function splitStrExceptEmpty(source: string, separator: string) {
	return source.split(separator).filter(Boolean)
}
