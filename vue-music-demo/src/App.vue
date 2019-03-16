<template>
  <div id="app">
    <MHead/>
    <MContent/>
    <div class="play-bar">
      <aplayer
      ref="aplayer"
        autoplay
        :music="{
                title: 'secret base~君がくれたもの~',
                artist: 'Silent Siren',
                src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
                pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
              }"
      />
    </div>
  </div>
</template>
 
<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MHead from "./components/MHead"
import MContent from "./components/MContent"
import Vue from "vue"
import Aplayer from "vue-aplayer"

Vue.use(Aplayer);

export default {
  name: "app",
  components: {
    MHead,
    MContent,
    Aplayer
  },
  mounted:function(){
    var aplayer=this.$refs.aplayer;
    aplayer.$el.style.margin=0;
  }
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
.play-bar{
  width:100%;
  position:fixed;
  bottom: 0;
  z-index: 100
}
</style>