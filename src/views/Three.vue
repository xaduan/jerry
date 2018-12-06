<template>
  <div class="home">
    数字state{{ message }}
    <Button 
      type="primary" 
      ghost 
      @click="countState(1)">点我数字state+1</Button> 
    {{ SumNumber }}  
    <HelloWorld :msg="666"/>
    <Input v-model="stringValue" placeholder="首字母转大写filter" style="width: 300px" />
    {{stringValue | capitalize}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Axios from 'axios';
Vue.filter('capitalize', function(value: string) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
interface Person {
  name: string;
  age: number;
}
@Component({
  components: {
    HelloWorld
  }
})
export default class Three extends Vue {
  message: number = 0;
  number1: number = 1;
  msg2: any = 1;
  stringValue: string = '';
  person: Person = {
    name: 'zhangsan',
    age: 18
  };
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}
  get SumNumber(): number {
    return this.number1 + this.message;
  }
  countState(param: string): void {
    console.log(param);

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

