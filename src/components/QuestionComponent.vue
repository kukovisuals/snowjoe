<template>
  <div class="quiz_questions_container" >
    
    <SingleQuestion :quizData="$store.state.questions" />  
    
  </div>
</template>

<script>
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

