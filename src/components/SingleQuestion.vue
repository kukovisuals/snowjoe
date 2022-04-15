<template>
  
  <div v-if="buttonClicked">
    <ResultsComponent/>
  </div>
  <form @submit.prevent="onSubmit">
    <div 
      class="question_answers"
      v-for="(quiz, index) in quizData"
      id='buttom-right-label'
      :key="index"
    >
      <form @submit.prevent>
        <p class="question" >{{index + 1}}.  {{ quiz.questions }}</p>
        <div 
          class="answers" 
          v-for="(choice) in quiz.choices"
          :key="choice"
        >    
          <label 
          class="answer"
          >  
            <input
              ref="myChoice"  
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
        <div v-if="buttonClicked" class="rightWrong">
            <p id="yesno"> </p>
        </div >
      </form>
    </div>
  
    <div class="button_container">
      <button class="submit_button" @click="buttonTriggered">Submit</button>
    </div>
  </form>

  <div v-if="buttonClicked">
    <ErrorComponent/>
  </div>
</template>

<script>
import ErrorComponent from './ErrorComponent.vue';
import ResultsComponent from './ResultsComponent.vue';
// import BottomRight from './BottomRight.vue';

export default {
  name: 'SingleQuestion',
  components: {
    ErrorComponent,
    ResultsComponent,
    // BottomRight
  },
  props: {
    quizData: Object
  },
  data(){
    return { 
      buttonClicked: false,
      resultColor: 'gray',
      getIndex: 0,

      diff: [],
     }
  },
 
  methods: {
    // we need to add the obj[index] = choice
    // if is the same index don't push more just change the value
    getChoice (e) {
      const obj = { 
        key: e.target.title, 
        value: e.target.value
      }
      // console.log( e.target.title, e.target.value)
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
      
      // console.log(a,b, unAnswered)
    
      this.diff = unAnswered

      // console.log('dif', this.diff)
      return this.diff
    },
    difference(setA, setB) {
        let _difference = new Set(setA)
        for (let elem of setB) {
            _difference.delete(elem)
        }
        return _difference
    },
    onSubmit(e){
      const childs = Object.entries(e.target.children)
      const objLen = Object.keys(this.$store.state.storeObj)

      const loopAnswers = this.$refs.myChoice

      if(objLen.length > 0){
        this.$store.commit('resultsRatio')
      }
      
      
      for(const [key, el] of childs){
        if(this.diff.has(key)){
          el.classList.add("active");
        }
        
        const lower = 4 * key
        const upper = lower + 5

        if((this.$store.state.len === this.$store.state.quizLen) && (this.$store.state.len > key)){
          console.log('err,', this.$store.state.len, key)
          if(this.$store.state.questions[key].correct_answer === this.$store.state.storeObj[key][0]){
            
            el.classList.add("gotCorrect");
            el.children[0].lastChild.innerHTML = 'Correct'
            el.children[0].lastChild.classList.add('correct')

          } else {

            el.children[0].lastChild.innerHTML = 'Wrong'
            el.children[0].lastChild.classList.add('wrong')
            el.classList.add("gotWrong");


            const newReferenceAnswers = loopAnswers.slice(lower, upper)
            
            for(const reference of newReferenceAnswers){
              if(reference.value === this.$store.state.correctObj[key]){
                // console.log('submit', reference.parentNode)
                reference.parentNode.classList.add('active')
              }
              
            }
            
          }
          
        }
      }

    }
  }
}

</script>

