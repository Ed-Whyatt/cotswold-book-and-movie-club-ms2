/* jshint esversion: 11*/
/**
 * @jest-environment jsdom
 */
 const buttonClick = require("../nav-toggle-app2");
// loads html contence from toggle_app_test.html to mock html page locally for test purposes
 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("toggle_app_test.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
// Dom test to check the the elements and function
describe("DOM tests", () => {
    // test the click function works
    test("Expects content to change", () => {
        buttonClick();
        document.getElementById("nav-list").click();
        expect(document.getElementById("nav-list").innerHTML).toEqual("You Clicked");
    });
    // test the number of div elements on page
    test("div should exist", () => {
        expect(document.getElementsByTagName("div").length).toBe(2);
    });
});
