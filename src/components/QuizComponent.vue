<template>
  <FixedBanner/>
  <div class="quiz_container">

    <div class="quiz_title_component">
      <p class="quiz_title"> {{title}} </p>
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
