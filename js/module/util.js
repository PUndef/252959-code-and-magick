'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    stopCloseOnEsc: function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.stopPropagation();
      }
    },
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    onPopupEscPress: function (evt) {
      window.util.isEscEvent(evt, window.popup.closePopup);
    },
    colorizeElement: function (element, styleName, colorOptions) {
      element.style[styleName] = colorOptions[window.util.getRandomInt(0, colorOptions.length - 1)];
    }
  };

})();
