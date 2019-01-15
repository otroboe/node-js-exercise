
import express from 'express';

import { parseFile } from './utils';

class SettingsRouter {
  /**
   * @param {String} dataDirectory absolute directory
   */
  constructor(dataDirectory) {
    this.settingsFilePath = `${dataDirectory}/settings.json`;
    this.componentsFilePath = `${dataDirectory}/components.json`;
    this.expressRouter = express.Router();

    this.init();
  }

  /**
   * @returns {Promise}
   */
  async init() {
    const settingsData = await parseFile(this.settingsFilePath);
    const componentList = await parseFile(this.componentsFilePath);

    this.expressRouter.get('/settings', (req, res) => {
      res.send(settingsData);
      res.end();
    });

    return this.expressRouter;
  }
}

export default SettingsRouter;
