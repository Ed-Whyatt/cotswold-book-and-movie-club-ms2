/* jshint esversion: 11, jquery: true */

// display movieData in to a html document below the search bar.
function movieInformationHTML(movieData) {
    if (movieData.length === 0) {
        $("#loader").html(`<div><h2> No movies!</h2></div>`)
    } else {
        console.log(movieData);
        // Items to be displayed in display movie function
        title = movieData.Title;
        poster = movieData.Poster;
        plot = movieData.Plot;
        imdbRating = movieData.imdbRating;
        director = movieData.Director;
        genre = movieData.Genre;
        viewingRating = movieData.Rated;
        resleased = movieData.Released;

        // Append results to a div to display results and pass to dispplay movie.
        $("#movie-data").append(`<div class="col-lg-6">` + displayMovie(title, poster, plot, imdbRating, director, genre, viewingRating, resleased ) + `</div>`);
    }
};

// function to fetch the movie information from the search box in the movie search page
function fetchMovieInformation() {

    // define contence of the serach value

    let search = $("#movie").val();
    $("#loader").html("");

// if the search box is empty display message under search bar
    if (!search) {
        $("#loader").html(`<h2 class="search-message text-center">
        Pease Search For A Movie!!</h2>`);
        return;
    }

     // loader image while searching for a movie shown under search bar from https://icons8.com/preloaders/en/search/
    $("#loader").html(
            `<div id="book-loader">
                    <img src="assets/loader-image/loader.gif" class="img-fluid" alt="loading..." />
                    </div>`

        ),// gets movie data informaton from Omdbapi.com
        $.getJSON("https://www.omdbapi.com/?", {

            // apikey function genrated using https://obfuscator.io/
            apikey: apiKey(),
            s: search
        }, function (data) {
            // filter out undefined data
            if (data.Search !== undefined) {
                $.each(data.Search, function (index, value) {
                    if (index < 4) {

                        // search for imdb information from Omdbapi.com
                        $.getJSON("https://www.omdbapi.com/?", {
                            apikey: apiKey(),
                                i: value.imdbID
                            },
                            function (movieData) {

                                // pass movie data to MovieInformationHTML function
                                (movieInformationHTML(movieData));
                                
                            },// if an error occurs then show error response under search bar
                            function error(errorResponse) {
                                if (errorResponse.status === 404) {
                                    $("#loader").html(
                                        `<h2 class="search-message text-center">No Movie found ${search}</h2>`);
                                } else {
                                    console.log(errorResponse);
                                    $("#loader").html(
                                        `<h2 class"search-message text-center">Error: ${errorResponse.responseJSON.message}</h2>`);
                                }
                            })
                    }
                });
            }
        });
};

// function to get the html document ready for the app to start
$(document).ready(fetchMovieInformation);