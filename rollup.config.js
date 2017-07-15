import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

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
      preferBuiltins: false,  // Default: true
    }),
    commonjs()
  ]
};