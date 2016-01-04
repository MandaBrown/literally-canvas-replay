var LC = require('../vendor/literallycanvas-core.min.js');

module.exports = CanvasUtils;

function CanvasUtils(canvas) {
  var selectedShape;
  var canvas = canvas;
  var lastShapeDuplicatedId = null;
  var duplicateOffset = 0;
  var offsetIncrement = 20;

  var duplicateShape = function(shape) {
    if (shape.id != lastShapeDuplicatedId) resetOffset();
    duplicateOffset = duplicateOffset + offsetIncrement;

    var newShapeJson = { className: shape.className, data: shape.toJSON() };
    var newShape = LC.JSONToShape(newShapeJson);
    newShape.move({ xDiff: duplicateOffset, yDiff: duplicateOffset });

    canvas.saveShape(newShape, true, shape.id);
    lastShapeDuplicatedId = shape.id;
  };

  var deleteShape = function(shape, trigger) {
    if (trigger == null) trigger = true;
    canvas.shapes = _.reject(canvas.shapes, function(canvasShape) {
      return canvasShape.id == shape.id;
    });
    canvas.setShapesInProgress([]);
    canvas.repaintAllLayers();
    if (trigger) canvas.trigger('shapeDeleted', { shape: shape } );
    if (trigger) canvas.trigger('drawingChange');
  };

  var duplicateSelectedShape = function() {
    if (selectedShape == null) return;
    duplicateShape(selectedShape);
  };

  var deleteSelectedShape = function() {
    if (selectedShape == null) return;
    deleteShape(selectedShape);
  }

  var setSelectedShape = function(shape) {
    selectedShape = shape.selectedShape;
  };

  var resetOffset = function() {
    duplicateOffset = 0;
  };

  var onUpdateShape = function() {
    resetOffset();
  };

  canvasEvents = [
    canvas.on('updateShape', onUpdateShape)
  ];

  return {
    setSelectedShape: setSelectedShape,
    duplicateSelectedShape: duplicateSelectedShape,
    deleteSelectedShape: deleteSelectedShape,
    deleteShape: deleteShape
  };
}
