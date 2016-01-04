module.exports = SetBoundaries;

function SetBoundaries(canvas){
  var name = 'setBoundaries';
  var action = function(boundaries) {
    var clientDimensions = {
      width: canvas.containerEl.clientWidth,
      height: canvas.containerEl.clientHeight
    }

    var widthScale = 1;
    var heightScale = 1;

    if (boundaries.width - clientDimensions.width > 0) {
      widthScale = clientDimensions.width / boundaries.width;
    }
    if (boundaries.height - clientDimensions.height > 0) {
      heightScale = clientDimensions.height / boundaries.height;
    }

    canvas.setZoom(Math.min(widthScale, heightScale));
  };

  return {
    name: name,
    action: action
  };
}
