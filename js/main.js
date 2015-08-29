
var drawings = ['test', 'drip', 'glasses', 'mustache', 'menu-one', 'menu-two', 'menu-three', 'menu-four', 'menu-five', 'menu-six'];

var waypoint = new Waypoint({
  element: document.getElementById('start'),
  handler: function(direction) {
  	console.log("test");
  	for(var i=0; i<drawings.length; i++) {
    var next = document.getElementById(drawings[i]);
next.setAttribute("class", drawings[i]);
}
  },
  offset: '80%'
});

