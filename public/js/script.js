require("../../routes/style-api.js");
require("../../routes/artwork-api");

$(function() {
    $(".collection").on("click", function(event) {
        var styleName = $(this).data("target");
        window.location.href= ""
        console.log(styleName);
        // event.preventDefault();
        var Style = {
            StyleName : styleName
        }

        $.ajax("/api/style/" + styleName, {
            type: "GET",
            data: Style
        });
        
    });

    $(".artist").on("click", function(event) {
        var artistName= $(this).data("name");

        var Artist = {
          artistname: artistName
        }

        $.ajax("/api/artwork/" + artistName, {
            type: "GET",
            data: Artist
        });
    })









});