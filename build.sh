rm -rf dist
prettier --write src/
npm run build:esm
npm run build:cjs
cp -r src/index.css dist/cjs/
cp -r src/index.css dist/esm/
cp -r src/font/ dist/esm/
cp -r src/font/ dist/cjs/