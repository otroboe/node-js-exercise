import SettingsRouter from './SettingsRouter';

describe('SettingsRouter', () => {
  describe('filterSettingsList', () => {
    const settingList = [
      {
        name: 'Mixer',
        requires: ['audio', 'pcb'],
      }, {
        name: 'AttractLoop',
        requires: [],
      }, {
        name: 'Volume',
        requires: ['audio'],
      }, {
        name: 'Dummy with no requires key',
      }, {
        name: 'Dummy with no listed components',
        requires: ['component1', 'component2', 'component3'],
      },
    ];

    const componentList = [
      {
        name: 'audio',
      },
      {
        name: 'LED array',
      },
    ];

    test('Should return an empty array with empty inputs', () => {
      expect(SettingsRouter.filterSettingsList([], [])).toEqual([]);
    });

    test('Should only return the setting with no requirements if no component listed', () => {
      expect(SettingsRouter.filterSettingsList(settingList, [])).toEqual([{
        name: 'AttractLoop',
        requires: [],
      }]);
    });

    test('Should return the right filtered settings', () => {
      expect(SettingsRouter.filterSettingsList(settingList, componentList)).toEqual([
        {
          name: 'Mixer',
          requires: ['audio', 'pcb'],
        }, {
          name: 'AttractLoop',
          requires: [],
        }, {
          name: 'Volume',
          requires: ['audio'],
        },
      ]);
    });
  });
});
