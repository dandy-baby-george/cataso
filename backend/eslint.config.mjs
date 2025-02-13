import typescriptParser from '@typescript-eslint/parser';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      'no-undef': ['warn'], // 未定義の変数をエラーとして検出
      eqeqeq: ['error', 'always'], // 厳密な等価演算子を強制
      'no-console': ['warn'], // console.log の使用を警告
      quotes: ['error', 'single'], // シングルクォートを強制
      semi: ['error', 'always'], // セミコロンを必須に
      camelcase: ['error', { properties: 'always' }], // キャメルケースを強制
      'no-magic-numbers': ['warn', { ignore: [0, 1] }], // マジックナンバーの使用を警告
      'no-var': ['error'], // var の使用を禁止
      'prefer-const': ['error'], // 再代入されない変数に const を推奨
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
    },
  },
];
