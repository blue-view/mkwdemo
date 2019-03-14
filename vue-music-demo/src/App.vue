<template>
  <div id="app">
    <MHead/>
    <MContent/>
  </div>
</template>
 
<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MHead from "./components/MHead";
import MContent from "./components/MContent";

export default {
  name: "app",
  components: {
    MHead,
    MContent
  },
};
</script>

<style lang="scss">
@import "@/common/css/base.scss";
@font-face {
  font-family: "iconfont";
  src: url("./assets/iconfont/iconfont.eot");
  src: url("./assets/iconfont/iconfont.eot?#iefix") format("embedded-opentype"),
    url("./assets/iconfont/iconfont.woff2") format("woff2"),
    url("./assets/iconfont/iconfont.woff") format("woff"),
    url("./assets/iconfont/iconfont.ttf") format("truetype"),
    url("./assets/iconfont/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>