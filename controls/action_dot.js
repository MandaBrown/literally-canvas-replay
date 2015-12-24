module.exports = ActionDot;

function ActionDot(actionIndex, onClick){
  var el = document.createElement('div');
  var actionIndex = actionIndex;

  var onElClick = function() {
    onClick(actionIndex);
  };

  el.className = 'action-dot';
  el.addEventListener('click', onElClick);

  return {
    el: el
  };
}
