# Node JS Exercise

Showing a list of settings on the `/settings` route.

## Requirements

### Global
* [NodeJS](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/en/docs/install)

### Environment file
```
cp .env.default .env
```
You can customize the `HOST` and the `PORT` of the application.
The default URL is: http://localhost:8042.

## Commands

* Install dependencies
```bash
yarn
```

* Start dev
```bash
yarn start
```
You can display the settings on http://localhost:8042/settings.

* Check ESLint
```bash
yarn lint
```

* Build for production
```bash
yarn build
```

* Start the production version.
```bash
yarn serve
```
