import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import license from 'rollup-plugin-license';
import { name, version, main, author } from './package.json';

const isForLib = process.env.NODE_ENV === 'lib';

const settings = {
  globals: {}
};

const input = './src/main.ts';
export default {
  input,
  output: [
    {
      file: 'dist/system-grid.js',
      format: 'umd',
      name: 'file',
      // exports: 'named', /** Disable warning for default imports */
      sourcemap: true
      // plugins: [terser()]
    }
  ],
  external: {},

  plugins: [
    json(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    typescript({
      typescript: require('typescript'),
      sourceMap: true,
      outputToFilesystem: true
    }),
    commonjs({
      include: 'node_modules/**',
      extensions: ['.js'],
      ignoreGlobal: false,
      sourceMap: false
    }),
    license({
      banner: `
        ${ name } v${ version }
        Copyright 2021<%= moment().format('YYYY') > 2021 ? '-' + moment().format('YYYY') : null %> ${ author }
      `
    })
  ]
};
