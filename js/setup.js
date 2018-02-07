'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');

var countObject = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardData = [];

var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateRandomData = function () {
  for (var i = 0; i < countObject; i++) {
    wizardData.push({
      name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAME[getRandomInt(0, WIZARD_SURNAME.length - 1)],
      coatColor: COAT_COLOR[getRandomInt(0, COAT_COLOR.length - 1)],
      eyesColor: EYES_COLOR[getRandomInt(0, EYES_COLOR.length - 1)]
    });
  }
  return wizardData;
};

wizardData = generateRandomData();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardData.length; i++) {
  fragment.appendChild(renderWizard(wizardData[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    setup.classList.add('hidden');
  }
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.add('hidden');
  }
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('hidden');
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLOR[getRandomInt(0, COAT_COLOR.length - 1)];
});
