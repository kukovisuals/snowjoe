<template>
  
  <div v-if="buttonClicked">
    <ResultsComponent/>
  </div>
  <div 
    class="question_answers"
    :style="{boxShadow: '-0.5vw 0.5vw 2vw ' + resultColor}"
    v-for="(quiz, index) in quizData"
    :key="quiz.question"    
  >
    <form @submit.prevent="addAnswers">
      <p class="question" >{{ quiz.questions }}</p>
      <div 
        class="answers" 
        v-for="choice in quiz.choices"
        :key="choice"
      >
        
        <label 
        class="answer"
        >  
          <input 
            class="radio_input" 
            type="radio"  
            name="choice"
            :title="index"
            :value="choice" 
            @input="getChoice"
          >
          <span class="design"></span>
          <span class="text">{{choice}} </span>
          
        </label>
     

      </div>
    </form>
  </div>
  <div class="button_container">
    <button class="submit_button" @click="buttonTriggered">Submit</button>
  </div>
  <div v-if="buttonClicked">
    <ErrorComponent/>
  </div>
</template>

<script>
import ErrorComponent from './ErrorComponent.vue';
import ResultsComponent from './ResultsComponent.vue';
export default {
  name: 'SingleQuestion',
  components: {
    ErrorComponent,
    ResultsComponent
  },
  props: {
    quizData: Object
  },
  data(){
    return { 
      buttonClicked: false,
      resultColor: 'gray',
      getIndex: 0
     }
  },
  computed:{
    
  },
  methods: {
    // we need to add the obj[index] = choice
    // if is the same index don't push more just change the value
    getChoice (e) {

      const obj = { 
        key: e.target.title, 
        value: e.target.value
      }
      console.log( e.target.title, e.target.value)
      this.$store.commit('answersArray',obj)
    },
    // get the indexes and check which index is not answered
    // if is not in the object then turn yellow else black
    buttonTriggered() {
      this.buttonClicked = !this.buttonClicked;
      this.boxColor()

    },
    boxColor(){
      const a = Object.keys(this.$store.state.questions)
      const b = Object.keys(this.$store.state.storeObj)
      
      let unAnswered = this.difference(new Set(a), new Set(b))
      
      console.log(a,b, unAnswered)
      if(this.$store.state.len === this.$store.state.quizLen){
        this.resultColor = 'gray'
      } else {
        this.resultColor = '#BDAB1D'
      }
      return ' -0.5vw 0.5vw 2vw ' + this.resultColor
    },
    difference(setA, setB) {
        let _difference = new Set(setA)
        for (let elem of setB) {
            _difference.delete(elem)
        }
        return _difference
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.question_answers{
  width: 90%;
  margin: 0 auto;
  background-color: #FFFFFF ;
  /*box-shadow: -0.5vw 0.5vw 2vw;*/
  /*border: 1px solid black;*/
  border-radius: 4%;
  margin-top: 5vw;
}
.question{
  /*border: 1px solid blue;*/
  padding: 3vw 6vw 4vw 5vw;
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


.answer{
  /*padding-left: 2.6vw;*/
  font-size: 3.9vw;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  margin: 2vw 0;

  cursor: pointer;
  position: relative;
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
}
</style>


