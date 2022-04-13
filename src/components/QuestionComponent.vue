<template>
  <div class="quiz_questions_container">
  
    <div class="question_title">
      <p>{{questionTitle}}</p>
    </div>

    <div class="question_answers">
      <li> {{questions}} </li>
    </div>

  </div>
</template>

<script>
export default {
  name: 'QuestionComponent',
  props:{
    questionTitle: String,
    questions: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  


</style>
