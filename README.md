# Basic Express HTTP server

Example of HTTP server made with express framework and few tools like eslint, prettier and typescript.

## Required packages

-   express
-   dotenv
-   nodemon
-   typescript
-   eslint
-   prettier
-   @typescript-eslint/eslint-plugin
-   @typescript-eslint/parser
-   eslint-config-prettier
-   @types/express

## vscode plugins

Those are vscode plugins I have used while creating this example.
Between parentheses I wrote extension IDs, so you can find them easier.

-   ESLint (dbaeumer.vscode-eslint)
-   Prettier - Code formatter (esbenp.prettier-vscode)
-   GitLens (eamodio.gitlens)

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

## Packages installation

```shell
npm init -y

npm i express dotenv

npm i —-save-dev typescript @types/express nodemon prettier

npm i —-save-dev eslint@8 @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier

npx -p typescript tsc --init
```

## .env file

In this example I have set 3000, but you can use any port you want.

```json
PORT=3000
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

## .prettierrc config

Example of basic prettier setup.

```json
{
    "trailingComma": "none",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": true
}
```

## Deployment

I have deployed this app to service called [Render](https://render.com/register).

They also offer free tier, so you can play around and deploy some simple apps.

Live url is [here](https://express-http-tnjz.onrender.com).

## Support

This is my youtube [channel](https://www.youtube.com/channel/UCCBoahZ21JQ3wClmEeWqzUg).
Let me know if you liked this example.
