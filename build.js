import * as esbuild from 'esbuild';
import fs from 'fs';

const isWatch = process.argv.includes('--watch');

const buildOptions = {
  entryPoints: ['src/ha-energy-3d-card.js'],
  bundle: true,
  outfile: 'dist/ha-energy-3d-card.js',
  format: 'esm',
  minify: true,
  sourcemap: true,
  target: ['es2022', 'chrome100', 'safari15', 'firefox100'],
  loader: { '.glb': 'file' }
};

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

if (isWatch) {
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log('⚡ Watching for changes in src/...');
} else {
  await esbuild.build(buildOptions);
  console.log('✅ Build complete: dist/ha-energy-3d-card.js');
}
