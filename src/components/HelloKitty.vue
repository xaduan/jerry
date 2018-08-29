<template>
  <div class="hello">
    hellokitty
  </div>
</template>

<script>
export default {
  name: "HelloKitty",
  props: {
    msg: {
      type:String,
      default:'msgq'  
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
