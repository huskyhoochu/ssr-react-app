const path = require('path');
const register = require('ignore-styles').default;
const assetManifest = require('./build/asset-manifest.json');

// Render for asset files
const searchAssetUrl = (manifest, filename) =>
  Object.keys(manifest.files)
    .filter(asset => asset.replace('static/media/', '') === filename)
    .map(fileKey => manifest.files[fileKey]);

register(undefined, (module, filename) => {
  const imgExtensions = ['.png', '.jpg', 'jpeg', '.gif', '.svg'];
  const isImg = imgExtensions.find(ext => filename.endsWith(ext));
  if (!isImg) return;
  const [assetUrl] = searchAssetUrl(assetManifest, path.basename(filename));
  module.exports = assetUrl;
});

const listener = require('./ssr-server/server_compiled').default;
const html = require('./app_compiled/html').default;

const buildPath = path.resolve(__dirname, 'build');
const htmlPath = path.resolve(buildPath, 'index.html');

listener(html, { buildPath, htmlPath }).listen(5000, () => {
  console.log('server listening on http://localhost:5000 ...');
});
