<template>
  <div class="home">
    {{homeState}}
    数字state{{message}}
    <Button type="primary" ghost @click="countState">点我数字state+1</Button>   
    <HelloWorld :msg="666"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
export interface HomeState {
  homeState: string;
}
@Component({
  data() {
    return {
      homeState: 'homeState'
    };
  },
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  message: number = 0;
  countState(): void {
    this.message++;
  }
}
</script>
<style lang="less" scoped>
</style>

