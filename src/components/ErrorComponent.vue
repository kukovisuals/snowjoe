<template>
  <div 
    class="error_container"
    v-if="$store.state.len !== $store.state.quizLen"
  >
    <p class="error_message">
      Answer all questions before submitting. Unanswered questions are displayed in yellow.
      }
    </p>
  </div>
</template>

<script>

export default {
  name: 'ErrorComponent',
}
</script>

<style scoped> 
.error_container{
  width: 80%;
  margin: 0 auto;
} 
.error_message{
  color:  #fa1800;
  text-align: center;
  padding-bottom: 10vw;
}

</style>
