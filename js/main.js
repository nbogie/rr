$(document).ready(function() {
  var generateMove = function(){
    $('#movedisplay').text("new move was generated");
  }; 
  $('#suggestbtn').click(function() { generateMove(); } );
});
