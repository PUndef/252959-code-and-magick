'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var WINDOW_GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var shadowCloudColor = 'rgba(0, 0, 0, 0.3)';
var backgroundCloudColor = '#fff';
// var BAR_HEIGHT = 20;
// var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var BAR_WIDTH = 40;
var barHeight = 150;
var myBarColor = 'rgba(255, 0, 0, 1)';

var renderCloud = function(ctx, x, y, color) {
  // ctx.fillStyle = color;
  // ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = color;

  var offset = 10;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + offset, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - offset);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH - offset, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + offset);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + WINDOW_GAP, CLOUD_Y + WINDOW_GAP, shadowCloudColor);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, backgroundCloudColor);

  ctx.fillStyle = '#000';

  ctx.font="16px PT Mono";
  ctx.fillText('Ура вы победили', CLOUD_X + GAP, GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + (GAP + TEXT_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP);
    if(names[i] === 'Вы') {
      ctx.fillStyle = myBarColor;
    } else {
      ctx.fillStyle = "rgba(0, 0, 255," + Math.random() + ")";
    }
    ctx.fillRect(CLOUD_X + GAP + (GAP + TEXT_WIDTH) * i, GAP + FONT_GAP + FONT_GAP , BAR_WIDTH ,(barHeight * times[i]) / maxTime );
  }
}
