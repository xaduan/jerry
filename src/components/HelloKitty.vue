<template>
  <div class="hello">
    {{haha}}
    {{name}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'HelloKitty',
  props: ['msg'],
  computed: Object.assign(mapState(['name']), {
    haha() {
      return '哈哈';
    }
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>