$(document).ready(function() {
  window.dancers = [];
  window.dancerPositions = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.dancerPositions.push(dancer.$node.position());
    dancer.idx = window.dancerPositions.length - 1;
  });

  $('#lineUpButton').on('click', function(event) {
    window.dancers.forEach(dancer => dancer.lineUp());
  });

  $('body').on('mouseover', '.fly', function(event) {
    // $(this).css("animation-play-state", "paused");
    $(this).css("animation-name", "buzzStill");
    $(this).css("animation-duration", "100ms");
  });

  $('body').on('mouseout', '.fly', function(event) {
    // $(this).css("animation-play-state", "running");
    $(this).css("animation-name", "buzz");
    $(this).css("animation-duration", "1.5s");
  });

  $('body').on('mouseover', '.rotator', function(event) {
    $(this).css("animation-play-state", "paused");
  });

  $('body').on('mouseout', '.rotator', function(event) {
    $(this).css("animation-play-state", "running");
  });

  var getDistance = function(dancer1, dancer2) {
    //console.log(dancerPositions[dancer1.idx]);
    var horizSep = parseInt(dancer1.$node.css("left")) - parseInt(dancer2.$node.css("left"));
    var vertSep = parseInt(dancer1.$node.css("top")) - parseInt(dancer2.$node.css("top"));
    console.log(Math.sqrt(Math.pow(horizSep, 2) + Math.pow(vertSep, 2)));
    return Math.sqrt(Math.pow(horizSep, 2) + Math.pow(vertSep, 2));
  };

  var checkAllDistances = function() {
    for (var i = 0; i < window.dancers.length; i++) {
      for (var j = 0; j < window.dancers.length; j++) {
        if (i !== j) {
          var dancer1 = window.dancers[i];
          var dancer2 = window.dancers[j];
          if (getDistance(dancer1, dancer2) < 100) {
            console.log('COLLISION!!!!!11111111');
            
            dancer1.$node.css("top", "-=100");
            setTimeout(function(){
              dancer1.$node.css("animation-name", "slide");
            }, 1000);
  
          }
        }
      }
    }
  };
  
  setInterval(checkAllDistances, 10);
  

});

