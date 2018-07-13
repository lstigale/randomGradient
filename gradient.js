function randomColor() {
  var o = Math.floor( Math.random() * 360 );
  var x = Math.floor( Math.random() * 256 );
  var y = Math.floor( Math.random() * 256 );
  var z = Math.floor( Math.random() * 256 );
  var x2 = Math.floor( Math.random() * 256 );
  var y2 = Math.floor( Math.random() * 256 );
  var z2 = Math.floor( Math.random() * 256 );
  console.log(o, x,y,z, x2,y2,z2);
document.body.style.background = "linear-gradient(" + o + "deg, rgb("+ x + ", " + y + ", " + z + "), rgb("+ x2 + ", " + y2 + ", " + z2 + "))";
document.getElementById('colorNum').innerHTML = "linear-gradient(" + o + "deg, rgb(" + x + ", " + y + ", " + z + "), rgb("+ x2 + ", " + y2 + ", " + z2 + "));";
}
