# I Know That Song!

sei-anz-seifxr06 - Project 4 - [Live Version](https://iknowthatsong.mattgrah.am/)

## Design Brief

A simple web app that allows the end user to search for an artist or band, which in turn generates a set of multiple choice questions where the end user is to guess the song whilst a short 30sec music clip is played. If the user guesses correctly the name of the song is highlighted green, if the user selects incorrectly the name of the selected guess is highlighted red. At the end the web app will tell the end user how they did.

### Screenshot

- [Homepage](./readme-images/screenshots/iknowthatsong-start.png)
- [Artist Search](./readme-images/screenshots/iknowthatsong-artist-search.png)
- [Song Questions](./readme-images/screenshots/iknowthatsong-song-questions.png)
- [Correct Song](./readme-images/screenshots/iknowthatsong-correct.png)
- [Incorrect Song](./readme-images/screenshots/iknowthatsong-incorrect.png)
- [Game End](./readme-images/screenshots/iknowthatsong-game-end.png)

### Approach

After deciding on this web app, I first started investigating the Spotify API to research how the data flowed and what hurdles I would face. From there I spent a fair bit of time on learning how the AuthO works to ensure I was securely retrieving data. One of the goals was to enable the game to be played without having to log into Spotify. This also caused a few road blocks.

Once it was decided that the Spotify API would be able to be used, I started getting design / layout inspiration and commenced mocking up a wireframe. After the design was finalised, I started building the structure of the web app and reading through the docs for Material UI to understand how that fits withing React.

It was now full steam ahead, firstly building each component as a static object, and then implementing frontend API calls to Spotify first, once the response data structure was confirmed and sanitized, it was then moved to a backend application to securely store the data from the Spotify API calls.

Once the main structure of the app was completed and tested, it was working through bugs and minor features one at a time until I was happy with the final product.

### Challenges

**Spotify API**

A few of the challenges I faced while using the Spoify API were:

- Getting artist / band top songs required getting the artist ID first
- Not all artist / band have preview songs
- Not all artist / band have artist / album images

**API Keys**

The original plan was to run this app completely in react without the need to use a back-end. Unfortunately this method exposes the secret API key, which forced the implimentation of a simply Express JS backend to handle the Spotify API call and sanitise the data.

**Working with React**

- Understanding the where to use useState and useContext. Ultimately working out what data needs to be shared amoung the other components
- Breaking down components into smaller items but still maintain optimal functionality. A feature I was trying to implement was to disable the all the question buttons when clicked, however as I mapped them as individual components I couldn't disable them all at once.

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [Node JS](https://nodejs.org/en/)
- [Spotify Api](https://developer.spotify.com/)
- [Axios](https://axios-http.com/)

## User Stories

- As a music fan I want to be able to search my favourite band and try and guess their songs from a short music clip
- As someone that suffers from boredom I want a simple game that lets me find a band a guess their songs
- As a band discoverer I want to play a game that lets me hear snippets of their songs while trying to guess the name

## Wireframe Design

- [Homepage](./readme-images/wireframes/wireframe-start.png)
- [Song Questions](./readme-images/wireframes/wireframe-questions.png)
- [Correct Song](./readme-images/wireframes/wireframe-correct.png)
- [Incorrect Song](./readme-images/wireframes/wireframe-incorrect.png)
- [Game End](./readme-images/wireframes/wireframe-game-end.png)

## Bugs

- Lack of audio fade between tracks

## Future Updates

- Custom Audio Player
- Ability to sign in with Spotify
- Ability to search by playlist
- Leaderboard
- Mobile Compatibility
- Add suggested artist / band at the end of a game
- Add a back-end Cache to store Spotify API calls for future users to prevent additional API calls.

## Style Guide

This web app is using Material UI's default styles with some minor CSS tweaks.

### Font

- [VT323](https://fonts.google.com/specimen/VT323?preview.text=I%20KNOW%20THAT%20SONG!&preview.text_type=custom)
- [Roboto](https://fonts.google.com/specimen/Roboto?preview.text=I%20KNOW%20THAT%20SONG!&preview.text_type=custom)

### Colours

The colour selection here was quite basic as I wanted the background image to be the hero here.

- Background: rgba(255, 255, 255, 0.9)
- Foreground: rgba(0, 0, 0, 0.87)
- Questions:
  - Correct Answer: rgba(46, 125, 50, 0.9)
  - Incorrect Answer: rgba(211, 47, 47, 0.9)
- Guess the song header:
  - linear-gradient(225deg)
  - rgb(95, 25, 65) 0%,
  - rgb(75, 50, 100) 50%,
  - rgb(0, 0, 0) 100%

## Installation

This project is using a React front end with an Express JS back end and works in development by running a React Dev Server along with the API backend, and also to run a unified back end/front end when pushed to Heroku. It also includes TypeScript for both client and server.

### For development

Auto install all dependencies for client and server:

`npm install`

Run a development server for React and an Express Back end with nodemon auto re-start and ts-node

`npm run dev`

Head to localhost:3000 for development. The Express API runs on port 3333 and is proxied through the React App on port 3000. Any changes to server or client automatically update and reflect in the app with a page refresh. Make sure that the "proxy" property in the client package.json file is set to the local URL of your Express Backend.

Create enviornment variables with your own .env file. Example variables:

```
NODE_ENV=development
SPOTIFY_API_ID=api-id
SPOTIFY_CLIENT_SECRET=client-secret
```

### Production

You can mimic what Heroku will do in production by running the following.

Auto install all dependencies for client and server:

`npm install`

Build a production React App

`npm build`

Start a production server:

`npm run start:local`

Head to localhost:3000. Both the API and the built React front end are now running on the same server. No code gets auto-updated in this mode.
