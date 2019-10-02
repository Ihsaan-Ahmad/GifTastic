$(document).ready(function() {
  /*global variables
------------------------------------------------------*/

  var $input = $("#input");
  var $submit = $("#submit");
  var $imgBody = $("#img-body");
  var apiKey = "5TQIfDl6GAYoR6ZkWZa5yZYpJ8LHTeGC";

  //Get value when user presses submit

  $submit.on("click", function(event) {
    event.preventDefault();
    $imgBody.empty();
    var inputVal = $input.val();
    getGifTastic(inputVal);
  });

  //Make a request to the giphy api witht he input value

  function getGifTastic(inputVal) {
    $.get(
      "http://api.giphy.com/v1/gifs/search?q=" +
        inputVal +
        "&api_key=" +
        apiKey +
        "&limit=5%22"
    ).done(function(data) {
      for (var i = 0; i < 5; i++) {
        var gifImg = data.data[i].images.downsized.url;
        createBox(gifImg);
      }
    });
  }

  function createBox(gifImg) {
    var $newImg = $("<img>");
    $newImg.attr("src", gifImg);
    $newImg.addClass("img-box");
    $imgBody.append($newImg);
  }
});
