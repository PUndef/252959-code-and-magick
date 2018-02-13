'use strict';

(function () {

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    window.util.colorizeElement(wizardCoat, 'fill', window.rawData.COAT_COLOR);
  });

  wizardEyes.addEventListener('click', function () {
    window.util.colorizeElement(wizardEyes, 'fill', window.rawData.EYES_COLOR);
  });

  setupFireball.addEventListener('click', function () {
    window.util.colorizeElement(setupFireball, 'backgroundColor', window.rawData.FIREBALL_COLOR);
  });

})();
