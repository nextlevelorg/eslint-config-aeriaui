import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import parserVue from 'vue-eslint-parser'
import parserTs from '@typescript-eslint/parser'
import aeriaConfig from 'eslint-config-aeria'

const eslintrc = new FlatCompat({
  baseDirectory: fileURLToPath(import.meta.resolve('.')),
})

const aeriaUiConfig = Object.assign(aeriaConfig, {
  languageOptions: {
    parser: parserVue,
    parserOptions: {
      parser: parserTs,
      project: ['./tsconfig.json'],
      extraFileExtensions: [
        '.vue',
      ]
    },
  },
  files: [
    '**/*.js',
    '**/*.ts',
    '**/*.vue',
  ]
})

export default [].concat(
  eslintrc.plugins('vue'),
  eslintrc.extends('plugin:vue/vue3-recommended'),
  aeriaUiConfig,
  {
    rules: {
      'vue/multi-word-component-names': 0
    }
  },
  {
    files: [
      'src/components/**/*.vue'
    ],
    rules: {
      'vue/multi-word-component-names': 'error'
    }
  }
)

