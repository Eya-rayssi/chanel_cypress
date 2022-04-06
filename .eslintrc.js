module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:cypress/recommended",
        "eslint:recommended",
        "plugin:json/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "2021",
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": "warn",
        "cypress/no-unnecessary-waiting": "warn",
        "cypress/no-force": "warn",
        "cypress/no-pause": "error"
    }
};
