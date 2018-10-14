<template>
  <div class="home">
    {{homeState}}
    数字state{{message}}
    <Button type="primary" ghost @click="countState">点我数字state+1</Button> 
    {{SumNumber}}  
    <HelloWorld :msg="666"/>
    sum{{sum}}
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
  number1: number = 1;
  get SumNumber(): number {
    return this.number1 + this.message;
  }
  countState(): void {
    this.message++;
  }
}
</script>
<style lang="less" scoped>
</style>

