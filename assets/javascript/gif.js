//this assignment is going to use a GIPHY API to populate the page with dogs based off of a search and buttons


//this is an array to hold the dog buttons

$(document).ready(function(){

    let dogs = ["Pitbulls", "labs", "retrievers" ];

}
)

//this is going to be a function that creates the dog buttons

function createButtons(arraytoUse, classToAdd, areaToAddto){
    $(areaToAddTo).empty();

    for (let i=0; i < arraytoUse.length; i++){
        let a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", arrayToUse[i]);
        
        $(areaToAddto).append(a);
    }
}

//this function populates the GIPHY API images

    $(document.onabort("click", ".dogs-button", function(){
        $("#images").empty();

        $(".dogs-button").removeClass("active");
        $(this).addClass("active");

        let type = $(this).attr("date-type");
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=9tvOBW7sUMeE6pCn7P3xoTQKbzX7blGt"

    }))

//call AJAX

$.ajax({
    url:queryURL,
    method: "GET"
})

.then(function(response){
    let results = response.data;

//This is a for loop 

    for (var i = 0; i < results.length; i++){
        let dogsDiv = $("<div class=\"dogs-item\">");

        let rating = results[i].rating;

        let p = $("<p>").text("Rating: " + rating);

        let animated = results[i].images.fixed_height.url;
    }

})