
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
    const settingsList = await parseFile(this.settingsFilePath);
    const componentList = await parseFile(this.componentsFilePath);
    const filteredList = SettingsRouter.filterSettingsList(settingsList, componentList);

    this.expressRouter.get('/settings', (req, res) => {
      res.send(filteredList);
      res.end();
    });

    return this.expressRouter;
  }

  /**
   * @param {Array} settingsList
   * @param {Array} componentList
   * @returns {Array}
   */
  static filterSettingsList(settingsList, componentList) {
    // Put all the component name in an array of string (instead of objects)
    const componentNameList = componentList.map(item => item.name);

    let settingRequires;

    return settingsList.filter(settingsItem => {
      ({ requires: settingRequires } = settingsItem);

      if (!Array.isArray(settingRequires)) {
        return false;
      }

      if (settingRequires.length === 0) {
        return true;
      }

      return settingRequires.some(requiredComponent => componentNameList.includes(requiredComponent));
    });
  }
}

export default SettingsRouter;
