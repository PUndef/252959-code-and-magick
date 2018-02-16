'use strict';

(function () {
  var POSITION_TOP_POPUP_DEFAULT = '80px';
  var POSITION_LEFT_POPUP_DEFAULT = '50%';
  var setup = document.querySelector('.setup');

  window.dialogUtil = {
    openPopup: function () {
      setup.classList.remove('hidden');
      document.addEventListener('keydown', window.util.onPopupEscPress);
    },
    closePopup: function () {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', window.util.onPopupEscPress);
      window.dialogUtil.setPositionPopup(POSITION_TOP_POPUP_DEFAULT, POSITION_LEFT_POPUP_DEFAULT);
    },
    setPositionPopup: function (positionTop, positionLeft) {
      setup.style.top = positionTop;
      setup.style.left = positionLeft;
    }
  };

})();
