'use strict';

(function () {

  var countObject = 4;

  window.generateRandomData = function (wizardData) {
    for (var i = 0; i < countObject; i++) {
      wizardData.push({
        name: window.rawData.WIZARD_NAMES[window.util.getRandomInt(0, window.rawData.WIZARD_NAMES.length - 1)] + ' ' + window.rawData.WIZARD_SURNAME[window.util.getRandomInt(0, window.rawData.WIZARD_SURNAME.length - 1)],
        coatColor: window.rawData.COAT_COLOR[window.util.getRandomInt(0, window.rawData.COAT_COLOR.length - 1)],
        eyesColor: window.rawData.EYES_COLOR[window.util.getRandomInt(0, window.rawData.EYES_COLOR.length - 1)]
      });
    }
    return wizardData;
  };

})();
