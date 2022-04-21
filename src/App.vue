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
  --app-background-color:#F4F6F8;
  --app-color: #2C3F51;
  --radial-background-color: #0186F5;
  --submit-button-background-color: #1C590B;

  --main-font-size: 3vw;
  --fixed-banner-Background: #870607;
  --fixed-banner-title: 4vw;
  --quiz-title-font-size: 5vw;

  --question-answers-background-color: #FEFFFE;
  --question-answers-box-shadow:-0.2vw 0.4vw 1vw #B3B3B3;
  --question-font-size: 4vw;
  --question-letter-spacing: 0.1vw;
  --text-font-family: Arial;
  --text-font-size: 3.5vw;


  --table-banner-title: 3.3vw;
  --table-banner-font-size: 2.5vw;
  --tablet-text-font-size: 2vw;
  --table-question-font-size: 2.3vw;
  --table-question-answers-box-shadow:-0.1vw 0.2vw 0.5vw #B3B3B3;

  --desktop-fixed-banner-title: 1vw;
  --desktop-font-size: 2.1vw;
  --desktop-question-font-size: 1.2vw;
  --desktop-text-font-size: 1.1vw;
  --desktop-quesiton-answers-margin: 0 auto;
  --desktop-box-shadow: 0vw 0.2vw 0.3vw #B3B3B3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--app-color);
  padding: 0;
  background-color: var(--app-background-color);
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
  line-height: 5vw;
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
  width: 43%;
  margin: 0 auto;
  font-size: 3.5vw;
  padding-top: 4vw;
  text-align: center;
}
.percentage{
  font-size: 4vw;
  color: red;
  padding-top: 1vw;
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
  border: 1px solid #BDAB1D;
  
}
.question_answers.gotCorrect{
  border: 1px solid green;
}
.question_answers.gotWrong{
  border: 1px solid red;
}
.question{
  /*border: 1px solid blue;*/
  padding: 5vw 6vw 4vw 7vw;
  /*letter-spacing: var(--question-letter-spacing);*/
  font-size: var(--question-font-size);
}
.answers{
  padding-left: 12vw;
  padding-bottom: 2.5vw;
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.answers:last-child .answer{
  margin-bottom: 4vw;
}



.answer{
  /*padding-left: 2.6vw;*/
  /*font-size: 3.9vw;*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  /*margin: 2vw 0;*/
  cursor: pointer;
  position: relative;
}
.answer.active{
  border: 2px solid #0E7B0E;
  background-image: radial-gradient( #70C575 1%, #24A824 99%);;
  color: white;
  height: 11vw;
  padding-left: 3vw;
  margin-left: -4vw;
  border-radius: 2vw;
}
.radio_input{
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.design{
  width: 3vw;
  height: 3vw;

  border: 1px solid #000000;
  border-radius: 100%;
  margin-right: 2vw;

  position: absolute;
}

.design::before,
.design::after {
  content: "";
  display: block;

  width: inherit;
  height: inherit;

  border-radius: inherit;

  position: absolute;
  transform: scale(0);
  transform-origin: center center;
}

.design:before {
  background: var(--radial-background-color);
  opacity: 0;
  transition: .3s;
}

.design::after {
  background: var(--radial-background-color);
  opacity: .4;
  transition: .6s;
}
/* .text */
.text {
  color: inherit;
  /*font-weight: bold;*/
  margin-left: 7vw;
  font-size: var(--text-font-size);
  font-family: var(--text-font-family);
}


/* checked state */
input:checked+.design::before {
  opacity: 1;
  transform: scale(.6);
}


/* other states */
/*input:hover+.design,*/
input:focus+.design {
  border: 1px solid var(--radial-background-color);
}

/*input:hover+.design:before,*/
input:focus+.design:before {
  background: var(--radial-background-color);
}

/*input:hover~.text {
  color: blue;
}*/

input:focus+.design::after,
input:active+.design::after {
  opacity: .1;
  transform: scale(1);
}


.button_container{
  padding: 5vw;
  width: 16%;
  margin: 0 auto;
}
.submit_button{
  background-color: var(--submit-button-background-color);
  border: 1px solid black;
  width: 16vw;
  height: 7vw;
  color: #FFF;
  cursor: pointer;
  border-radius: 1vw;
}

.rightWrong{
  float: right;
  top: -6vw;
  position: relative;
  right: 3vw;
}

.correct{
  color:  green;
}
.wrong{
  color: red;
}

.average_result{
  padding-top: 1vw;
}


/*
  ************************************************************************
  Tablet Kuko Visuals
  ************************************************************************
*/

@media screen and (min-width: 700px){
  .quiz_title{
    font-size: var(--table-banner-title);
    padding-left: 11vw;
  }
  .banner{
    font-size: var(--table-banner-font-size);
    padding: 2.5vw 10vw;
  }
  .question_answers{
    width: 86%;
    margin: 4vw 0 0 3vw;  
    box-shadow: var(--table-question-answers-box-shadow);
  }
  .question{
    font-size: var(--table-question-font-size);
    padding: 3vw 6vw 2.5vw 6vw;
  }
  .answer{
    font-size: 2vw;
  }
  .design{
    width: 1.8vw;
    height: 1.8vw;
  }
  .text{
    margin-left: 4vw;
    font-size: var(--tablet-text-font-size);
  }
  .answers{
    padding-bottom: 2vw;
    padding-left: 9vw;
  }
  .results_container{
    font-size: 2.5vw;
  }
  .percentage{
    font-size: 3vw;
  }
  .answer.active{
    height: 4.5vw;
  }
  .rightWrong{
    top: -4vw;
  }
}
/*
  ************************************************************************
  Desktop Kuko Visuals
  ************************************************************************
*/
@media screen and (min-width: 1024px){
  .quiz_title{
    font-size: var(--desktop-font-size);
    padding-left: 0;
    padding-top: 1vw;
    width: 67vw;
    max-width: 1024px;
  }
  .question_answers{
    width: 67vw;
    max-width: 1024px;
    margin: var(--desktop-quesiton-answers-margin);
    margin-top: 2.5vw;
    border-radius: 1vw;
    box-shadow: var(--desktop-box-shadow);
  }
  .banner{
    font-size: var(--desktop-fixed-banner-title);
    padding: 1vw 2vw 1vw 2vw;
  }
  .answer{
    font-size: 1vw;
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
    padding: 1vw 3vw 2vw 2vw;
  }
  .answers{
    padding-bottom: 1.2vw;
    padding-left: 3.2vw;
  }
  .answers:last-child .answer {
    margin-bottom: 1.5vw;
  }
  .results_container{
    font-size: 1.5vw;
    padding-top: 1vw;
  }
  .percentage{
    font-size: 1.5vw;
  }
  .answer.active{
    height: 2.5vw;
    padding-left: 1vw;
    margin-left: -1vw;
    border-radius: 0.5vw;
  }
  .rightWrong{
    top: -2vw;
    right: 1.5vw;
    font-size: 0.9vw;
  }
  .submit_button{
    width: 5vw;
    height: 3vw;
    border-radius: 0.5vw;
  }
}
</style>
