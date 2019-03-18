<template>
  <div id="app">
    <MHead/>
    <MContent/>
    <div class="play-bar">
      <aplayer
        ref="aplayer"
        autoplay="true"
        showLrc="true"
        :music="playPrama['music']"
        v-if="playPrama['flag']"
        :list="playPrama['list']"
      />
    </div>
  </div>
</template>
 
<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MHead from "./components/MHead";
import MContent from "./components/MContent";
import Vue from "vue";
import Aplayer from "vue-aplayer";
import { mapState } from "vuex";

Vue.use(Aplayer);

export default {
  name: "app",
  components: {
    MHead,
    MContent,
    Aplayer
  },
  watch: {
    playPrama: {
      deep: true,
      handler: function(newVal, oldVal) {
        this.$nextTick(function() {
          if (newVal.flag) {
            var aplayer = this.$refs.aplayer;
            aplayer.$el.style.margin = 0;
            if (newVal.list.length > 0) {
              aplayer.$children[3].$refs.list.style =
                "height:" +
                window.innerHeight * 0.3 +
                "px;overflow-y:auto;max-height:250px";
            }
          }
        });
      }
    }
  },
  computed: mapState({
    playPrama: state => state.playPrama
  }),
  mounted: function() {}
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
.play-bar {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
</style>