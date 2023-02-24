/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended',
		'plugin:prettier/recommended',
	],
	parser: 'vue-eslint-parser',
	plugins: ['@typescript-eslint', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'vue/script-setup-uses-vars': 'error',
		'no-console': 'warn',
		'prettier/prettier': [
			'warn',
			{
				useTabs: true,
				semi: true,
				singleQuote: true,
				bracketSpacing: true,
				bracketSameLine: false,
				arrowParens: 'avoid',
				proseWrap: 'always',
			},
		],
	},
	ignorePatterns: ['dist/*', 'src/assets/*'],
};
