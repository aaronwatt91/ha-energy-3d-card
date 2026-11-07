import * as esbuild from 'esbuild';
import fs from 'fs';

const isWatch = process.argv.includes('--watch');

const buildOptions3D = {
  entryPoints: ['src/ha-energy-3d-card.js'],
  bundle: true,
  outfile: 'dist/ha-energy-3d-card.js',
  format: 'esm',
  minify: true,
  sourcemap: true,
  target: ['es2022', 'chrome100', 'safari15', 'firefox100'],
  loader: { '.glb': 'file' }
};

const buildOptionsFlow = {
  entryPoints: ['src/ha-energy-flow-card.js'],
  bundle: true,
  outfile: 'dist/ha-energy-flow-card.js',
  format: 'esm',
  minify: true,
  sourcemap: true,
  target: ['es2022', 'chrome100', 'safari15', 'firefox100']
};

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

if (isWatch) {
  const ctx3D = await esbuild.context(buildOptions3D);
  const ctxFlow = await esbuild.context(buildOptionsFlow);
  await ctx3D.watch();
  await ctxFlow.watch();
  console.log('⚡ Watching for changes in src/...');
} else {
  await esbuild.build(buildOptions3D);
  console.log('✅ Build complete: dist/ha-energy-3d-card.js');
  await esbuild.build(buildOptionsFlow);
  console.log('✅ Build complete: dist/ha-energy-flow-card.js');
}
