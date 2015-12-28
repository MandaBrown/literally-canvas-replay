var ActionDot = require('./action_dot.js');

module.exports = FrameControls;

function FrameControls(opts) {
  var frameControlElement = document.createElement('div');
  var metaInfoElement = document.createElement('div');
  var actionDots = [];
  var currentActiveDotIndex = null;

  var addFrameControlElement = function(canvasElement) {
    var nextEl = canvasElement.nextSibling;
    var parentEl = canvasElement.parentElement;

    frameControlElement.className = 'frame-control';
    metaInfoElement.className = 'meta-info';

    if (nextEl == null) {
      parentEl.appendChild(frameControlElement);
    } else {
      parentEl.insertBefore(frameControlElement, nextEl);
    }

    frameControlElement.appendChild(metaInfoElement);
    addArrowControls();
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
    var activeDot;
    currentActiveDotIndex = activeDotIndex;
    actionDots.forEach(function(actionDot) {
      active = actionDot.actionIndex === activeDotIndex;
      if (active) activeDot = actionDot;
      actionDot.setActiveState(active);
    });
    return activeDot;
  };

  var addArrowControls = function() {
    var arrowControlElement = document.createElement('div');
    arrowControlElement.className = 'arrow-control';

    var onForward = function(){
      if (currentActiveDotIndex >= actionDots.length - 1) return;
      activeDot = setActiveDot(currentActiveDotIndex + 1);
      activeDot.triggerClick();
    };
    var onBack = function(){
      if (currentActiveDotIndex == 0) return;
      activeDot = setActiveDot(currentActiveDotIndex - 1);
      activeDot.triggerClick();
    };
    var onKeyDown = function(e){
      if (e.keyCode == 37) {
        onBack();
      }
      if (e.keyCode == 39) {
        onForward();
      }
    };

    var backElement = document.createElement('div');
    var forwardElement = document.createElement('div');
    backElement.innerText = '<';
    forwardElement.innerText = '>';
    backElement.addEventListener('click', onBack);
    forwardElement.addEventListener('click', onForward);
    document.addEventListener('keydown', onKeyDown);

    arrowControlElement.appendChild(backElement);
    arrowControlElement.appendChild(forwardElement);
    frameControlElement.appendChild(arrowControlElement);
  };

  addFrameControlElement(opts.canvasElement);

  return {
    loadActions: loadActions,
    setActiveDot: setActiveDot
  };
}
