<template>
  <div class="footer">友情链接
    <FriendUrl name="Jie's blog" url="http://ilog.vip/"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FriendUrl from "@/components/shared/FriendUrl.vue"; // @ is an alias to /src
@Component({
  components: {
    FriendUrl
  }
})
export default class Footer extends Vue {}
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0px;
}
</style>

