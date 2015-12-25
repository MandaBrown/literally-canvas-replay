var StudentDrawing = require('./student_drawing.js');

module.exports = Indicators;

function Indicators(opts) {
  var indicators = [
    new StudentDrawing()
  ];

  var addIndicatorElements = function(canvasElement) {
    indicators.forEach(function(indicator){
      indicator.addElement(canvasElement)
    });
  };

  var clear = function() {
    indicators.forEach(function(indicator){
      indicator.clear()
    });
  };

  var runPending = function() {
    indicators.forEach(function(indicator){
      indicator.runPending()
    });
  };

  var findByName = function(indicatorName) {
    filtered = indicators.filter(function(indicator){
      return indicator.name === indicatorName;
    })
    if (filtered == null) return;
    return filtered[0];
  };

  var startReplay = function() {
    clear();
  };

  var endReplay = function() {
    runPending();
  };

  addIndicatorElements(opts.canvasElement);

  return {
    findByName: findByName,
    startReplay: startReplay,
    endReplay: endReplay
  };
}
