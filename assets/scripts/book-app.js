/* jshint esversion: 11, jquery: true */

// Fetch the movie search information in the book search bar and search the api for the book
function fetchBookInformation(event) {

    // Google book api url from https://developers.google.com/books/docs/v1/using#PerformingSearch 
    let bookUrl = "https://www.googleapis.com/books/v1/volumes?q="

    // define contence of the serach value
    let search = $("#book").val();
    $("#book-data").html("");

    // if the search box is empty display message under search bar
    if (!search) {
        $("#book-data").html(`<h2 class="search-message text-center">
        Pease Search For A Movie!!</h2>`)
        return;
    }

     // loader image gif while searching for a movie shown under search bar from https://icons8.com/preloaders/en/search/ 
    $("#book-data").html(
            `<div id="loader">
                    <img src="assets/loader-image/loader.gif" alt="loading..." />
                    </div>`
        )
};
// function to get the html document ready for the app to start.
$(document).ready(fetchBookInformation);