# snowjoe Quiz app
![GitHub Logo](/image/screenshot.png)

- There is a data folder with json data where the app is pulling the data from

- If Answers are incomplete show a message and highlight the questions that need to be finished

- If answer are completed but some are incorrect show the correct ones in green and incorrect in red plus highlight the correct one on a green box

- calcualte the percentage of the result and display to user


## Project setup
```
npm install
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## questions.json
It gets the trivia questions from an api https://opentdb.com/api_config.php

## questions.js
Filters the data from questions.json to get the data needed for the project

## store.js
I used Vuex here to have the data store in one place so I wouldn't have to drill the props up and down. from any component I could easly get the data just by accessing the store.

## SingleComponent.js
All the logic is in Single Component. The form is being triggered after the button is clicked 



