
var movies = ["Power", "The Wire", "Black Panther", "Gotti", "The Godfather", "Scarface", "Space Jam", "Shottas",];
var staticURL = [];
var animatedURL = [];

function render() {
	$("#buttonArea").empty();
	for (var i = 0; i < movies.length; i++) {
		var newButton = $("<button>");
		newButton.text(movies[i]);
		newButton.attr("data-name", movies[i]);
		newButton.addClass("show");
		$("#buttonArea").append(newButton);
	};

	$(".show").click(function() {

		animatedURL = [];
		staticURL = [];

		$("#gifArea").empty()
		var replace = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + replace + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({url: queryURL, method: "GET"}).done(function(gif) {

			console.log(gif);
			console.log(queryURL)
			for (var i = 0; i < 10; i++) {

				animatedURL.push(gif.data[i].images.fixed_height.url);
				staticURL.push(gif.data[i].images.fixed_height_still.url);

				var newDiv = $("<div>");
				newDiv.addClass("gifDiv")

				var p = $("<p>");
				p.text(gif.data[i].rating);

				if (gif.data[i].rating == "") {
					p.text("n/a")
				};

				var newGif = $("<img>");

				newGif.attr("data-number", i)
				newGif.attr("src", gif.data[i].images.fixed_height_still.url);

				newDiv.append(p);
				newDiv.append(newGif);

				$("#gifArea").append(newDiv);
				newGif.click(function() {
					if ( $(this).attr("src") == staticURL[$(this).attr("data-number")] ) {
						$(this).attr("src", animatedURL[$(this).attr("data-number")])
					} else {
						$(this).attr("src", staticURL[$(this).attr("data-number")]);
					};
				});

			};

		});

	});

};


render();
$("#addShow").click(function() {
	var addedButton = $("#inputBox").val();
	$("#inputBox").val(null);
	movies.push(addedButton);
	render();
});
