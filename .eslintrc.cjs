module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended', // Add this line
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
        // 'react-refresh/only-export-components': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        "prettier/prettier": [
            "warn",
            {
                "singleQuote": true,
                "parser": "flow"
            }
        ]
    },
};
