This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### FLICKR FOR DUMMIES

Basic instructions:

- Please clone this repository
- Install with `npm install`

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  .env
  .gitignore
  package-lock.json
  yarn.lock
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    APi/
      FlickrApi.js
    components/
      Header.js
      Overlay.js
      Photos.js
      __tests__/
        Header.test.js
        Overlay.test.js
        Photos.test.js
    css/
      Header.css
      Overlay.css
      Photos.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

The `App.js` component is designed as a container that manages the state for child components and makes the Api calls.

Children components in `App.js` are stateless.

The interaction with the Flickr API is managed by the `FlickrApi.js` helper file. Api calls are handled with promises and async/await features from es6/es7 js.



### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
Basic tests are runned for all components.
In order to keep simplicity and dependencies at a minimum, no aditional testing dependencies were used (like enzyme) only native `jest` and `react-dom`


made by: Simon Garmendia