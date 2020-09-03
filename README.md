# Introduction to React

The entire project is centered in the src directory with the configuration files of the formatters outside it.

This repository hosts the 'Adopt Pets' project taught by btholt in the Frontend Masters' Complete Intro to React course.

### Timeline:

#### Commit 1:

As of 02.09.20, I have set up the formatter and bundler and written raw React in the <b>App.js</b> and <b>Pet.js</b> files. Will be moving on to JSX next.

#### Commit 2:

This is the second commit of 02.09.20. I have worked my way down with hooks using "useState" and also creating custom hooks like "useDropdown" in <b>useDropdown.js</b> to increase reusability of code. The other thing I did was include effects by calling "useEffects" that enabled me to call an external API and query it for data related to pet adoption. The locations for the search query are limited to <b>Seattle, WA</b> and <b>San Francisco, CA</b>.

#### Commit 3:

This is the third commit of 02.09.20. This commit does not have as much work going into it as the precious one but it is significant because the core idea of the 'Adopt Me!' project is now working. The application can now successfully query the external API for information and also display the results. I have used the <b>async-await</b> utility here to receive the data from the API. <b>Pet.js</b> was updated to make the results presentable and <b>Results.js</b> was created to display the results. The cross-env tool was used in the project so that it may work flawlessly on any OS. Also, the <b>dev:mock</b> script was written inside <b>package.json</b> to make the project render offline.

#### Commit 4:

This is the first commit of 03.09.20. At the end of this commit, I have a completely functional 'Adopt Me!' website for animal adoption. In this commit, I have created a details page which displays the details of the animal the user clicks on. The code for this is on <b>Details.js</b>. The details page also has a photo carousel that shows the photos of the animal. These pages used the fundamental idea of Classes in React and we had to reconfigure <b>.eslintrc.json</b> and create <b>.babelrc</b> to use the child class with readability. We also used the concept of <b>Routing</b> in React using the <b>Reach Router</b> and reconfigured a couple of js files. Will work on error handling and the completion of the project next.

#### Commit 5:

This the second commit of 03.09.20. The development of the project has now been successfully completed and the adoption app is fully functional. Among new additions we have <b>ErrorBoundary.js</b> for error handling in case the external API behaves erratically. I also have added global contexts in terms of the theme whcih is applicable throughout the application. The code for this is in <b>ThemeContext.js</b>. As a final step towards the completion of the app, I have added a functionality to the Submit button that results in the displaying of a modal which in turn, redirects to the adoption page. The code for the modal is in <b>Modal.js</b>. Will be working on the publishing of this app in the future via gh-pages and also explore publishing using React.
