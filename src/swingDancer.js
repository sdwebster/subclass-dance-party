var SwingDancer = function(top, left, timeBetweenSteps){
  this.photos = ["swingDance.gif", "swingDance-reversed.gif", "dancers-silhouette.jpeg"];
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.addClass("swDancer");
  this.$image = "<img class='swingDancerImg' src='swingDance.gif'/>";
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
  //console.log(dancers);


  // find the closest other dancer and regard them as a partner
  // var partner;
  // var partnerDist = 1000000;
  // for (var i=0, l= dancers.length; i<l; i++){
  //   var friend = dancers[i];
  //   var dist = Math.sqrt(Math.pow((this.top - friend.top), 2) + Math.pow((this.left - friend.left)));
  //   if (dist < partnerDist && dist > .1){
  //     partner = friend;
  //     partnerDist = dist;
  //   }
  // }
  // console.log('my top is:', this.$node.top)
  // if (partner){
  //   // var midTop = (this.top + friend.top)/2;
  //   // var midLeft = (this.left + friend.left)/2;
  //   // var angle = Math.cot((this.top - midTop)/(this.left - midLeft));
  //   // var newAngle = Math.cot + .01;
  //   // var newTop = midTop + (dist/2) *
  //   // this.$node.animate({
  //   //   top: '+=' + dVert,
  //   //   left: '+='+ dHor
  //   // })
  //   setPosition(partner.top, partner.left);
  // }



};
