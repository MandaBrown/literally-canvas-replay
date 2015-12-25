var ActionDot = require('./action_dot.js');

module.exports = FrameControls;

function FrameControls(opts) {
  var frameControlElement = document.createElement('div');
  var metaInfoElement = document.createElement('div');
  var actionDots = [];

  var addFrameControlElement = function(canvasElement) {
    var nextEl = canvasElement.nextSibling;
    var parentEl = canvasElement.parentElement;

    frameControlElement.className = 'frame-control';

    if (nextEl == null) {
      parentEl.appendChild(frameControlElement);
    } else {
      parentEl.insertBefore(frameControlElement, nextEl);
    }

    metaInfoElement.className = 'meta-info';
    frameControlElement.appendChild(metaInfoElement);
  };

  var loadActions = function(actions, onActionDotClick) {
    var actionDot;

    actions.forEach(function(action, index) {
      actionDot = new ActionDot(action, index, metaInfoElement, onActionDotClick);
      frameControlElement.appendChild(actionDot.el);
      actionDots.push(actionDot);
    });
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
