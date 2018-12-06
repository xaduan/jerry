<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Row>
        <Col :xs="2" :sm="4" :md="6" :lg="8"><router-link to="/">Home</router-link></Col>
        <Col :xs="20" :sm="16" :md="12" :lg="8"><router-link to="/about">About</router-link></Col>
        <Col :xs="2" :sm="4" :md="6" :lg="8"><router-link to="/about">About</router-link></Col>
    </Row>
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/views/Footer.vue'; // @ is an alias to /src

@Component({
  components: {
    Footer
  }
})
export default class App extends Vue {}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
