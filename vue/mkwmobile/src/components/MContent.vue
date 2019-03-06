<template>
  <div class="mContent">
    <section class="header-menu fixed">
      <ul>
        <li
          v-for="(link,index) in links"
          :key="index"
          :class="{cur:currentIndex==index?true:false}"
          @click="linkAddress(index)"
        >
          <router-link :to="{name:link.name,path:link.path}">{{link.text}}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
let links = [
  {
    name: "index",
    path: "/",
    text: "首页"
  },

  {
    name: "course",
    path: "/course",
    text: "课程"
  },
  {
    name: "specialColumn",
    path: "/specialColumn",
    text: "实战"
  },
  {
    name: "employmentClass",
    path: "/employmentClass",
    text: "就业班"
  },
  {
    name: "indexPage",
    path: "/",
    text: "专栏"
  },
  {
    name: "indexPage",
    path: "/",
    text: "手记"
  },
  {
    name: "indexPage",
    path: "/",
    text: "猿问"
  }
];
export default {
  name: "mcontent",
  data() {
    return {
      currentIndex: 0,
      links: links
    };
  },
  methods: {
    linkAddress: function(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.mContent {
  width: 100%;
  padding-top: 1.49333333rem;
}
.header-menu {
  height: 1.28rem;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  visibility: hidden;
}
.header-menu.fixed {
  position: fixed;
  background: #fff;
  z-index: 999;
  visibility: visible;
  top: 1.49333333rem;
}
.header-menu ul {
  display: flex;
  height: 100%;
}
.header-menu li {
  flex-grow: 1;
  text-align: center;
  position: relative;
}
.header-menu a {
  display: block;
  font-weight: 700;
  font-size: 0.42666667rem;
  color: #71777d;
  line-height: 1.28rem;
}

.header-menu li.cur a {
  color: #f01414;
}
.header-menu li.cur::before {
  display: block;
}
.header-menu li::before {
  display: none;
  content: " ";
  width: 0.21333333rem;
  height: 0.08rem;
  background: #f01414;
  border-radius: 0.04rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -0.10666667rem;
}
</style>

