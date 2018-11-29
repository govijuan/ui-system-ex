const createConfig = require('./rollup.create.config');
const publicFiles = require('./scripts/publicFiles');
const pkg = require('./package.json');

export default [
  createConfig({
    pkg,
    experimentalCodeSplitting: true,
    input: publicFiles,
    output: [
      {
        format: 'es',
        dir: 'es',
      },
      {
        format: 'cjs',
        dir: 'lib',
        exports: 'named',
      },
    ],
    // Do not include these peer deps in our bundle
    external: ['react', 'react-dom', 'styled-components'],
  }),
  createConfig({ pkg, input: 'src/index.ts', umd: true }),
];
