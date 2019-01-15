import express from 'express';
import bodyParser from 'body-parser';

class Server {
  /**
   * @param {String} host
   * @param {Number} port
   */
  constructor(host, port) {
    this.host = host;
    this.port = port;

    this.app = express();

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // CORS
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  }

  start() {
    this.app.listen(this.port, this.host, () => this.onStart());
  }

  onStart() {
    console.log(`App listening on http://${this.host}:${this.port}!`);
  }
}

export default Server;
