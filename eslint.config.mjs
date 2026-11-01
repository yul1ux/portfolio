import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      '.astro/**',
      'node_modules/**',
      '.tools/**',
      '.pnpm-store/**',
    ],
  },
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
);
