/* jshint esversion: 11, jquery: true */

// function in html for when navgation button is clicked
function buttonClick() {
    let navList = document.getElementById("nav-list").innerHTML;
    let emptyList = document.getElementById("nav-list").innerHTML = "";
    if (navList === "") {
        loadList ();
    } else {
        return emptyList;
    }


}
// function to load navgation list
function loadList () {
    let htmlList = (`<div class="toggle-main">
    <ul class="row d-block">
        <li class="col home-menu-color toggle-item hvr-curl-top-left">
            <a href="index.html" aria-label="Go to our home page"><i
                    class="fa fa-home" aria-hidden="true"></i></i><span>Home</span></a>
        </li>
        <li class="col movie-menu-color toggle-item hvr-curl-top-left">
            <a href="movie-search.html" aria-label="Go to movie search page"><i
                    class="fa fa-film" aria-hidden="true"></i><span>Search for a Movie</span></a>
        </li>
        <li class="col book-menu-color toggle-item hvr-curl-top-left">
            <a href="book-search.html" aria-label="Go to book search page"><i
                    class="fa fa-book" aria-hidden="true"></i><span>Search for a Book</span></a>
        </li>
        <li class="col contact-menu-color toggle-item hvr-curl-top-left">
            <a href="contact-us.html" aria-label="Go to contact us page"><i
                    class="fa fa-envelope" aria-hidden="true"></i><span>Contact Us</span></a>
        </li>
        <li class="col events-menu-color toggle-item hvr-curl-top-left">
            <a href="index.html#events" aria-label="Go to events section"><i
                    class="fa fa-calendar" aria-hidden="true"></i><span>Events</span></a>
        </li>
    </ul>
</div>`);
    let list = document.getElementById("nav-list").innerHTML = htmlList;
    return list;
}