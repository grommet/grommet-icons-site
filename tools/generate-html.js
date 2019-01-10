import React from 'react';
import fs from 'fs';
import path from 'path';
import { minify } from 'html-minifier';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from '../src/js/App';

const sheet = new ServerStyleSheet();
const html = renderToString((
  <StyleSheetManager sheet={sheet.instance}>
    <App />
  </StyleSheetManager>
));

const styles = sheet.getStyleTags();

const ssrHTML = `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta charset="UTF-8">
  <title>Grommet Icons</title>
  <meta name="description" content="" />
  <meta name="fragment" content="!" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta name="mobile-web-app-capable" content="yes">
  <link rel="shortcut icon" type="image/png" href="/img/shortcut-icon.png" />
  <link rel="apple-touch-icon" sizes="196x196" type="image/png" href="/img/mobile-app-icon.png">
  <style>
    body {
      margin: 0;
    }

    .spin {
      opacity: 0;
      animation: spin-in 0.5s 1 forwards, spin-out 0.3s 1 forwards;
      animation-delay: 0s, 4.7s;
    }

    .fade-text {
      opacity: 0;
      animation: fade-in 0.5s 1 forwards, fade-out 0.3s 1 forwards;
      animation-delay: 0.3s, 4.7s;
    }

    .fade-icon {
      opacity: 0;
      animation: fade-in 1s 1 forwards;
    }

    #chomp-mouth {
      opacity: 0;
      animation: chomp-mouth 0.5s infinite;
      animation-delay: 0.5s;
    }

    body.loading {margin: 0px; width: 100vw; height: 100vh;
      background-image: radial-gradient(circle at 50% 15%, #fff, #fff 30%, #ccc);
    }
    body.loading #content {
      position: relative;
      width: 100%;
      height: 100%;
      font-size: 0px;
    }
    body.loading #logo {
      position: absolute; display: block; width: 140px; height: 140px;
      top: calc(50vh - 70px); left: calc(50vw - 70px);
    }
    div.t {
      display: inline-block;
      box-sizing: border-box;
      margin: 0px;
      width: 10vw;
      height: 10vh;
      background-color: #e2e2e2;
    }
    div.t.on {
      -webkit-animation: pulse 3s infinite linear alternate;
      -moz-animation: pulse 3s infinite linear alternate;
      animation: pulse 3s infinite linear alternate;
    }
    div.t.on:hover {
      -webkit-animation: none;
      background-color: #ccc;
    }
    @keyframes spin-in {
      from { transform:rotateX(90deg); opacity: 0.5; }
      to { transform:rotateX(0deg); opacity: 1;  }
    }
    @keyframes spin-out {
      from { transform:rotateX(0deg); opacity: 0.5 }
      to { transform:rotateX(90deg); opacity: 0;  }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1;  }
    }
    @keyframes fade-out {
      from { opacity: 1; }
      to { opacity: 0;  }
    }
    @keyframes chomp-mouth {
      0% {
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      51% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes pulse {
      100% { background-color: #fff; }
    }
  </style>
  ${styles}
</head>
<body class="loading">
  <div id="content" tabindex="-1" style="outline: none;">
    ${html}
  </div>
  <script async src="/index.js"></script>
</body>
</html>
`;

fs.writeFileSync(
  path.resolve('dist/index.html'),
  minify(ssrHTML, {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    minifyCSS: true,
    removeEmptyAttributes: true,
  })
);
