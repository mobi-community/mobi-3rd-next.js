module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'next/core-web-vitals',
		'standard-with-typescript',
		'eslint:recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/parser',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['tsconfig.json'],
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'jsx-a11y',
		'@typescript-eslint/parser',
	],
	rules: {
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'], // 타입 선언시, type-alias 사용
		'@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수 노란줄 경고
		'react/react-in-jsx-scope': 'off', // "import React from 'react' 없어도 할 수 있도록
		'@typescript-eslint/explicit-function-return-type': 'off', // 'on'인 경우, 함수에 return 타입 명시 강제
		'@typescript-eslint/consistent-type-exports': 'error', // 'import type' 강제
		'@typescript-eslint/consistent-type-imports': 'error', // 'export type' 강제
	},
}
