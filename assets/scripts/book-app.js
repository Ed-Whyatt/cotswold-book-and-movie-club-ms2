/* jshint esversion: 11, jquery: true */

// display bookData in to a html document below the search bar.
function displayBookResults(bookData) {
    console.log(bookData);

    // Placeholder image for when book search has no image
    let placeholder = "../images/book-search-placeholder.jpg"

    if (bookData.length === 0) {
        $("#loader").html(`<div><h2> No Books!</h2></div>`)
    } else {
        // Loop through book results and display six at a time
        for (var i = 0; i < 6; i++ ) {
            item = response.items[i];
            bookImage = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : placeHolder;
            title = item.volumeInfo.title;
            author = item.volumeInfo.authors;
            publisher = item.volumeInfo.publisher;
            bookLink = item.volumeInfo.previewLink;

            // Append results to a div to display results and pass to display book function.
            $("#book-data").append(`<div class="col-lg-6">` +
            displayBook(bookImage, title, author, publisher, bookLink)
            +`</div>`);
        }
    }
}

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
        ),
        
        // Gets movie information from google books url.
        $.getJSON(bookUrl + search,
            function (bookData) {
                
                // Pass book data to display book function
                (displayBookResults(bookData))
                console.log(bookData)
            },
            
            // If an error occurs then show error response under search bar
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