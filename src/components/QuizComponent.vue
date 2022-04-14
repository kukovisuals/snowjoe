<template>
  <FixedBanner/>
  <div class="quiz_container">

    <div class="quiz_title">
      <h1> {{title}} </h1>
    </div>

    <QuestionComponent 
    
    />

  </div>
</template>

<script>
import FixedBanner from './FixedBanner.vue';
import QuestionComponent from './QuestionComponent.vue'

export default {
  name: 'HelloWorld',
  components:{
    FixedBanner,
    QuestionComponent
  },
  props: {
    data: Object,
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.fix_banner{
  background-color: red;
}
</style>
