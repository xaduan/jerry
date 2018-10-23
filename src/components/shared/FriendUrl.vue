<template>
  <div class="friend-url">
    <a 
      :href="url" 
      target="_blank" 
      rel="noopener noreferrer">{{ name }}</a>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FriendUrl extends Vue {
  @Prop()
  private url!: string;
  @Prop()
  private name!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.friend-url {
  width: 100%;
  font-size: 16px;
  a {
    color: #42b983;
  }
}
</style>
