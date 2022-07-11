/* jshint esversion: 11, jquery: true */

// display movieData in to a html document below the search bar
function movieInformationHTML(movieData) {
    if (movieData.length === 0) {
        $("#movie-data").html(`<div><h2> No movies!</h2></div>`)
    } else {
        let displayResults = "";
        console.log(movieData)
        displayResults += ` 
                    <div class="col movie-display-container">
                    <div class="movie-display-box">
                    <h2 class="text-center">${movieData.Title}</h2>
                    <h3 class="text-center movie-display-plot">Plot: ${movieData.Plot}</h3>
                    <img src="${movieData.Poster}" alt="movie poster" placeholder="#">
                    <h3 class="text-center">IMDB Rating: ${movieData.imdbRating}</h3>
                    <h3 class="text-center">Director: ${movieData.Director}</h3>
                    <h3 class="text-center">Genre: ${movieData.Genre}</h3>
                    <h3 class="text-center">Viewing Rating: ${movieData.Rated}</h3>
                    <h4 class="text-center">Date Released: ${movieData.Released}</h3>
                    </div>
                    </div>
                    `
            $("#movie-data").html(displayResults)
            console.log(displayResults)
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

     // loader image while searching for a movie shown under search bar
    $("#loader").html(
            `<div id="book-loader">
                    <img src="assets/loader-image/loader.gif" alt="loading..." />
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
                    if (index < 2) {

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