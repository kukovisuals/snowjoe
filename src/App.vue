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
  --main-font-size: 3vw;
  --desktop-font-size: 2vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  padding: 0;
  background-color: #F4F6F8;
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
  ************************************************************************
  FixedBanner Kuko Visuals
  ************************************************************************
*/

.fixed_banner{
  background-color: #781616;
}
.banner{
  padding: 4vw 10vw;
  color: #FFFFFF;
  font-size: 4vw;
}


/*
  ************************************************************************
  QuizComponent Kuko Visuals
  ************************************************************************
*/

.quiz_title{
  line-height: 5vw;
  padding-top: 3vw;
  width: 90%;
  margin: 0 auto;
  font-size: 5vw;
}

/*
  ************************************************************************
  ResultsComponent Kuko Visuals
  ************************************************************************
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
}



/*
  ************************************
  SingleQuestion Kuko Visuals
  ************************************
*/
.question_answers{
  width: 90%;
  margin: 0 auto;
  background-color: #FFFFFF ;
  box-shadow: -0.5vw 0.5vw 2vw gray;
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
  font-size: 3.9vw;
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
  font-size: 3.9vw;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  /*margin: 2vw 0;*/
  cursor: pointer;
  position: relative;
}
.answer.active{
  border: 1px solid darkgreen;
  background-color: seagreen;
  color: white;
  height: 8vw;
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
  background: blue;
  opacity: 0;
  transition: .3s;
}

.design::after {
  background: blue;
  opacity: .4;
  transition: .6s;
}
/* .text */
.text {
  color: inherit;
  /*font-weight: bold;*/
  margin-left: 7vw;
}


/* checked state */
input:checked+.design::before {
  opacity: 1;
  transform: scale(.6);
}


/* other states */
/*input:hover+.design,*/
input:focus+.design {
  border: 1px solid blue;
}

/*input:hover+.design:before,*/
input:focus+.design:before {
  background: blue;
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
  background-color: #417310;
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

/*
  ************************************************************************
  Tablet Kuko Visuals
  ************************************************************************
*/

@media screen and (min-width: 700px){
  .quiz_title{
    font-size: var(--main-font-size);
  }
  .banner{
    font-size: var(--main-font-size);
  }
  .question{
    font-size: 2.5vw;
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
  }
  .question{
    padding: 3vw 6vw 2.5vw 6vw;
  }
  .answers{
    padding-bottom: 1.3vw;
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
    /*text-align: center;*/
    width: 67vw;
    max-width: 1024px;
  }
  .question_answers{
    width: 67vw;
    max-width: 1024px;
    margin-top: 1.5vw;
    border-radius: 1vw;
    box-shadow: -0.3vw 0.3vw 0.5vw grey;
  }
  .banner{
    font-size: 1vw;
    padding: 1vw 2vw 0.5vw 2vw;
  }
  .answer{
    font-size: 1vw;
  }
  .design{
    width: 0.8vw;
    height: 0.8vw;
  }
  .text{
    margin-left: 1.5vw;
  }
  .question{
    font-size: 1vw;
    padding: 1vw 3vw 1vw 2vw;
  }
  .answers{
    padding-bottom: 0.5vw;
    padding-left: 3.5vw;
  }
  .answers:last-child .answer {
    margin-bottom: 1.5vw;
  }
  .results_container{
    font-size: 1vw;
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
  }
  .submit_button{
    width: 5vw;
    height: 3vw;
    border-radius: 0.5vw;
  }
}
</style>
