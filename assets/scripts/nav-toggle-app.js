/* jshint esversion: 11, jquery: true */
// function in html for when navgation button is clicked
function buttonClick() {
    let navList = document.getElementById("nav-list").innerHTML;
    let emptyList = document.getElementById("nav-list").innerHTML = "";
    console.log(navList)
    if (navList === "") {
        loadList ();
    } else {
        return emptyList;
    }


};
