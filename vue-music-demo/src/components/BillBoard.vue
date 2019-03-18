<template>
  <div class="bill-board">
    <div class="bill-board-logo">
      <img :src="TopList.coverImgUrl">
    </div>
    <div class="bill-board-logo-1">
      <img :src="TopList.coverImgUrl">
      <span class="bill-board-info">
        <div>
          <h3 class="bill-board-info-name">{{TopList.name}}</h3>
          <span class="bill-board-info-time">更新日期：{{TopList.updateTime | formatDate}}</span>
        </div>
      </span>
    </div>
    <ul class="bill-board-item">
      <li v-for="(item,index) in TopList.tracks" :key="index">
        <span
          class="bill-board-item-number"
          :class="{'bill-board-item-number1':index<3?true:false}"
        >{{(index+1)<10?'0'+(index+1):(index+1)}}</span>
        <span class="bill-board-item-content">
          <span class="bill-board-item-content-name">{{item.name}}</span>
          <span class="bill-board-item-content-arName">{{item.arName}}</span>
        </span>
        <span class="bill-board-item-content-playicon iconfont">&#xe6bf;</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { formatTimeToStr } from "../common/js/date.js";
// console.log(formatTimeToStr);
export default {
  name: "billboard",
  data() {
    return {
      TopList: {}
    };
  },
  filters: {
    formatDate: function(time) {
      if (time != null && time != "") {
        var date = new Date(time);
        return formatTimeToStr(date, "yyyy-MM-dd");
      } else {
        return "";
      }
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == "/billBoard/") {
        this.getInfo();
      }
    }
  },
  methods: {
    getInfo() {
      var that = this;
      let baseUrl = this.$apiUrl.BaseUrl;
      this.$getHttp(
        baseUrl + this.$apiUrl.TopList + this.$route.query.billBoradId
      ).then(function(res) {
        if (res.data.code == 200) {
          var itemObj = res.data.playlist;
          var temObj = {};
          temObj["name"] = itemObj.name;
          temObj["coverImgUrl"] = itemObj.coverImgUrl;
          temObj["updateTime"] = itemObj.updateTime;
          var temArr = [];
          for (var t = 0; t < 20; t++) {
            var obj = itemObj.tracks[t];
            temArr.push({
              id: obj.id,
              name: obj.name,
              arName: obj.ar[0].name
            });
          }
          temObj["tracks"] = temArr;
          that.TopList = temObj;
        }
      });
    }
  },
  created: function() {
    this.getInfo();
  }
};
</script>
<style scoped lang="scss">
@import "../common/css/base.scss";
.bill-board {
  position: relative;
  margin-top: px2em(8);
}
.bill-board-logo {
  height: px2em(100);
  overflow: hidden;
  width: 100%;
  padding: 0 10px 0 15px;
  box-sizing: border-box;
}
.bill-board-logo img {
  width: 100%;
  height: px2em(100);
  filter: blur(30px);
  transform: translate3D(0, 0, 0);
}
.bill-board-logo-1 {
  height: px2em(100);
  overflow: hidden;
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0px;
}

.bill-board-logo-1 img {
  width: px2em(100);
  height: px2em(100);
}
.bill-board-info {
     margin-left: px2em(15);
  display: flex;
  justify-content: center;
  align-items: center;
}
.bill-board-info-name {
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  display: inline-block;
  color: #f4f4f4;
}
.bill-board-info-time {
  font-size: 12px;
  width: 100%;
  display: inline-block;
  color: #f4f4f4;
  margin-top: px2em(5);
}

.bill-board-item {
  width: 100%;
  height: px2em(55);
  padding-left: px2em(10);
  box-sizing: border-box;
}
.bill-board-item li {
  width: 100%;
  height: px2em(55);
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  line-height: px2em(55);
  padding: px2em(6) 0;
  box-sizing: border-box;
}
.bill-board-item-number {
  display: inline-block;
  //   text-align: center;
  width: px2em(28);
  font-size: 17px;
  line-height: px2em(42);
}
.bill-board-item-number1 {
  color: #df3436;
}
.bill-board-item-content {
  //   flex-grow: 1;
  width: px2em(240);
  overflow: hidden;
}
.bill-board-item-content .bill-board-item-content-name {
  display: block;
  width: 100%;
  height: px2em(25);
  line-height: px2em(25);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
  font-size: 17px;
  color: #333;
}
.bill-board-item-content .bill-board-item-content-arName {
  display: block;
  width: 100%;
  height: px2em(18);
  line-height: px2em(18);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
  font-size: 12px;
  color: #888;
}
.bill-board-item-content-playicon {
  display: inline-block;
  color: #b2b2b2;
  font-size: 22px;
  line-height: 42px;
}
</style>

