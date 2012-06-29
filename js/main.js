$(document).ready(function() {

  var generateMove = function(){
    $('#movedisplay').text("new move was generated");
    var list = $('#movelist li').toArray();
    var randomnum = Math.floor(Math.random()*list.length) + 1;
    var randomitem = list[randomnum];
    var x = $("#movelist li:nth-child(" + randomnum + ")");
    $('#movedisplay').text(x.first().text());
  }; 

  var showAll = function() { 
    $(".landscape").show();
    $(".portrait").show();
  };

  var rotate = function() { 
    $(".landscape").toggle();
    $(".portrait").toggle();
  };

  var checkIfBlank = function(value, index, ar) {
    return ( (typeof value === 'string') && 
             !(value.replace(/^\s+|\s+$/g, '') == '')
           );
  }

  var parseTextBox = function() { 
    var t = $('#movelisttextarea').val();
    lines = t.split(/\r\n|\r|\n/);
    lines = lines.filter(checkIfBlank);
    return lines;
  };

  var populateMovesFromTextBox = function() {
    var lines = parseTextBox();

    var cList = $('#movelist')
    $("#movelist li").remove();
    $.each(lines, function(i)
    {
        var li = $('<li/>')
            .appendTo(cList);
        var aaa = $('<a/>')
            .text(lines[i])
            .appendTo(li);
    });
  };

  window.setInterval(function() {
    generateMove();
  }, 1000);

  $('#suggestbtn').click(function()  { generateMove(); } );
  $('#rotateBtn').click(function()  { rotate(); } );
  $('#movelisthdr').click(function() { $('#movelist').toggle(); } );
  $('#parseMovesBtn').click(function() { populateMovesFromTextBox(); } );

  //showAll();
  rotate();
  populateMovesFromTextBox();
  generateMove();
});
