<template>
  <div class="mhead">
    <div class="m-top"></div>
    <ul>
      <li
        v-for="(link,index) in links"
        :key="index"
        @click="changeNav(index)"      
      >
        <router-link :to="{name:link.name,path:link.path}"   :class="{'activeCls':currentIndex==index?true:false}">{{link.text}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Cookies} from '@/common/js/cookies'
// Cookies.set("key",1);
// console.log(Cookies.get("key"));
let links = [
  {
    name: "index",
    path: "/",
    text: "推荐"
  },
   {
    name: "songList",
    path: "/songList",
    text: "排行榜"
  }
 ,
  {
    name: "search",
    path: "/search",
    text: "搜索"
  }
];
export default {
  name: "mhead",
  data() {
    return {
      links: links,
      currentIndex: Cookies.get("nav")?Cookies.get("nav"):0
    };
  },
  methods: {
    changeNav: function(index) {
      this.currentIndex = index;
      Cookies.set("nav",index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../common/css/base.scss";
.m-top {
  width: 100%;
  height: px2em(40);
  background-color: #1da0ef;
}
.mhead {
  width: 100%;
  height: px2em(40);
  position: fixed;
  z-index: 3;
  height: px2em(80);
  background-color:#fff;
}
.mhead ul {
  width: 100%;
  height: px2em(40);
  display: flex;
}
.mhead ul li {
  flex-grow: 1;
  height: px2em(40);
}
.mhead ul li a {
  flex-grow: 1;
  height: px2em(40);
  display: block;
  line-height: px2em(40);
  text-align: center;
  color: #333;
  font-size: px2em(15);
}
.mhead ul li a.activeCls {
  color: #2095dd;
  border-bottom: 2px solid #2095dd;
}
a:hover {
  text-decoration: none;
}
</style>
