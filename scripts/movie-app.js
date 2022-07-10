/* jshint esversion: 11, jquery: true */

// function to fetch the movie information from the search box in the movie search page
function fetchMovieInformation() {

    // define contence of the serach value
    let search = $("#movie").val();
    $("movie-data").html("");

    // if the search box is empty display message
    if(!search) {
        $("#loader").html( `<h2 class="search-message text-center">
                                 Pease Search For A Movie!!</h2>`
                            );
        return;
    }
    // loader image while searching for a movie
    $("#loader").html( 
                            `<div id="book-loader">
                            <img src="assets/loader-image/loader.gif" alt="loading..." />
                            </div>`
    )
   
};



// function to get the html document ready for the app to start
$(document).ready(fetchMovieInformation);