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

  var myPos = this.$node.offset();
  var myTop = myPos.top;
  var myLeft = myPos.left;

  // // find the closest other dancer and regard them as a partner
  // var $partner;
  // var partnerDist = 1000000;
  // for (var i=0, l= dancers.length; i<l; i++){
  //   var $friend = dancers[i].$node;
  //   var friendPos = $friend.offset();
  //   var dist = Math.sqrt(Math.pow((myTop - friendPos.top), 2) + Math.pow((myLeft - friendPos.left),2));
  //   if ( myTop !==0 &&
  //        friendPos.top !== 0 &&
  //        dist < partnerDist &&
  //        dist > 0.1){
  //     $partner = $friend;
  //     partnerDist = dist;
  //   }
  // }
  // console.log('starting at: ', myTop, ', ', myLeft);

  // // if you've found a partner, rotate around them!
  // if ($partner){
  //   var pTop = $partner.offset().top;
  //   var pLeft = $partner.offset().left;
  //   console.log('my partner: ', pTop, ", ", pLeft;



  //   var radius = partnerDist / 2;
  //   // console.log('radius:', radius);
  // //  var pTop =
  //   var midTop = (myTop + $partner.offset().top)/2;
  //   var midLeft = (myLeft + $partner.offset().left)/2;
  //   console.log('the midpoint is: ', midTop, ', ', midLeft);
  //   //debugger;
  //   var x = myTop - midTop;
  //   var y = myLeft - midLeft;
  //   var px = pTop - midTop;
  //   var py = pLeft - midLeft;
  //   var tangent =  x/y;
  //   console.log('tangent:', tangent);
  //   var angle = Math.atan(tangent);
  //   console.log('angle: ', angle);
  //   var newAngle = angle + .01;
  //   console.log('newAngle: ', newAngle);
  //   var newX = ((radius) * Math.cos(newAngle));
  //   var newY = ((radius) * Math.sin(newAngle));
  //   if  then midTop = midTop + ;
  //   var newLeft = midLeft + ;
  //   // var newRadius = Math.sqrt(Math.pow(newTop-midTop,2) + Math.pow(newLeft-midLeft,2));
  //   // console.log(newRadius);
  //   console.log('moving to', newTop, ', ', newLeft);
  //   this.setPosition(newTop, newLeft);
  // }
};
