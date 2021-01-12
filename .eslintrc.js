module.exports = {
	root: true,
	plugins: [
		'react',
		'react-native',
		'react-hooks',
	],
	parser: 'babel-eslint',
	extends: [
		// '@react-native-community',
		'plugin:react-hooks/recommended',
	],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};

