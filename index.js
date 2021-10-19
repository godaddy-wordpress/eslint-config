module.exports = {
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended-with-formatting',
	],
	plugins: [
		'react',
	],
	rules: {
		// ESLint rules
		'import/no-extraneous-dependencies': 0,
		'sort-imports': [ 'error', {
			allowSeparatedGroups: true,
			ignoreCase: true,
			memberSyntaxSortOrder: [ 'all', 'single', 'multiple', 'none' ],
		} ],
		'sort-keys': [ 'error', 'asc', { natural: true } ],
		'sort-vars': [ 'error', { ignoreCase: true } ],

		// React plugin rules
		'react/destructuring-assignment': [ 'error', 'always' ],
		'react/jsx-no-target-blank': [ 'error' ],
		'react/jsx-no-undef': [ 'error' ],
		'react/jsx-sort-default-props': [ 'error', { ignoreCase: true } ],
		'react/jsx-sort-props': [ 'error', { ignoreCase: true } ],
		'react/no-deprecated': [ 'warn' ],
		'react/sort-prop-types': [ 'error', { ignoreCase: true } ],
	},
};
