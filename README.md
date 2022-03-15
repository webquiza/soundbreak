# _Soundbreak_

#### By _**Carlos Urquiza**_

#### _Final capstone project for Epicodus._

## Technologies Used

- _React_
- _JavaScript_
- _Spotify API_
- _Bootstrap_
- _Firebase_
- _Cypress_
- _CircleCI_

## Description

_Soundbreak is a React application that allows a user to interact with a stopwatch feature which they can stop, resume, or reset as they please. The stopwatch feature is intended to help the user keep track of their time while studying, taking a break, or anything else they can think of. If the user completes the authentication process by clicking the `Login to Soundbreak` button, they will be able to listen to full length songs from a preselected Spotify playlist. The stopwatch and Spotify playlist functionality do not interact with each other. Each feature is part of an individual React component._

_As part of the above React application, I implemented the use of [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress). Cypress is a frontend test automation framework that allows developers to see, in an easy and automated way, that the frontend user experience they built is working as expected._

_Finally, I implemented the use of [CircleCI](https://circleci.com/docs/2.0/about-circleci/) which triggers automated tests (including my Cypress tests) each time I make a commit to the `main` branch of this repository. The next part of this process, which I **did not** implement, would be to automate a new Firebase deployment each time a new CircleCI test runs and passes. Once this process is implemented, I will no longer have to manually run a new Firebase deployment via my terminal._

## Soundbreak Demo

[![Watch the demo](https://img.youtube.com/vi/xBZ0wCD4pYI/0.jpg)](https://www.youtube.com/watch?v=xBZ0wCD4pYI)

## Cypress Demo

[![Watch the demo](https://img.youtube.com/vi/G22_jhwvQYs/0.jpg)](https://www.youtube.com/watch?v=G22_jhwvQYs)

## CircleCI Demo

[![Watch the demo](https://img.youtube.com/vi/fVKKZyRjGdI/0.jpg)](https://www.youtube.com/watch?v=fVKKZyRjGdI)

## Setup/Installation Requirements

- _Clone this repository._
- _Open your terminal._
- _Navigate to the directory (such as your Desktop) where you want the cloned directory._
- _Type `git clone` and paste the URL you copied._
- _Press Enter._
- _Navigate to `sounbreak` by running `cd sounbreak`._
- _Run `npm install`._
- _Run `npm run start` to view project in local host._

## Firebase URL

- https://soundbreak-us.firebaseapp.com

## Run Cypress test

- To run Cypress test, ensure you're currently in the main project directory, `soundbreak`
- Run `npm run cypress:open`
- When the Cypress test runner opens, click on the `soundbreak_spec.js` file. This will start the end to end test.

## Known Bugs

- _No known bugs._

## License

MIT License

Copyright (c) 2021 Carlos Urquiza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact Information

_Feel free to contact me at webquiza@gmail.com with any questions regarding this webpage._
