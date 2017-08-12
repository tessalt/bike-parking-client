import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss';

export default {
  entry: './src/index.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    resolve({
      module: true, // Default: true
      jsnext: true,  // Default: false
      main: true,  // Default: true
      browser: true,  // Default: false
      extensions: [ '.js', '.json' ],  // Default: ['.js']
    }),
    commonjs(),
    globals(),
    builtins(),
    postcss({
      extensions: [ '.css' ]
    })
  ]
};