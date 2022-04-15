<template>
  <FixedBanner/>
  <div class="quiz_container">

    <div class="quiz_title_component">
      <h4 class="quiz_title"> {{title}} </h4>
    </div>
    <QuestionComponent/>

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
