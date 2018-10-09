<template>
  <div class="home">
    <img 
      alt="Vue logo" 
      src="../assets/logo.png">
    <HelloWorld
      msg="我是属性hjahha" 
      v-bind="obj" 
    />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      obj: {
        name: "xjr"
      }
    };
  },
  components: {
    HelloWorld
  }
};
</script>
