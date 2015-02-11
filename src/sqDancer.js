var SwingDancer = function(top, left, timeBetweenSteps){
  this.photos = ["swingDance.gif", "swingDance-reversed.gif", "dancers-silhouette.jpeg"];
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.attr("class", "sqDancer");
  this.$image = "<img class='swing
DancerImg' src='swingDance.gif'/>";
  this.$node.prepend(this.$image);
};
SwingDancer.prototype = Object.create(Dancer.prototype);
SwingDancer.prototype.constructor = SwingDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
SwingDancer.prototype.oldStep = Dancer.prototype.step;

SwingDancer.prototype.step = function(){

  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and

  var randomPhoto = this.photos[Math.floor(Math.random() * this.photos.length)];
  this.$node.find("img").attr("src", randomPhoto);
  //this.$node.toggle();
  //this.$node
};
