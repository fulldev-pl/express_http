# ExpressJS HTTP server

Example of basic nodeJS HTTP server, with usage of expressJS and few tools like eslint, prettier and typescript.

## Required packages

-   expressJS
-   dotenv
-   nodemon
-   typescript
-   eslint
-   prettier
-   @typescript-eslint/eslint-plugin
-   @typescript-eslint/parser
-   eslint-config-prettier
-   @types/express

## Packages installation

```
npm init -y

npm i express

npm i —-save-dev typescript eslint@8 @types/express @typescript-eslint/eslint-plugin nodemon prettier

npx -p typescript tsc --init
```

## .env file

```json
PORT=3000 // OR WHICHEVER YOU WANT TO USE
```

## eslint config

Configuration to use with typescript and prettier. Contains two example rules.

```javascript
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
```

## vscode plugins

Those are vscode plugins I have used creating this example:

-   ESLint - dbaeumer.vscode-eslint
-   Prettier - Code formatter - esbenp.prettier-vscode

## vscode settings.json

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
        "editor.formatOnSave": true,
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": "explicit"
        }
    }
}
```

## Deployment to render
