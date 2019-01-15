import 'dotenv/config';
import path from 'path';

import SettingsRouter from './modules/SettingsRouter';
import Server from './modules/Server';

const dataDirectory = path.resolve(__dirname, './data');
const settingsRouter = new SettingsRouter(dataDirectory);

const { HOST, PORT } = process.env;
const server = new Server(HOST, PORT);

settingsRouter.init()
  .then(router => server.start(router))
  .catch(e => console.log(e));

// Log error from babel
process.on('unhandledRejection', (err) => {
  console.log(err.stack);
  process.exit(1);
});
