import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json';

const rollupConfig = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-lib',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [
          { find: '@src', replacement: './src/' },
          { find: '@components', replacement: './src/components/' },
          { find: '@general', replacement: './src/general/' },
          { find: '@styles', replacement: './src/general/styles' },
          { find: '@hooks', replacement: './src/hooks/' },
          { find: '@general', replacement: './src/general/' },
        ],
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.build.json' }),
      scss({}),
      url(),
      svgr({
        typescript: true,
      }),
      terser(),
    ],
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.s?css$/, /\.css$/, /\.svg$/],
    plugins: [
      url(),
      svgr({
        typescript: true,
      }),
      dts(),
    ],
  },
];

export default rollupConfig;
