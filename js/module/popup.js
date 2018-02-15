'use strict';

(function () {
  var setup = document.querySelector('.setup');

  window.popup = {
    openPopup: function () {
      setup.classList.remove('hidden');
      document.addEventListener('keydown', window.util.onPopupEscPress);
    },
    closePopup: function () {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', window.util.onPopupEscPress);
    }
  };

})();
