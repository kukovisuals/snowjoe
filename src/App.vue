<template>
  <QuizComponent title="Quiz 1 - Science: Computers"  />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  padding: 0;
}
</style>
