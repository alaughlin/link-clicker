$(document).ready(function () {
  $.get("../sentences.txt", function (data) {
    var lines = data.split("\n");
    _.each(lines, function (line) {
      $('#sentences').append('<li><a href="#" class="sentence-link">' + line + '</a></li>');
    });
  });

  $('#sentences').on('click', '.sentence-link', function (event) {
    event.preventDefault();
    var sentence = $(event.currentTarget).html()
    $.ajax({
      url: "/",
      success: function () {
        $('#sentence-display').html('<p>' + sentence + '</p>');
      }
    });
  });
});