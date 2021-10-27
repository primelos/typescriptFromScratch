npm init -y
npm i -D webpack webpack-cli
npm i -D html-webpack-plugin
npm i webpack-dev-server
npx gitignore node
npm i -D typescript ts-loader
npm i -D @babel/core @babel/preset-env @babel/preset-typescript
npm i -D @babel/preset-typescript -> tells babel how to handle typescript syntax / has plugins that removes types from your code
npm i -D @babel/preset-env -> allow use of the latest javascript features
npm i -D @babel/core -> installs babel
npm i -D babel loader -> to allow webpack to process typescript files with babel
npm i -D @babel/plugin-proposal-class-properties -> allows babel to read class values without constructor
npm i -S react react-dom
npm i -D @types/react @types/react-dom
npm i -D @babel/preset-react -> enable babel to read react
npm i -D css-loader -> reads and parse css
npm i -D mini-css-extract-plugin -> to add parsed css to the document
npm i -D typescript-plugin-css-modules -> to see class properties in css
npm i -D @svgr/webpack -> to load svg files
npm i -S react-icons
# typescriptFromScratch
