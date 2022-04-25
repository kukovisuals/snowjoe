<template>
  <QuizComponent title="Quiz 1 - Science: Computers / HTML / CSS "  />
</template>

<script>
import QuizComponent from './components/QuizComponent.vue'

export default {
  name: 'App',
  components: {
    QuizComponent
  }
}
</script>

<style>
*{
  margin: 0;
}
:root {
  --form-control-color: #2C8DFE;

  --app-background-color:#F4F6F8;
  --app-color: #2C3F51;
  --radial-background-color: #0186F5;
  --submit-button-background-color: #1a6a04;

  --yellow-border-color: #ddc928;
  --green-border-color: green;
  --red-border-color: red;

  --main-font-size: 3vw;
  --fixed-banner-Background: #870607;
  --fixed-banner-title: 5vw;
  --quiz-title-font-size: 6vw;

  --question-answers-background-color: #FEFFFE;
  --question-answers-box-shadow:0vw 0.4vw 1vw #8b8989;
  --question-font-size: 4vw;
  --question-letter-spacing: 0.1vw;
  --text-font-family: Arial;
  --text-font-size: 3.5vw;


  --table-banner-title: 3vw;
  --table-banner-font-size: 2.3vw;
  --tablet-text-font-size: 1.9vw;
  --table-question-font-size: 2vw;
  --table-question-answers-box-shadow:-0.1vw 0.2vw 0.5vw #B3B3B3;

  --desktop-fixed-banner-title: 1.2vw;
  --desktop-font-size: 2.6vw;
  --desktop-question-font-size: 1vw;
  --desktop-text-font-size: 1.1vw;
  --desktop-quesiton-answers-margin: 0 auto;
  --desktop-box-shadow: 0vw 0.1vw 0.2vw #B3B3B3;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--app-color);
  padding: 0;
  background-color: var(--app-background-color);
}

.quiz_questions_container{
  padding-bottom: 7vw;
}

/*
  ************************************************************************
  ErrorComponent Kuko Visuals
  ************************************************************************
*/
.error_container{
  width: 80%;
  margin: 0 auto;
} 
.error_message{
  color:  #fa1800;
  text-align: center;
  padding-bottom: 10vw;
}


/*
  *****************************************************************
  FixedBanner Kuko Visuals
  *****************************************************************
*/

.fixed_banner{
  background-color: var(--fixed-banner-Background);
}
.banner{
  padding: 4vw 10vw;
  color: #FFFFFF;
  font-size: var(--fixed-banner-title);
}


/*
  *****************************************************************
  QuizComponent Kuko Visuals
  *****************************************************************
*/

.quiz_title{
  /*line-height: 5vw;*/
  padding-top: 3vw;
  width: 90%;
  margin: 0 auto;
  font-size: var(--quiz-title-font-size);
}

/*
  *****************************************************************
  ResultsComponent Kuko Visuals
  *****************************************************************
*/

.results_container{
  width: 80%;
  margin: 0 auto;
  font-size: 5vw;
  padding-top: 4vw;
  text-align: center;
}
.results{
  text-decoration: underline;
}
.percentage{
  font-size: 5vw;
  color: red;
  padding-top: 3vw;
}



/*
  ************************************
  SingleQuestion Kuko Visuals
  ************************************
*/
.question_answers{
  width: 90%;
  margin: 0 auto;
  background-color: var(--question-answers-background-color);
  box-shadow: var(--question-answers-box-shadow);
  /*border: 1px solid black;*/
  border-radius: 2vw;
  margin-top: 5vw;
}
.question_answers.active{
  border: 3px solid var(--yellow-border-color);
  
}
.question_answers.gotCorrect{
  border: 3px solid var(--green-border-color);
}
.question_answers.gotWrong{
  border: 3px solid var(--red-border-color);
}
.question{
  /*border: 1px solid blue;*/
  padding: 5vw 10vw 4vw 7vw;
  /*letter-spacing: var(--question-letter-spacing);*/
  font-size: var(--question-font-size);
}
.answers{
  padding-left: 7vw;
  padding-bottom: 2.5vw;
  width: 88%;
  position: relative;
  /*display: flex;
  justify-content: center;
  flex-direction: column;
  */
}
.answers:last-child .answer{
  margin-bottom: 4vw;
}



.answer{
  display: -webkit-inline-box;
  display: flex;
  color: inherit;
  margin-left: 5vw;
  font-size: var(--text-font-size);
  font-family: var(--text-font-family);
}

.activediv{
  position: relative;
}
.activediv.activeAnswer{
  border: 3px solid #0E7B0E;
  background-image: radial-gradient( #26a52f, #0a8f20);
  color: white;
  height: 9vw;
  padding-left: 3vw;
  margin-left: -4.2vw;
  border-radius: 2vw;
}

.text {
  color: inherit;
  margin-left: 7vw;
  font-size: var(--text-font-size);
  font-family: var(--text-font-family);
}

.activeAnswer input[type="radio"]{
  top: 29%;
}
.activeAnswer .answer{
  top: 22%;
  position: relative;
}
input[type="radio"] {
  /* Add if not using autoprefixer */
  cursor: pointer;
  position: absolute;
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #fff;
  /* Not removed via appearance */
  border: 1px solid #999999;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  bottom: 0.5vw;
}

input[type="radio"]::before {
  content: "";
  width: 0.3em;
  height: 0.3em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
}

input[type="radio"]:checked::before {
  transform: scale(1);
}
input[type="radio"]:checked  {
  border: 1px solid var(--form-control-color);
}

.button_container{
  padding: 5vw;
  width: 26%;
  margin: 0 auto;
}
.submit_button{
  background-color: var(--submit-button-background-color);
  border: 2.5px solid black;
  width: 16vw;
  height: 7vw;
  color: #FFF;
  cursor: pointer;
  border-radius: 1vw;
  font-size:2.5vw;
}

.rightWrong{
  float: right;
  top: -6vw;
  position: relative;
  right: 3vw;
  font-size: 2vw;
}

.correct{
  color:  green;
}
.wrong{
  color: red;
}

.average_result{
  padding-top: 4vw;
}


/*
  ************************************************************************
  Tablet Kuko Visuals
  ************************************************************************
*/

@media screen and (min-width: 700px){
  .quiz_title{
    font-size: var(--table-banner-title);
    padding-left: 3vw;
    padding-top: 2vw;
  }
  .banner{
    font-size: var(--table-banner-font-size);
    padding: 2.5vw 7vw;
  }
  .question_answers{
    width: 86%;
    margin: 3vw 0 0 3vw;  
    box-shadow: var(--table-question-answers-box-shadow);
    border-radius: 1vw;
  }
  .question{
    font-size: var(--table-question-font-size);
    padding: 3vw 6vw 2.5vw 4.2vw;
  }
  .answer{
    font-size: var(--tablet-text-font-size);
    margin-left: 3vw;
  }
  .design{
    width: 1.8vw;
    height: 1.8vw;
  }

  .answers{
    padding-bottom: 2vw;
    padding-left: 4vw;
  }
  .activediv.activeAnswer {
    height: 5vw;
    padding-left: 1vw;
    margin-left: -1.4vw;
    border-radius: 1.2vw;
  }
  .activeAnswer .answer{
    top: 27%;
  }
  .results_container{
    font-size: 2.4vw;
    padding-top: 3vw;
  }
  .average_result{
    padding-top: 2.5vw;
  }
  .percentage{
    font-size: 2.5vw;
    padding-top: 1.2vw;
  }
  .activeAnswer input[type="radio"] {
    top: 33%;
  }
  input[type="radio"] {
    border: 1px solid #999999;
    bottom: 0.3vw;
    width: 1.6vw;
    height: 1.6vw;
  }
  input[type="radio"]::before{
    width: 0.45em;
    height: 0.45em;
  }

  .answer.active{
    height: 4.5vw;
  }
  .rightWrong{
    top: -3.2vw;
    font-size: 1.5vw;
    right: 1.5vw;
  }
  .submit_button {
    width: 11vw;
    height: 5vw;
    font-size: 1.5vw;
  }
}
/*
  ************************************************************************
  Desktop Kuko Visuals
  ************************************************************************
*/
@media screen and (min-width: 1224px){
  .quiz_title{
    font-size: var(--desktop-font-size);
    padding-left: 0;
    padding-top: 1vw;
    width: 76vw;
    max-width: 1500px;
  }
  .question_answers{
    width: 76vw;
    max-width: 1500px;
    margin: var(--desktop-quesiton-answers-margin);
    margin-top: 1.5vw;
    border-radius: 0.5vw;
    box-shadow: var(--desktop-box-shadow);
  }
  .banner{
    font-size: var(--desktop-fixed-banner-title);
    padding: 10px 20px 18px;
  }
  .answer{
    font-size: 1vw;
    margin-left: 1.8vw;
  }
  .design{
    width: 0.8vw;
    height: 0.8vw;
  }
  .text{
    font-size: var(--desktop-text-font-size);
    margin-left: 1.5vw;
  }
  .question{
    font-size: var(--desktop-question-font-size);
    padding: 1.5vw 9vw 1.3vw 2vw;
  }

  .activeAnswer .answer{
    top: 32%;
  }
  .activeAnswer input[type="radio"] {
    top: 33%;
  }
  input[type="radio"] {
    border: 1px solid #999999;
    bottom: 0.1vw;
    width: 1vw;
    height: 1vw;
  }

  input[type="radio"]::before{
    width: 0.8em;
    height: 0.8em;
  }
  .activediv.activeAnswer {
    border: 3.5px solid #067406;
    height: 3.3vw;
    padding-left: 0.7vw;
    margin-left: -1vw;
    border-radius: 0.5vw;
  }
  .question_answers.gotWrong {
    border: 3px solid var(--red-border-color);
  }
  .question_answers.gotCorrect {
    border: 3px solid var(--green-border-color);
  }
  .answers{
    padding-bottom: 1.2vw;
    padding-left: 4vw;
  }
  .answers:last-child .answer {
    margin-bottom: 1.5vw;
  }
  .results_container{
    font-size: 1.9vw;
    padding-top: 1vw;
  }
  .average_result {
    padding-top: 1.6vw;
  }
  .percentage{
    font-size: 2vw;
    padding-top: 0.7vw;
  }
  .answer.active{
    height: 2.5vw;
    padding-left: 1vw;
    margin-left: -1vw;
    border-radius: 0.5vw;
  }
  .rightWrong{
    top: -2.3vw;
    right: 0.8vw;
    font-size: 1vw;
  }
  .submit_button{
    width: 5vw;
    height: 3vw;
    border-radius: 0.5vw;
    font-size:1vw;
  }
  .button_container {
    padding: 1.3vw 3vw 2vw;
    width: 11%;
    margin: 0 auto;
  }
  .error_message {
    font-size: 0.9vw;
    font-weight: 600;
  }
}
</style>
