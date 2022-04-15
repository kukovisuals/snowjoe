<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'BottomRight',
}
</script>

<style scoped> 
.rightWrong{
	float: right;
	top: -6vw;
	position: relative;
	right: 3vw;
} 

</style>
