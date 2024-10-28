rm -rf dist
prettier --write src/
npm run build:esm
npm run build:cjs
cp -r src/index.css dist/
cp -r src/font/ dist/