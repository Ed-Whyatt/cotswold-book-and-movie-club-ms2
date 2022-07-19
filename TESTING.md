# Testing

## JEST
- ### Jest - [Link](https://jestjs.io/)
1. ### Initialising Jest
#### In terminal in GitPod.io workspace type:
    npm init
#### Click enter untill you get to test command and type jest:
    test command: jest
#### Then keep clicking enter untill the end when is display yes click and  enter to install jest.
2. ### Installing Jest
#### In the terminal in GitPod.io workspace type:
     npm install ---save-dev jest@26.6.3
#### Click enter and it will install. For a more detailed exapmle go to [Jest: Documentation](https://jestjs.io/docs/getting-started).
3. ### Using Jest
### I will be useing Jest to do some tests on the navgation app only this is a key function in the use of the website in a mobile view. I fully acknowledge and understand that, in a real-world scenario, an extensive set of Jest tests would be more comprehensive.
- Testing the Dom research in using Jest [Documentation](https://jestjs.io/docs/tutorial-jquery)
   - Jest Tests done in git enviroment.
   1. Mock HTML file for testing purposes.
      ### ![text](documentation/jest-test-images/jest-html-test.png)
   2. Jest code used for testing the DOM of the button click function used in the navgation app.
   - ### nav-toggle-app.js 
     ### ![text](documentation/jest-test-images/jest-start.png)
   - ### nav.toggle.app.test.js
     ### ![text](documentation/jest-test-images/jest-test-code.png)
   4. Get Jest test results by typing npm test in the terminal while in the git enviroment.
                 
          npm test

      ### ![text](documentation/jest-test-images/jest-test.png)

## W3C Markup Validator - [Link to site](https://validator.w3.org/#validate_by_uri).
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project. The most substantial bugs that were fixed are in the bu fixed section below testing in README.md.

-   ### [W3C Markup Validator](https://validator.w3.org/#validate_by_uri)

-   ### Home page 
1. Initial test.
    ### ![text](documentation/markup-validator-images/html-test.png)
2. Test after bugs fixed.
    ### ![text](documentation/markup-validator-images/home-html-after.png)

-   ### Movie Search Page 
1. Initial test.
    ### ![text](documentation/markup-validator-images/movie-html-before.png)
2. Test after bugs fixed.
    ### ![text](documentation/markup-validator-images/movie-html-after.png)

-   ### Book Search Page
1. Initial test.
    ### ![text](documentation/markup-validator-images/book-html-before.png)
2. Test after bugs fixed.
    ### ![text](documentation/markup-validator-images/book-html-after.png)

-   ### contact Us
1. Initial test no bugs to fix after test was done.
    ### ![text](documentation/markup-validator-images/contact-html-test.png)

-   ### Toggle app test html page for testing with jest toggle_app-test.html
1. ### ![text](documentation/markup-validator-images/jest-test-html.png)

-   ### [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
2. Test after the needed bugs fixed.
    ### ![text](documentation/markup-validator-images/ws3-css-after.png)

## JSHint - [Link to site](https://jshint.com/)
JSHint  Services were used to validate every JavaScript page of the project to ensure there were no major syntax errors in the project. The most substantial bugs that were fixed are in the bu fixed section below testing in README.md.

### Book search app book-app.js
1.  Initial test.
## ![text](documentation/jshint-images/book-app-before.png)
2. Test after needed bugs fixed.
## ![text](documentation/jshint-images/book-app-after.png)

### Maps maps.js 
1.  Maps test, I decide not to change anything as most of the code is from the documentation. [link to documentation](https://developers.google.com/maps/documentation/javascript/marker-clustering).
### ![text](documentation/jshint-images/map-app-results.png)

### Movie app movie-app.js
1.  Initial test.
### ![text](documentation/jshint-images/move-search-app-before.png)
2. Test after the needed bugs fixed the api key is in a seprate app movie-app.api.js.
### ![text](documentation/jshint-images/movie-search-after.png)
3. movie-app-api.js is the function used for the app key
### ![text](documentation/jshint-images/movie-app-api.png)


### Nav toggle App nav-toggle-app.js
1.  Initial test.
### ![text](documentation/jshint-images/toggle-app-before.png)
2. Test after the needed bugs fixed in bugs fixed section below.
### ![text](documentation/jshint-images/nav-toggle-after.png)
3. Jest nav.toggle.app.test.js used to test some of the nav toggle app i have not chnged anuy because this is a jest test.
### ![text](documentation/jshint-images/nav-toggle-jest.png)

### Send Email send-email.js
### ![text](documentation/jshint-images/email-results.png)

## Google Chrome Developer Tools
Google Chrome Developer Tools has been used throughout the development of this page, To use it in Google Crome browser Right click anywhere on the screen and click inspect on the menu.

### Google Chrome Developer Tool Lighthouse results
#### Home Page
1.  Initial test.
### ![Text](documentation/crome-lighthouse-images/home-ligth-house-before.png)
2. Test after bugs fixed and genral inprovments.
### ![Text](documentation/crome-lighthouse-images/home-lighthouse-after.png)

#### Search For Movie Page
1.  Initial test.
### ![Text](documentation/crome-lighthouse-images/movie-lighthouse-before.png)
2. Test after bugs fixed and genral inprovments.
### ![Text](documentation/crome-lighthouse-images/movie-lighthouse-after.png)

#### Search for Book Page
1.  Initial test.
### ![Text](documentation/crome-lighthouse-images/book-lighthouse-before.png)
2. Test after bugs fixed and genral inprovments.
### ![Text](documentation/crome-lighthouse-images/book-lighthouse-after.png)

#### Contact Us Page
1.  Initial test.
### ![text](documentation/crome-lighthouse-images/contact-lighthouse-before.png)
2. Test after bugs fixed and genral inprovments.
### ![Text](documentation/crome-lighthouse-images/contact-us-after.png)

Some tests that lighthouse testing revealed are external and i have not changed them here are some that stand out.
1. The JQuary library shows as a medium securty risk.
### ![text](documentation/crome-lighthouse-images/lighthouse-allpages.png)
2. 
The Google Maps Street view image displays with incorrect aspect ratio.
### ![text](documentation/crome-lighthouse-images/ligthhouse-google-maps.png)

## Bugs Fixed
1. Color contrast
### The colors chosen for the Home and Search for Movie navgation button where of to low contract and have been changed.
- Before fix:
#### ![text](/documentation/bug-fix-images/home-color-before.png) ![text](/documentation/bug-fix-images/movie-before.png)
- After fix:
#### ![text](/documentation/bug-fix-images/home-after.png) ![text](/documentation/bug-fix-images/movie-after.png)
- Navgation colors after fix:
#### ![text](/documentation/bug-fix-images/nav-colors-after.png)
2. The locations in the up comming events section where flowing out of the container when viewed on an extra small screen on all events. I put the locations section in its own collum to prevent this.
- Before fix
#### ![text](/documentation/bug-fix-images/locations-code-before.png) ![text](/documentation/bug-fix-images/locations-before-fix.png)
- After fix 
#### ![text](/documentation/bug-fix-images/locations-code-after.png) ![text](/documentation/bug-fix-images/locations-after-fix.png)
3. There was a gap on the right hand side of every page that was causing the page to show an unwanted horizontal scroll bar.
- Before fix same code for all pages.
#### ![text](documentation/bug-fix-images/gap-code-before.png) ![text](documentation/bug-fix-images/gap-before.png)
- After fix same code for all pages.
#### ![text](documentation/bug-fix-images/gap-code-after.png) ![text](documentation/bug-fix-images/gap-after.png)
4. The discription in the book search results displayed was to long so i oraginally put a slice function in to reduce the size. Crome devlpoment tools showd an error, so i changed the information displayed to the book text snippet instend of the book description in the array of results from the Google Book API.
- Book search Crome devlpoment tool error in console.
#### ![text](documentation/bug-fix-images/slice-bug.png)
- Code before fix in book-app.js
#### ![text](documentation/bug-fix-images/slice-old-code.png) 
#### ![text](documentation/bug-fix-images/java-slice-code-before.png)
- Code after fix in book-app.js
#### ![text](documentation/bug-fix-images/slice-new-code-two.png) 
#### ![text](documentation/bug-fix-images/slice-new-code-one.png) 
5. Crome Dev Tool showed a readbility issue with the search bar in both the movie and book search pages. Im removed the h1 heading and used the label for the heading changes are the same for both pages.
- Crome Dev Tool Readabilty
#### ![text](documentation/bug-fix-images/form-readabilty.png)
- Before fix
#### ![text](documentation/bug-fix-images/search-code-before.png)
- After fix
#### ![text](documentation/bug-fix-images/form-code-after.png)
6. Crome Dev Tool showed type error when raeding textSnippet form the Google Book API results array. I Added some Ternary statement withing the html code to be displayed in the book-app.js, so it would have a flallback message when no results are found.
- Book search Crome devlpoment tool error in console.
#### ![text](documentation/bug-fix-images/dev-tool-book-before.png)
- Before fix
#### ![text](documentation/bug-fix-images/dev-tool-book-code-before.png)
- After fix
#### ![text](documentation/bug-fix-images/dev-tool-book-after.png)
7. Crome Dev Tool showed a Get http 404 error from the image in the movie-app.js when the OMDb Api movie poster was called so i added some Ternaty statments to the poster results for a fall back placeholder image to show.
- Book search Crome devlpoment tool error in console.
   #### ![text](documentation/bug-fix-images/dev-tool-movie-before.png)
- Before fix
   #### ![text](documentation/bug-fix-images/dev-tool-movie-code-before.png)
- After fix
   #### ![text](documentation/bug-fix-images/movie-dev-code-after.png)
8. The heading and footer took up too much realastate on the page in small devie view so i changed the html with bootstrap collums and css useing media quaries.
- Small view and css before fix
  #### ![text](documentation/bug-fix-images/header-foorter-before.png) ![text](documentation/bug-fix-images/heading-css-before.png)
- Html Changes
  #### ![text](documentation/bug-fix-images/footer-code-changed.png)
- Small view and css that media quaries will change at max width 500px.
  #### ![text](documentation/bug-fix-images/header-footer-after.png) ![text](documentation/bug-fix-images/heading-media-css.png)
  
  ### Further Testing

-   The website has been tested on such browsers as: 
    -  Google Chrome [view](documentation/browser-screenshots/crome.pngchrome.png)
    -  Microsoft Edge [view](documentation/browser-screenshots/edge.pngedge.png)
    -  Firefox [view](documentation/browser-screenshots/firefox.pngfirefox.png)
-   The website was viewed on such devices as: 
     - Desktop [view](documentation/browser-screenshots/crome.png)
     - Laptop [view](#) NO LINK YET !!! !!!
     - Samsung Glaxy note 10 [view](documentation/device-screenshots/note-ten-chrome.jpgnote-ten.jpg)
     - Samsung tablet 3 [view](documentation/device-screenshots/tab-three.png)
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   The website has been tested by friends and family members to review the site and documentation to point out any bugs and/ or user experience issues.

### Testing User Stories from User Experience (UX) section
- movie display multibal movies
## Known bugs
-  ?