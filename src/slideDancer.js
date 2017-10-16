var makeZoomDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("zoom");
};
makeZoomDancer.prototype = Object.create(makeDancer.prototype);
makeZoomDancer.prototype.constructor = makeZoomDancer;
makeZoomDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

var makeSlideDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("slide");
};
makeSlideDancer.prototype = Object.create(makeDancer.prototype);
makeSlideDancer.prototype.constructor = makeSlideDancer;
makeSlideDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.$node.css("left") > $(window).width()) {
    this.$node.css("left", "-10px");
  }
  this.$node.css("left", "+=10");
};


var makeFallingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("slide");
};
makeFallingDancer.prototype = Object.create(makeDancer.prototype);
makeFallingDancer.prototype.constructor = makeFallingDancer;
makeFallingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css("top", "+=75");
};


var makeBouncingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bounce");
  this.down = 1;
};
makeBouncingDancer.prototype = Object.create(makeDancer.prototype);
makeBouncingDancer.prototype.constructor = makeBouncingDancer;
makeBouncingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.down < 0) {
    this.$node.css("top", "-=75");
  } else {
    this.$node.css("top", "+=75");
  }
  this.down *= -1;
};