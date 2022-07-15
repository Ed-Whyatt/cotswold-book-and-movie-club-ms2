/* jshint esversion: 11, jquery: true */

// display movieData in to a html document below the search bar.
function movieInformationHTML(movieData) {
    if (movieData.length === 0) {
        $("#loader").html(`<div><h2> No movies!</h2></div>`);
    } else {
        // Items to be displayed in display movie function
        let moviePlaceHolder = "assets/images/movie-paceholder.png"
        let title = movieData.Title;
        let poster = movieData.Poster === "N/A" ? moviePlaceHolder : movieData.Poster;
        let plot = movieData.Plot;
        let imdb = movieData.imdbRating;
        let director = movieData.Director;
        let genre = movieData.Genre;
        let viewingRating = movieData.Rated;
        let resleased = movieData.Released;

        // Append results to a div to display results and pass to dispplay movie.
        $("#movie-data").append(`<div class="col-md-6 col-lg-4">` + displayMovie(title, poster, plot, imdb, director, genre, viewingRating, resleased ) + `</div>`);

        // Display message when a Movie is Found!!
        $("#loader").html(`<h2 class="search-message text-center">Movie Found!!!</h2>`);
    }
}

// Display html results inside apended div
function displayMovie(title, poster, plot, imdb, director, genre, viewingRating, resleased) {
    let results = "";
    results += ` 
<div class="movie-display-container">
    <div class="movie-display-box">
        <div class="row">
            <div class="col">
                <h2 class="text-center movie-title uppercase">${title}</h2>
            </div>
        </div>
            <div class="col">
                <img src="${poster}" class="rounded mx-auto d-block movie-image" alt="${title}">
            </div>
                <div class="movie-info">
                    <div class="col">
                        <h3><strong>Director:</strong><br>${director}</h3>
                        <h3><strong>Genre:</strong><br>${genre}</h3>
                        <h3><strong>IMDB Rating:</strong> ${imdb}</h3>
                        <h3><strong>Viewing Rating:</strong> ${viewingRating}</h3>
                        <h3><strong>Date Released:</strong><br>${resleased}</h3>
                        <h3><strong>Plot:</strong><h3>
                        <p>${plot}</p>
                    </div>
                </div>
    </div>
</div> `;
    return results;
}

// function to fetch the movie information from the search box in the movie search page
function fetchMovieInformation() {
    // Empty div elements to start
    $("#loader").html("");
    $("#movie").html("");

    // define contence of the serach value
    let search = $("#movie").val();
    

// if the search box is empty display message under search bar
    if (!search) {
        $("#loader").html(`<h2 class="search-message text-center">
        Pease Search For A Movie!!</h2>`)
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
                            });
                    }
                });
            }
        });
}

// function to get the html document ready for the app to start
$(document).ready(fetchMovieInformation);