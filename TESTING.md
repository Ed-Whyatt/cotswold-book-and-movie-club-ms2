# Testing

## JEST
- ### Jest - [Link](https://jestjs.io/)
1. ### Initialising Jest
#### In terminal in GitPod.io workspace type:
    npm init
#### Click enter until you get to test command and type jest:
    test command: jest
#### Then keep clicking enter until the end when is display yes click and  enter to install jest.
2. ### Installing Jest
#### In the terminal in GitPod.io workspace type:
     npm install ---save-dev jest@26.6.3
#### Click enter and it will install. For a more detailed example go to [Jest: Documentation](https://jestjs.io/docs/getting-started).
3. ### Using Jest
### I will be using Jest to do some tests on the navigation app only this is a key function in the use of the website in a mobile view. I fully acknowledge and understand that, in a real-world scenario, an extensive set of Jest tests would be more comprehensive.
- Testing the Dom research in using Jest [Documentation](https://jestjs.io/docs/tutorial-jquery)
   - Jest Tests done in git environment.
   1. Mock HTML file for testing purposes.
      ### ![text](documentation/jest-test-images/jest-html-test.png)
   2. Jest code used for testing the DOM of the button click function used in the navigation app.
   - ### nav-toggle-app.js 
     ### ![text](documentation/jest-test-images/jest-start.png)
   - ### nav.toggle.app.test.js
     ### ![text](documentation/jest-test-images/jest-test-code.png)
   4. Get Jest test results by typing npm test in the terminal while in the git environment.
                 
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
JSHint  Services were used to validate every JavaScript page of the project to ensure there were no major syntax errors in the project. The most substantial bugs that were fixed are in the bug fixed section below testing in README.md.

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
2. Test after the needed bugs fixed the API key is in a separate app movie-app.api.js.
### ![text](documentation/jshint-images/movie-search-after.png)
3. movie-app-api.js is the function used for the app key
### ![text](documentation/jshint-images/movie-app-api.png)

### Nav toggle App nav-toggle-app.js
1.  Initial test.
### ![text](documentation/jshint-images/toggle-app-before.png)
2. Test after the needed bugs fixed in bugs fixed section below.
### ![text](documentation/jshint-images/nav-toggle-after.png)
3. Jest nav.toggle.app.test.js used to test some of the nav toggle app I have not changed any because this is a jest test.
### ![text](documentation/jshint-images/nav-toggle-jest.png)

### Send Email send-email.js
### ![text](documentation/jshint-images/email-results.png)

## Google Chrome Developer Tools
Google Chrome Developer Tools has been used throughout the development of this page, To use it in Google Crome browser Right click anywhere on the screen and click inspect on the menu.

### Google Chrome Developer Tool Lighthouse results
#### Home Page
1.  Initial test.
### ![Text](documentation/crome-lighthouse-images/home-ligth-house-before.png)
2. Test after bugs fixed and general improvements.
### ![Text](documentation/crome-lighthouse-images/home-lighthouse-after.png)

#### Search For Movie Page
1.  Initial test.
### ![Text](documentation/crome-lighthouse-images/movie-lighthouse-before.png)
2. Test after bugs fixed and general improvements.
### ![Text](documentation/crome-lighthouse-images/movie-lighthouse-after.png)

#### Search for Book Page
1.  Initial test.
### ![Text](documentation/crome-lighthouse-images/book-lighthouse-before.png)
2. Test after bugs fixed and general improvements.
### ![Text](documentation/crome-lighthouse-images/book-lighthouse-after.png)

#### Contact Us Page
1.  Initial test.
### ![text](documentation/crome-lighthouse-images/contact-lighthouse-before.png)
2. Test after bugs fixed and general improvements.
### ![Text](documentation/crome-lighthouse-images/contact-us-after.png)

Some tests that lighthouse testing revealed are external and I have not changed them here are some that stand out.
1. The JQuary library shows as a medium security risk.
### ![text](documentation/crome-lighthouse-images/lighthouse-allpages.png)
2. 
The Google Maps Street view image displays with incorrect aspect ratio.
### ![text](documentation/crome-lighthouse-images/ligthhouse-google-maps.png)

## Bugs Fixed
1. Colour contrast
### The colours chosen for the Home and Search for Movie navigation button where of to low contract and have been changed.
- Before fix:
#### ![text](/documentation/bug-fix-images/home-color-before.png) ![text](/documentation/bug-fix-images/movie-before.png)
- After fix:
#### ![text](/documentation/bug-fix-images/home-after.png) ![text](/documentation/bug-fix-images/movie-after.png)
- Navigation colours after fix:
#### ![text](/documentation/bug-fix-images/nav-colors-after.png)
2. The locations in the upcoming events section were flowing out of the container when viewed on an extra small screen on all events. I put the locations section in its own column to prevent this.
- Before fix
#### ![text](/documentation/bug-fix-images/locations-code-before.png) ![text](/documentation/bug-fix-images/locations-before-fix.png)
- After fix 
#### ![text](/documentation/bug-fix-images/locations-code-after.png) ![text](/documentation/bug-fix-images/locations-after-fix.png)
3. There was a gap on the right-hand side of every page that was causing the page to show an unwanted horizontal scroll bar.
- Before fix same code for all pages.
#### ![text](documentation/bug-fix-images/gap-code-before.png) ![text](documentation/bug-fix-images/gap-before.png)
- After fix same code for all pages.
#### ![text](documentation/bug-fix-images/gap-code-after.png) ![text](documentation/bug-fix-images/gap-after.png)
4. The description in the book search results displayed was to long so I originally put a slice function in to reduce the size. Crome development tools showed an error, so I changed the information displayed to the book text snippet instead of the book description in the array of results from the Google Book API.
- Book search Crome development tool error in console.
#### ![text](documentation/bug-fix-images/slice-bug.png)
- Code before fix in book-app.js
#### ![text](documentation/bug-fix-images/slice-old-code.png) 
#### ![text](documentation/bug-fix-images/java-slice-code-before.png)
- Code after fix in book-app.js
#### ![text](documentation/bug-fix-images/slice-new-code-two.png) 
#### ![text](documentation/bug-fix-images/slice-new-code-one.png) 
5. Crome Dev Tool showed a readability issue with the search bar in both the movie and book search pages. I’m removed the h1 heading and used the label for the heading changes are the same for both pages.
- Crome Dev Tool Readability
#### ![text](documentation/bug-fix-images/form-readabilty.png)
- Before fix
#### ![text](documentation/bug-fix-images/search-code-before.png)
- After fix
#### ![text](documentation/bug-fix-images/form-code-after.png)
6. Crome Dev Tool showed type error when reading textSnippet form the Google Book API results array. I Added some Ternary statement withing the html code to be displayed in the book-app.js, so it would have a fallback message when no results are found.
- Book search Crome development tool error in console.
#### ![text](documentation/bug-fix-images/dev-tool-book-before.png)
- Before fix
#### ![text](documentation/bug-fix-images/dev-tool-book-code-before.png)
- After fix
#### ![text](documentation/bug-fix-images/dev-tool-book-after.png)
7. Crome Dev Tool showed a Get http 404 error from the image in the movie-app.js when the OMDb API movie poster was called so I added some Ternary statements to the poster results for a fall-back placeholder image to show.
- Book search Crome development tool error in console.
   #### ![text](documentation/bug-fix-images/dev-tool-movie-before.png)
- Before fix
   #### ![text](documentation/bug-fix-images/dev-tool-movie-code-before.png)
- After fix
   #### ![text](documentation/bug-fix-images/movie-dev-code-after.png)
8. The heading and footer took up too much real estate on the page in small device view, so I changed the html with bootstrap columns and CSS using media queries.
- Small view and CSS before fix
  #### ![text](documentation/bug-fix-images/header-foorter-before.png) ![text](documentation/bug-fix-images/heading-css-before.png)
- Html Changes
  #### ![text](documentation/bug-fix-images/footer-code-changed.png)
- Small view and CSS that media queries will change at max width 500px.
  #### ![text](documentation/bug-fix-images/header-footer-after.png) ![text](documentation/bug-fix-images/heading-media-css.png)
  
  ### Further Testing

-   The website has been tested on such browsers as: 
    -  Google Chrome [view](documentation/browser-screenshots/crome.pngchrome.png)
    -  Microsoft Edge [view](documentation/browser-screenshots/edge.pngedge.png)
    -  Firefox [view](documentation/browser-screenshots/firefox.pngfirefox.png)
-   The website was viewed on such devices as: 
     - Desktop [view](documentation/browser-screenshots/crome.png)
     - Laptop [view](#) NO LINK YET !!! !!!
     - Samsung Galaxy note 10 [view](documentation/device-screenshots/note-ten-chrome.jpgnote-ten.jpg)
     - Samsung tablet 3 [view](documentation/device-screenshots/tab-three.png)
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   The website has been tested by friends and family members to review the site and documentation to point out any bugs and/ or user experience issues.

### Know bugs


### Testing User Stories from User Experience (UX) section in README.md

- ### First time user goals
    1. As a First Time User, I want to see information on the events and when the next event is on and where.

    - When entering the site, customers are automatically greeted with an easily readable navigation bar with a clear navigation button that will take them back to the events on all pages.
    ### ![Text](/documentation/interactive-element-images/nav-menu.png) 
      
    - ### On a small device there is a three-bar button that opens the navigation menu witch will take them to the events page.
     ### ![Text](/documentation/interactive-element-images/nav-toggle.png)

    - Alternatively, they can scroll down the page to the events section.
    ### ![Text](/documentation/interactive-element-images/event-map.png) 
    ### ![Text](/documentation/interactive-element-images/events.png)   
 
    2. As a First Time User, I want to navigate the website easily and interact with the content.

    - The user has lots of options to easily navigate to the search for a movie, search for a book, contact us pages and events section from the navigation on all pages. Witch becomes a drop-down menu in small screen view.
    ![Text](/documentation/interactive-element-images/nav-menu.png)
    ![Text](/documentation/interactive-element-images/nav-toggle.png) 

    - On the home page there is a google maps map with clusters of the locations of the events which can be clicked on to zoom in and out.
     ![Text](/documentation/interactive-element-images/events.png)
      ![Text](/documentation/interactive-element-images/event-map.png) 

    - On the Movie search page, the user can search for a movie and view the contents displayed.
    ### ![text](documentation/interactive-element-images/movie-search.png)
    ![text](documentation/interactive-element-images/movie-results.png)

    - On the Book search page, the user can search for a and book, view the content displayed and click on a read book button that takes them to an external page with the book on it.
    ### ![text](documentation/interactive-element-images/book-search.png)
    ![text](documentation/interactive-element-images/book-results.png)
    ![text](documentation/interactive-element-images/book-button.png)

    - On the contact page the user can fill in the form with their information and query that will be submitted to an external email. There is also a message displayed with the send response of either sent of error on it.
    ![text](documentation/interactive-element-images/contact.png)
    - Message sent
    ![text](documentation/interactive-element-images/email-sent.png)
    - Message error
    ![text](documentation/interactive-element-images/email-error.png)

    3. As a First Time User, I want to easily navigate to make an enquiry.
    - A user can easily navigate to the contact us page to fill in the form to make an inquiry by using the navigation bar or button on a small screen.
     ![Text](/documentation/interactive-element-images/nav-menu.png)
     ![Text](/documentation/interactive-element-images/nav-toggle.png) 
     ![text](documentation/interactive-element-images/contact.png)

    4. As a First Time User, I want to easily navigate to the movie search page.
    - A user can easily navigate to the movie search page buy using the navigation bar or button on a small screen from all pages.
    ![Text](/documentation/interactive-element-images/nav-menu.png)
     ![Text](/documentation/interactive-element-images/nav-toggle.png) 

    5. As a First Time User, I want to easily navigate to the book search page.
     - A user can easily navigate to the movie search page buy using the navigation bar or button on a small screen from all pages.
     ![Text](/documentation/interactive-element-images/nav-menu.png)
     ![Text](/documentation/interactive-element-images/nav-toggle.png) 

- ### Returning user goals
    1. As a Returning User, I want to see all the upcoming book and movie events.
    
    - A returning user can easily navigate to the upcoming events in the events section of the home page and see when they are on by using the navigation menus.
    ![text](documentation/interactive-element-images/about-us.png)

    - A returning can easily see the upcoming events locations by navigating to the events maps section and using the interactive map clusters.
    ![text](documentation/interactive-element-images/event-map.png)

    2. As a Returning User, I want to send a contact message.

    - A returning user can easily navigate to the contact form on the contact us page.
    ![text](documentation/interactive-element-images/nav-menu.png)
    ![text](documentation/interactive-element-images/nav-toggle.png)

    - A returning user can easily see were to fill in the form and what button to click to send.
    ![text](documentation/interactive-element-images/contact.png)

    - A returning user can easily se a response message when the form has been submitted clear stating if sent or there was an error.
    - Message sent
    ### ![text](documentation/interactive-element-images/email-sent.png)
    - Message error
    ### ![text](documentation/interactive-element-images/email-error.png)

    3. As a Returning User, I want to navigate to the club’s social media.

    - A returning user can easily navigate to the club's social media located at the bottom of the page in the footer.
    ![text](documentation/interactive-element-images/footer.png)

    - A returning user can easily click on the social media lick they want to view and it will open in a new window.
    
- ### Frequent user goals
    1. As a Frequent user, I want to easily search for a book.

    - A Frequent user can easily navigate back to the search for book page using the navigation menu.
    ![text](documentation/interactive-element-images/nav-menu.png)
    ![text](documentation/interactive-element-images/nav-toggle.png)

    - A Frequent user can easily search for a book in by using the search for a book search bar.
    ![text](documentation/interactive-element-images/book-search.png)

    2. As a Frequent user, I want to easily search for a movie.

     - A Frequent user can easily navigate back to the search for movie page using the navigation menus and entering a book of there choice.
     ![text](documentation/interactive-element-images/nav-menu.png)
    ![text](documentation/interactive-element-images/nav-toggle.png)

    - A Frequent user can easily search for a book in by using the search for a movie search bar and entering a movie of there choice.
    ![text](documentation/interactive-element-images/movie-search.png)

    3. As a Frequent user, I want to see the current book and movie events.

     - A Frequent user can easily navigate back to the book and movie events located in the home page by using the navigation menus or scrolling down to the menu section.
     ![text](documentation/interactive-element-images/nav-menu.png)
     ![text](documentation/interactive-element-images/nav-toggle.png)
     ![text](documentation/interactive-element-images/events.png)


     

