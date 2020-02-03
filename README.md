# CompareIt - React Web-App

This is a react web app project, Which uses career data of Sachin Tendulkar to show highlights of his career as a cricketer.

This project is deployed on [Netlify](https://compare-it.netlify.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/71ffe491-a2d7-4fb6-b51b-8e272531a5f4/deploy-status)](https://app.netlify.com/sites/compare-it/deploys)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Calculating Page load time

## See performance result at [webpagetest.org](https://www.webpagetest.org/result/200203_97_dcf5194e4f846a07d655c29bbf5e68d8/)

served in 2.022s

# Optimization steps taken to reduce load time

## Purge CSS

PurgeCSS will parse any files that match the given file globs for the usage of the selectors in our CSS. If a selector isn't present in any of the matched files, then it rips those styles out of the CSS, ultimately slimming the build.

## importing selective components from echarts-for-react

Imported ECharts.js modules manually to reduce bundle size

## Using NPM run build

Using npm run build to have an optimized build for hosting.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
