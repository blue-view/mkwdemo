<template>
  <div class="employmentclass" id="class-page-index">
    <nav>
      <ul class="nav-list">
        <li class="nav-item" v-for="ep in employmentClassList" :key="ep.id">
          <router-link  :to='{path:ep.url,query:{empid:ep.empid}}'>
            <div class="item-info">
              <div class="i-title">{{ep.title}}</div>
              <div class="i-desc">{{ep.desc}}</div>
              <div class="i-step">
                <span>{{ep.step.steptotal}}个阶段</span>
                <span>{{ep.step.timetotal}}小时</span>
                <span>{{ep.step.peopletotal}}人学习</span>
              </div>
            </div>
            <div class="item-icon">
              <img :src="ep.src">
            </div>
          </router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "employmentclass",
  props: {
    msg: String
  },
  data() {
    return {
      employmentClassList: null
    };
  },
  mounted() {
    axios
      .get("api/getEmploymentClass")
      .then(res => {
        // console.log(res)
        this.employmentClassList = res.data.list;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
#class-page-index nav .nav-list {
  width: 100%;
  background: #f3f5f7;
  box-sizing: border-box;
  padding-top: 0.32rem;
  padding-left: 0.42666667rem;
  padding-right: 0.42666667rem;
}
#class-page-index nav .nav-list .nav-item {
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(217, 221, 225, 0.3);
  box-sizing: border-box;
  position: relative;
  padding-top: 0.32rem;
  padding-bottom: 0.32rem;
  padding-left: 0.42666667rem;
  padding-right: 0.42666667rem;
  margin-bottom: 0.32rem;
  height: 3.41333333rem;
  border-radius: 0.10666667rem;
}
#class-page-index nav .nav-list .nav-item .item-info {
  width: 5.54666667rem;
  text-align: left;
}
#class-page-index nav .nav-list .nav-item .item-info .i-title {
  font-size: 0.42666667rem;
  font-weight: 700;
  position: relative;
  color: #2b333b;
  display: inline-block;
  z-index: 1;
}
#class-page-index nav .nav-list .nav-item .item-info .i-desc {
  font-size: 0.32rem;
  line-height: 0.42666667rem;
  padding-top: 0.06666667rem;
  padding-bottom: 0.10666667rem;
  color: #71777d;
}
#class-page-index nav .nav-list .nav-item .item-icon {
  width: 2.13333333rem;
  height: 2.13333333rem;
  right: 0.53333333rem;
  top: 0.8rem;
  position: absolute;
  overflow: hidden;
}
#class-page-index nav .nav-list .nav-item .item-info .i-step {
  font-size: 0.32rem;
  color: #71777d;
  white-space: nowrap;
}
#class-page-index nav .nav-list .nav-item .item-icon img {
  width: 100%;
  height: 100%;
}
#class-page-index nav .nav-list .nav-item .item-info .i-step span:nth-child(2) {
  margin-left: 0.42666667rem;
  margin-right: 0.42666667rem;
  position: relative;
}
#class-page-index nav .nav-list .nav-item .item-info .i-step span {
  white-space: nowrap;
}
#class-page-index
  nav
  .nav-list
  .nav-item
  .item-info
  .i-step
  span:nth-child(2)::before {
  left: -0.26666667rem;
}
#class-page-index
  nav
  .nav-list
  .nav-item
  .item-info
  .i-step
  span:nth-child(2)::before,
body
  #class-page-index
  nav
  .nav-list
  .nav-item
  .item-info
  .i-step
  span:nth-child(2)::after {
  content: "";
  border-radius: 50%;
  background: #71777d;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 0.06666667rem;
  width: 0.06666667rem;
}
#class-page-index
  nav
  .nav-list
  .nav-item
  .item-info
  .i-step
  span:nth-child(2)::after {
  right: -0.26666667rem;
}
</style>


