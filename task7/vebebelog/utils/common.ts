/**
 * 배열의 중복된 요소를 삭제
 */
export function removeDuplicates<T>(arr: T[]): T[] {
	return [...new Set(arr)]
}
/**
 * 전체 문자열(source) 중, 일부 문자열(target)을 대체 문자열(replacement)로 변경
 */
export function replaceSubstring(
	source: string,
	target: string,
	replacement: string,
) {
	return source.replace(target, replacement)
}
