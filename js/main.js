$(document).ready(function() {
  var generateMove = function(){
    $('#movedisplay').text("new move was generated");
    var list = $('#movelist li').toArray();
    var randomnum = Math.floor(Math.random()*list.length) + 1;
    var randomitem = list[randomnum];
    var x = $("#movelist li:nth-child(" + randomnum + ")");
    $('#movedisplay').text(x.first().text());
  }; 


  $('#suggestbtn').click(function() { generateMove(); } );
  $('#movelisthdr').click(function() { $('#movelist').toggle(); } );
  window.setInterval(function() {
    generateMove();
  }, 1000);

  generateMove();
});
