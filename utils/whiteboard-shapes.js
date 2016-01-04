var LC = require('../vendor/literallycanvas-core.min.js');

var graphPaper = function(opts) {
  opts = opts || {};
  var strokeWidth = 1;
  var spacing = 8;
  var min = 0;
  var max = opts.maxWidth || 1000;
  var thinStrokeColor = 'hsla(189, 66%, 46%, 0.1)';
  var thickStrokeColor = 'hsla(189, 66%, 46%, 0.3)';
  var thickLineEvery = 5;
  var lines = [];
  var s;

  for (i = min; i < max; i+=spacing) {
    if (((i / spacing) % thickLineEvery) == 0) {
      s = thickStrokeColor;
    } else {
      s = thinStrokeColor;
    }

    lines.push(LC.createShape('Line', {
      x1: min, y1: i, x2: max, y2: i,
      color: s, strokeWidth: strokeWidth
    }));
    lines.push(LC.createShape('Line', {
      x1: i, y1: min, x2: i, y2: max,
      color: s, strokeWidth: strokeWidth
    }));
  }

  return lines;
};

module.exports = {
  graphPaper: graphPaper
};
