var makeFly = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top * 0.5, left, timeBetweenSteps);
  this.$node.addClass("fly");
  this.linedUp = false;
};
makeFly.prototype = Object.create(makeDancer.prototype);
makeFly.prototype.constructor = makeFly;
makeFly.prototype.step = function() {
  //makeDancer.prototype.step.call(this);
  //this.$node.css("top", "-=10");
};
makeFly.prototype.lineUp = function() {
  //this.$node.addClass("center");
  if (!this.linedUp) {
    this.setPosition(600, this.$node.position.bottom);
    this.linedUp = true;
  } else {
    var oldPosition = window.dancerPositions[this.idx];
    this.setPosition(oldPosition.top, oldPosition.left);
    this.linedUp = false;
  }
};

var makeAllen = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, $("body").height() - 160, left, timeBetweenSteps);
  this.$node.addClass("allen");
};
makeAllen.prototype = Object.create(makeDancer.prototype);
makeAllen.prototype.constructor = makeAllen;
makeAllen.prototype.step = function() {
  //makeDancer.prototype.step.call(this);
  //this.$node.css("top", "-=10");
};

var makeZoomDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top * 0.5, left, timeBetweenSteps);
  this.$node.addClass("zoom");
};
makeZoomDancer.prototype = Object.create(makeDancer.prototype);
makeZoomDancer.prototype.constructor = makeZoomDancer;
makeZoomDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
makeZoomDancer.prototype.lineUp = function() {
  //this.$node.addClass("center");
  if (!this.linedUp) {
    this.setPosition(100, this.$node.position.bottom);
    this.linedUp = true;
  } else {
    var oldPosition = window.dancerPositions[this.idx];
    this.setPosition(oldPosition.top, oldPosition.left);
    this.linedUp = false;
  }
};

var makeSlideDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, $(window).height() * 0.7, left, timeBetweenSteps);
  this.$node.addClass("slide");
};
makeSlideDancer.prototype = Object.create(makeDancer.prototype);
makeSlideDancer.prototype.constructor = makeSlideDancer;
makeSlideDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  let nLeft = this.$node.css("left");
  if (Number(nLeft.slice(0, nLeft.length - 2)) > Number($(window).width())) {
    this.$node.css("left", "-20px");
  }
  this.$node.css("left", "+=10");
};


var makeFallingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, $(window).height() * 0.01, left, timeBetweenSteps);
  // this.$node.addClass("slide");
};
makeFallingDancer.prototype = Object.create(makeDancer.prototype);
makeFallingDancer.prototype.constructor = makeFallingDancer;
makeFallingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css("top", "+=75");
};


var makeBouncingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = 
  $('<div class="whole dancer">'
    + '<div class="rotator">'
    + '<div class="inner"></div>'
      + '<div class="inner"></div>'
      + '<div class="inner"></div>'
      + '<div class="inner"></div>'
      + '<div class="inner"></div>'
      + '<div class="rotator outer"></div>'
    + '</div>'
  + '</div>');

  this.$node.addClass("bounce");
  this.down = 1;
};
makeBouncingDancer.prototype = Object.create(makeDancer.prototype);
makeBouncingDancer.prototype.constructor = makeBouncingDancer;
makeBouncingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.down *= -1;
};

