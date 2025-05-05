import typescriptParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended, // JavaScript の基本的なルール
  ...tseslint.configs.recommended, // TypeScript の推奨ルール
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      prettier: prettier, // Prettier プラグインを追加
    },
    rules: {
      'no-undef': ['warn'], // 未定義の変数をエラーとして検出
      eqeqeq: ['error', 'always'], // 厳密な等価演算子を強制
      'no-console': ['warn'], // console.log の使用を警告
      quotes: ['error', 'single'], // シングルクォートを強制
      semi: ['error', 'always'], // セミコロンを必須に
      camelcase: ['error', { properties: 'always' }], // キャメルケースを強制
      'no-var': ['error'], // var の使用を禁止
      'prefer-const': ['error'], // 再代入されない変数に const を推奨
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      ...prettier.configs.recommended.rules, // Prettier の推奨ルールを適用
      'prettier/prettier': 'error', // Prettier のフォーマットルールを ESLint エラーとして扱う
    },
  },
];
