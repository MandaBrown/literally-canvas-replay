module.exports = Clear;

function Clear(canvas){
  var name = 'clear';
  var action = function(message) {
    canvas.clear();
  };

  return {
    name: name,
    action: action
  };
}
