<template>
  <div 
    class="results_container"
    v-if="$store.state.len === $store.state.quizLen"
  >
    <a class="results">
      Results
      
    </a>
    <p class="average_result">You got {{ $store.state.gotRight}} / 
    {{ $store.state.len }} questions correct </p>
    <h2 class="percentage"> {{ percentageResult}} % </h2>
  </div>
</template>

<script>

export default {
  name: 'ResultsComponent',
  computed:{
    percentageResult(){
      let percent = 0
      let answer = 0
      percent = this.$store.state.gotRight / this.$store.state.len
      if (Number.isInteger(percent)) {
        answer = percent
      } else {
        answer = (percent * 100).toFixed(2)
      }
      return answer
    }
  }
}
</script>

<style scoped>  

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
</style>
