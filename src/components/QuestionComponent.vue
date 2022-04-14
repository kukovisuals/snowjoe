<template>
  <div class="quiz_questions_container" >
    
    <SingleQuestion :quizData="$store.state.questions" />  
    <button>Submit</button>
      
  </div>
</template>

<script>
// import {mapMutations} from 'vuex';
import SingleQuestion from './SingleQuestion';

export default {
  name: 'QuestionComponent',
  components: {
    SingleQuestion
  },
  props:{
    questions: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  


</style>
