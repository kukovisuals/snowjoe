<template>
  <FixedBanner/>
  <div class="quiz_container">

    <div class="quiz_title_component">
      <h4 class="quiz_title"> {{title}} </h4>
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
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.quiz_title{
  line-height: 5vw;
  padding-top: 3vw;
  width: 90%;
  margin: 0 auto;
  font-size: 5vw;
}
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
