<template>
  <div class="hello">
    <h1>{{ msg }}msg</h1>
    {{ name }}
    
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "默认属性"
    },
    name: {
      type: String,
      default: "aaa"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  h1 {
    color: blue;
  }
}
</style>
