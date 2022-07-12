/* jshint esversion: 11, jquery: true */

// Fetch the movie search information in the book search bar and search the api for the book.
function fetchBookInformation(event) {

    // Google book api url from https://developers.google.com/books/docs/v1/using#PerformingSearch 
    let bookUrl = "https://www.googleapis.com/books/v1/volumes?q="

    // Define contence of the serach value'
    let search = $("#book").val();
    $("#book-data").html("");

    // If the search box is empty display message under search bar.
    if (!search) {
        $("#loader").html(`<h2 class="search-message text-center">
        Pease Search For A Movie!!</h2>`)
        return;
    }

     // loader image gif while searching for a movie shown under search bar from https://icons8.com/preloaders/en/search/ 
    $("#loader").html(
            `<div id="loader">
                    <img src="assets/loader-image/loader.gif" alt="loading..." />
                    </div>`
        ),// Gets movie information from google books url.
        $.getJSON(bookUrl + search,
            function (bookData) {
                // (displayBookResults(bookData))
                console.log(bookData)
            },// if an error occurs then show error response under search bar
            function error(errorResponse) {
                if (errorResponse.status === 404) {
                    $("#loader").html(
                        `<h2 class="search-message text-center">No Book found ${search}</h2>`
                    );
                } else {
                    console.log(errorResponse);
                    $("#loader").html(
                        `<h2 class"search-message text-center">Error: ${errorResponse.reponseJSON.message}</h2>`
                    )
                }
            }
        )
};
// function to get the html document ready for the app to start.
$(document).ready(fetchBookInformation);