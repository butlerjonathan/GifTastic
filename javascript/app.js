$(function(){
    console.log("Page Loaded")
})

var searchArray=["dog","cat","bird"];

function populateButton(searchArray,classToAdd,areaToAdd){
    $(areaToAdd).empty();
    for(var i=0;i<searchArray.length;i++){
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type",searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAdd).append(a);
    }
}

$(document).on("click", ".searchButton", function(){
    $("#search").empty();
    var type = $(this).data("type")
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+type+"&api_key=dc6zaTOxFJmz"
    $.ajax({url:queryURL,method:"GET"})
     .done(function(reponse){
        for(var i=0;i<reponse.data.length;i++){
            var searchDiv = $('<div class="search-item">');
            var rating  = reponse.data[i].rating;
            var p = $('<p>').text('Rating: '=rating);
            var animated = reponse.data[i].images.fixed_height_still.url;
            var dtill = reponse.data[i].images.fixed_height_still.url;
            var image = $('<img>');
            image.attr('src',still);
            image.attr('data-still',still);
            image.attr('data-animal',animated);
            image.attr('data-state','still');
            image.addClass('data-state','still');
            searchDiv.append(p);
            searchDiv.append(image);
            $('')
        }        
     })
})

$('#addSearch').on('click',function(){
    var newSearch = $('input').eq(0).val();
    searchArray.push(newSearch,'searchButton','#buttonsArea');
    return false;
})