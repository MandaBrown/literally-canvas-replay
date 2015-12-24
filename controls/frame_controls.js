var ActionDot = require('./action_dot.js');

module.exports = FrameControls;

function FrameControls(opts) {
  var frameControlElement = document.createElement('div');
  var actionDots = [];

  var addFrameControlElement = function(canvasElement) {
    var nextEl = canvasElement.nextSibling;
    var parentEl = canvasElement.parentElement;

    frameControlElement.className = 'frame-control'

    if (nextEl == null) {
      parentEl.appendChild(frameControlElement);
    } else {
      parentEl.insertBefore(frameControlElement, nextEl);
    }
  };

  var loadActions = function(actionCount, onActionDotClick) {
    var actionDot;

    for (var i = 0; i < actionCount; i++){
      actionDot = new ActionDot(i, onActionDotClick);
      frameControlElement.appendChild(actionDot.el);
      actionDots.push(actionDot);
    }
  };

  var setActiveDot = function(activeDotIndex){
    actionDots.forEach(function(actionDot){
      actionDot.setActiveState(actionDot.actionIndex === activeDotIndex);
    });
  };

  addFrameControlElement(opts.canvasElement);

  return {
    loadActions: loadActions,
    setActiveDot: setActiveDot
  };
}
