# Jaggaer FE dev test

This is a simple web app project in [React.js](https://reactjs.org/) bootstrapped with [Webpack](https://webpack.js.org/),
using [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/).

App is deployed to [Heroku](https://www.heroku.com/), and can be viewed on 
the following link https://jaggaer-test-213702898a53.herokuapp.com/.

## Technical spec

[Node.js](https://nodejs.org/) version used `v18.17.1`

[Yarn](https://yarnpkg.com/) version used `1.22.19`

[Axios](https://axios-http.com) was used for HTTP request as a small but powerful library.
[Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) were 
used 
for creating server, both for API and for serving React app.


## Getting Started DEV

First, install `node_modules`:

```bash
yarn
```

Then, start the development API server:

```bash
yarn run start:dev
```
And finally, start the React development server:

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started PROD

First, install `node_modules`:

```bash
yarn
```

Then, build project:

```bash
yarn run build
```
And finally, start the Express server:

```bash
yarn run start
```

## Styling

[Material UI](https://mui.com/) was used for styling.

## Clean Code

Keep code clean with [ESlint](https:/eslint.org/) and [Prettier](https://prettier.io/).

To format code on demand with Prettier:

```bash
yarn run format
```
To format code on demand with ESlint:

```bash
yarn run lint
```
[Husky](https://typicode.github.io/husky/) is doing both on every git commit.

## Useful Links

To learn more about technologies used take a look at the following resources:

-   [React.js Documentation](https://reactjs.org/docs/getting-started.html)
-   [Redux.js Documentation](https://redux.js.org/introduction/getting-started)
-   [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
-   [React Router Documentation](https://reactrouterdotcom.fly.dev/docs/en/v6)
-   [Axios Documentation](https://axios-http.com/docs/intro)
-   [Husky Documentation](https://typicode.github.io/husky/)
-   [MUI Documentation](https://mui.com/material-ui/getting-started/)
-   [Webpack Documentation](https://webpack.js.org/concepts/)
-   [Express.js Documentation](https://expressjs.com/en/starter/installing.html)
