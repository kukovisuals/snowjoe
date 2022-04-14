<template>
  
  
  <div 
    class="question_answers"
    v-for="(quiz, index) in quizData"
    :key="quiz.question"    
  >
    <form @submit.prevent="add_answer">
      <p class="question" >{{ quiz.questions }}</p>
      <div 
        class="answers" 
        v-for="choice in quiz.choices"
        :key="choice"
      >
        
          
        <input 
          type="radio"  
          name="choice"
          :title="index"
          :value="choice" 
          @input="getChoice"
        >
        <label 
        class="answer"
        >
          {{choice}} 
        </label>
     

      </div>
    </form>
  </div>
</template>

<script>
// import {mapState} from 'vuex';
export default {
  name: 'SingleQuestion',
  props: {
    quizData: Object
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
.question_answers{
  border: 1px solid black;
  margin-top: 5vw;
}
.question{
  border: 1px solid blue;
  padding: 3vw 6vw 4vw 5vw;
  font-size: 4vw;
}
.answers{
  padding-left: 4vw;
  padding-bottom: 2.5vw;
}
.answer{
  padding-left: 1vw;
  font-size: 3vw;
}
</style>


