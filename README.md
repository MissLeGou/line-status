# TfL Line Status Board

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It fetches data from the TfL unified api https://api.tfl.gov.uk/Line/Mode/tube/Status?detail=true and displays Tube line statuses.

This application has a fully responsive design and can display on Desktop, Tablet and Mobile devices.

## Prior to running the application Set up a .env file

- Create a .env file in you application
- You can copy the content of the .env.example file in your .env file
- Set the app_key value by adding it to the `REACT_APP_APP_KEY=`.

## Running the application

`npm start` command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Testing the application

- I have used the Mock Service Worker package. It is an API mocking library that uses Service Worker API to intercept actual requests.
- I have also included a Snapshot test which is a very useful tool to make sure the UI does not change unexpectedly.

`npm run test` command launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Building the application

`npm run build` command builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Assumptions

The TfL api response is 200 OK.
Error handling has not been included in this project.
