module.exports = ActionDot;

function ActionDot(action, actionIndex, metaInfoElement, onClick){
  var el = document.createElement('div');
  var actionIndex = actionIndex;
  var className = 'action-dot';
  var activeClassName = 'active';
  var inactiveClassName = 'inactive';

  var displayNameEl = document.createElement('div');
  displayNameEl.className = 'display-name';
  displayNameEl.innerText = action.displayName;

  var sentAtEl = document.createElement('div');
  sentAtEl.className = 'sent-at';
  sentAtEl.innerText = action.sentAt;

  var actionEl = document.createElement('div');
  actionEl.className = 'wb-action';
  actionEl.innerText = action.message.action;

  var onElClick = function() {
    onClick(actionIndex);
  };

  var setMetaInfo = function() {
    metaInfoElement.innerHTML =
      displayNameEl.outerHTML +
      sentAtEl.outerHTML +
      actionEl.outerHTML;
  };

  var setActiveState = function(active) {
    var dotStateClass;
    if (active) {
      setMetaInfo();
      dotStateClass = activeClassName;
    } else {
      dotStateClass = inactiveClassName;
    }

    el.className = className + ' ' + dotStateClass;
  };

  el.addEventListener('click', onElClick);
  setActiveState(false);

  return {
    el: el,
    triggerClick: onElClick,
    actionIndex: actionIndex,
    setActiveState: setActiveState
  };
}
