function randomGradient() {
  var deg = Math.floor( Math.random() * 360 );
  var r = Math.floor( Math.random() * 256 );
  var g = Math.floor( Math.random() * 256 );
  var b = Math.floor( Math.random() * 256 );
  var r2 = Math.floor( Math.random() * 256 );
  var g2 = Math.floor( Math.random() * 256 );
  var b2 = Math.floor( Math.random() * 256 );
  console.log(deg, r,g,b, r2,g2,b2);
document.body.style.background = "linear-gradient(" + deg + "deg, rgb("+ r + ", " + g + ", " + b + "), rgb("+ r2 + ", " + g2 + ", " + b2 + "))";
document.getElementById('colorNum').innerHTML = "linear-gradient(" + deg + "deg, rgb(" + r + ", " + g + ", " + b + "), rgb("+ r2 + ", " + g2 + ", " + b2 + "));";
}
