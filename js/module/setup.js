'use strict';

(function () {

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupUserName = document.querySelector('.setup-user-name');

  setup.querySelector('.setup-similar').classList.remove('hidden');

  setupOpen.addEventListener('click', function () {
    window.popup.openPopup();
  });

  setupClose.addEventListener('click', function () {
    window.popup.closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, window.popup.closePopup);
  });

  setupUserName.addEventListener('keydown', function (evt) {
    window.util.stopCloseOnEsc(evt);
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, window.popup.openPopup);
  });

})();
