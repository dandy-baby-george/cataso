import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    globals: {
      process: 'readonly', // process をグローバルに認識させる
    },
  },
  {
    rules: {
      'no-unused-vars': ['error'], // 未使用の変数をエラーとして検出
      'no-undef': ['error'], // 未定義の変数をエラーとして検出
      eqeqeq: ['error', 'always'], // 厳密な等価演算子を強制
      'no-console': ['warn'], // console.log の使用を警告
      indent: ['error', 4], // インデントを4スペースで強制
      quotes: ['error', 'single'], // シングルクォートを強制
      semi: ['error', 'always'], // セミコロンを必須に
      'brace-style': ['error', '1tbs'], // ブレースのスタイルを "1tbs" に強制
      camelcase: ['error', { properties: 'always' }], // キャメルケースを強制
      'newline-after-var': ['error', 'always'], // 変数宣言後の空行を強制
      'no-magic-numbers': ['warn', { ignore: [0, 1] }], // マジックナンバーの使用を警告
      'consistent-return': ['error'], // 一貫した return を強制
      'no-var': ['error'], // var の使用を禁止
      complexity: ['warn', { max: 10 }], // 関数の複雑さを制限
      'prefer-const': ['error'], // 再代入されない変数に const を推奨
      // "import/no-unresolved": ["error"], // モジュールの解決をチェック
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      'prettier/prettier': 'error',
    },
  },
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
  },
];
