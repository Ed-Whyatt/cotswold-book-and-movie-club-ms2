/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../nav-toggle-app");
// loads html contence from toggle_app_test.html to mock html page locally for test purposes
 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("toggle_app_test.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
