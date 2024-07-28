module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { project: ['./tsconfig.json'] },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_'
            }
        ],
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: ['parameter', 'variable'],
                leadingUnderscore: 'require',
                format: ['camelCase'],
                modifiers: ['unused']
            }
        ]
    },
    ignorePatterns: ['dist', 'node_modules', '**/*.js']
}
