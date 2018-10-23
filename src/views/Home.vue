<template>
  <div class="home">
    数字state{{ message }}
    <Button 
      type="primary" 
      ghost 
      @click="countState">点我数字state+1</Button> 
    {{ SumNumber }}  
    <HelloWorld :msg="666"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Axios from 'axios';
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  @Provide()
  message: number = 0;
  @Provide()
  number1: number = 1;
  @Provide()
  msg2: any = 1;
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}
  get SumNumber(): number {
    return this.number1 + this.message;
  }
  countState(): void {
    this.message++;
  }
  async mounted() {
    await Axios.get('/api/getinfo').then(response => {
      this.msg2 = response.data;
    });
  }
}
</script>
<style lang="less" scoped>
</style>

