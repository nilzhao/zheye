/**
 * 所需插件
 * prettier // 规则见 https://prettier.io/docs/en/options.html
 * eslint // 规则见 https://cn.eslint.org/docs/rules/
 * eslint-plugin-vue 规则见 https://github.com/vuejs/eslint-plugin-vue
 * eslint-plugin-prettier // 将prettier作为ESLint规范来使用
 * eslint-config-prettier
 * @typescript-eslint/eslint-plugin
 * @typescript-eslint/parser // ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
 *
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {},
  /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
  parser: 'vue-eslint-parser',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      // tsx: true, // Allows for the parsing of JSX
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'vue/one-component-per-file': 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
      },
    ],
  },
};
