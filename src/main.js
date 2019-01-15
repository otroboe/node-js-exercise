import 'dotenv/config';
import Server from './modules/Server';

const { HOST, PORT } = process.env;
const server = new Server(HOST, PORT);

server.start();

// Log error from babel
process.on('unhandledRejection', (err) => {
  console.log(err.stack);
  process.exit(1);
});
