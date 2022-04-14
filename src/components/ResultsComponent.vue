<template>
  <div 
    class="results_container"
    v-if="$store.state.len === $store.state.quizLen"
  >
    <a class="results">
      Results
      
    </a>
    <p class="average_result">You got {{ }} / {{ }} questions correct </p>
    <h2 class="percentage"> {{ }} % </h2>
  </div>
</template>

<script>

export default {
  name: 'ResultsComponent',
}
</script>

<style scoped>  


</style>
