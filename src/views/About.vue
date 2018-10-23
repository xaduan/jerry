<template>
  <div class="home">
   about
   <HelloKitty/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator';
import HelloKitty from '@/components/HelloKitty.vue'; // @ is an alias to /src
@Component({
  components: {
    HelloKitty
  }
})
export default class About extends Vue {}
</script>
<style lang="less" scoped>
</style>

