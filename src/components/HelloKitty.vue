<template>
  <div class="hello">
    {{ haha }}
    {{ name }}
    我是请求的数据{{ msg2 }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
  name: 'HelloKitty',
  data() {
    return {
      msg2: null,
      number1: 1,
      number2: 2
    };
  },
  computed: Object.assign(mapState(['name']), {
    haha() {
      return this.number1 + this.number2;
    }
  }),
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      axios.get('/api/getinfo').then(response => {
        this.msg2 = response.data;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>