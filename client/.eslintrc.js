module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	env: {
		browser: true,
		node: true,
		es2021: true
	},

	extends: [
		"next/core-web-vitals",
		"airbnb-base",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
	],

	plugins: ["@typescript-eslint", "import", "react", "react-hooks", "prettier"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2021,
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			version: "detect"
		},
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"]
			}
		}
	},
	rules: {
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"prettier/prettier": "error",
		"@typescript-eslint/explicit-module-boundary-types": [
			"error",
			{
				allowArgumentsExplicitlyTypedAsAny: true
			}
		],
		"@typescript-eslint/explicit-function-return-type": [
			"error",
			{
				allowExpressions: true
			}
		],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				mjs: "never",
				jsx: "never",
				ts: "never",
				tsx: "never"
			}
		],
		"@typescript-eslint/no-explicit-any": "off",
		"class-methods-use-this": "off"
	},
	ignorePatterns: ["**/node_modules/**", "dist"]
};
