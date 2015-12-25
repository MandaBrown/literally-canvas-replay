module.exports = ShinyTransition;

function ShinyTransition(element) {
  var changeClass = function(newClass) {
    var oldClass = element.className.replace('transitioning ', '');
    if (newClass == oldClass) return;

    if (oldClass == '') {
      element.className = newClass;
      return;
    }

    var onTransitionEnd = function() {
      element.className = newClass;
    };
    element.addEventListener('transitionend', onTransitionEnd);
    element.className = 'transitioning ' + newClass;
  };

  return {
    changeClass: changeClass
  };
}
