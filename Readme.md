# Webpack HMR with vanilla js

Table of Contents
<!-- no toc -->

- [Webpack HMR with vanilla js](#webpack-hmr-with-vanilla-js)
  - [Link to hmr api-](#link-to-hmr-api-)
  - [Resolve](#resolve)
  - [Webpack watch mode](#webpack-watch-mode)
  - [webpack-dev-middleware for express](#webpack-dev-middleware-for-express)
  - [HMR Understandings](#hmr-understandings)

***

## Link to hmr api-

<https://webpack.js.org/api/hot-module-replacement/>

## Resolve

<https://webpack.js.org/configuration/resolve/#resolvealias>

## Webpack watch mode

Watch mode do update the files(i.e., it compiles changes immediately) in dist folder lively, but won't trigger the changes to update them in browser(i.e.,  refresh in browser existing files(in browser) isn't possible alone with webpack watch). So, we need to manually refresh the page in browser.
Quoting from webpack.js.org - The only downside is that you have to refresh your browser in order to see the changes. It would be much nicer if that would happen automatically as well, so let's try webpack-dev-server which will do exactly that.
• Watch mode doesn't run any server, thus browser refresh is required manually.
• Webpack dev server supports Live Reload but not HMR.

## webpack-dev-middleware for express

webpack-dev-middleware is a wrapper that will emit files processed by webpack to a server like express. See the screenshot and the output key of the webpack.config.js file.

Quoting from <https://webpack.js.org/guides/hot-module-replacement/>

- If you took the route of using webpack-dev-middleware instead of webpack-dev-server, please use the webpack-hot-middleware package to enable HMR on your custom server or application.

- [Click here for source](https://webpack.js.org/guides/hot-module-replacement/#hmr-with-stylesheets) Hot Module Replacement with CSS is actually fairly straightforward with the help of the style-loader. This loader uses module.hot.accept behind the scenes to patch `<style>` tags when CSS dependencies are updated.

## HMR Understandings

Seeing below code, if you pay attention to module.hot flag, its just that some changes have been made to files in the webpack defined /dist folder,
and thus we'd have it in code and thus we can resupply the changes to codebase via just reimporting changed files. Yikes!! module.hot.accecpt
just works like this.

```js
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);// +
    element = component(); // + Re-render the "component" to update the click handler
    document.body.appendChild(element); // +
  })
}
```
