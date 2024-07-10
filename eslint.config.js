import svelte from 'eslint-plugin-svelte';

export default [
  {
    files: ['src/**/*.{js,ts,svelte}'],
    plugins: {
      svelte,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // Add your custom rules here
    },
  },
  {
    files: ['**/*.svelte'],
    processor: 'svelte/svelte',
  },
];
