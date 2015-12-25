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

  var findByName = function(indicatorName) {
    filtered = indicators.filter(function(indicator){
      return indicator.name === indicatorName;
    })
    if (filtered == null) return;
    return filtered[0];
  };

  addIndicatorElements(opts.canvasElement);

  return {
    findByName: findByName,
    clear: clear
  };
}
