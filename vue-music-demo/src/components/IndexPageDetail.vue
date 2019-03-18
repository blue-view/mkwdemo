<template>
  <div class="indexPage-detail">
    <div class="indexPage-detail-logo">
      <img :src="this.$route.params.picUrl">
    </div>
    <div class="indexPage-detail-logo-1">
      <img :src="this.$route.params.picUrl">
      <span class="indexPage-detail-info">
        <span class="indexPage-detail-info-title">{{this.$route.params.name}}</span>
        <span class="indexPage-detail-info-tags">
          <span class="indexPage-detail-info-tags-list">
            <span
              :key="tag+index"
              v-for="(tag,index) in (PlayListDetail.tags)"
              class="indexPage-detail-info-tags-item"
            >{{tag}}</span>
          </span>
          <span>播放次数：{{parseInt(this.$route.params.playCount) }}</span>
        </span>
      </span>
    </div>
    <ul class="indexPage-detail-item">
      <li v-for="(item,index) in PlayListDetail.tracks" :key="index">
        <span class="indexPage-detail-item-content">
          <span class="indexPage-detail-item-content-name">{{item.name}}</span>
          <span class="indexPage-detail-item-content-arName">{{item.arName}}</span>
        </span>
        <span class="indexPage-detail-item-content-playicon iconfont">&#xe6bf;</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "billboard",
  data() {
    return {
      PlayListDetail: {}
    };
  },
  watch: {
    $route(to, from) {
      if (to.path == "/") {
        this.getInfo();
      }
    }
  },
  methods: {
    getInfo() {
      var that = this;
      let baseUrl = this.$apiUrl.BaseUrl;
      this.$getHttp(
        baseUrl +
          this.$apiUrl.PlayListDetail +
          this.$route.params.PlayListDetailId
      ).then(function(res) {
        if (res.data.code == 200) {
          var itemObj = res.data.playlist;
          var temObj = {};
          temObj["tags"] = itemObj.tags;
          temObj["coverImgUrl"] = itemObj.coverImgUrl;
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
          that.PlayListDetail = temObj;
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
.indexPage-detail {
  position: relative;
}
.indexPage-detail-logo {
  height: px2em(150);
  overflow: hidden;
  width: 100%;
  //   padding: 0 10px 0 15px;
  box-sizing: border-box;
  padding: px2em(25) px2em(17);
}
.indexPage-detail-logo img {
  width: 100%;
  height: px2em(150);
  filter: blur(30px);
  transform: translate3D(0, 0, 0);
}
.indexPage-detail-logo-1 {
  height: px2em(100);
  overflow: hidden;
  //   width: 100%;
  display: flex;
  position: absolute;
  top: px2em(25);
  left: px2em(17);
}

.indexPage-detail-logo-1 img {
  width: px2em(100);
  height: px2em(100);
}
.indexPage-detail-info {
  margin: 0 px2em(15);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
}
.indexPage-detail-info-title {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  width: 100%;
  height: 40px;
  overflow: hidden;
  color: #fff;
}
.indexPage-detail-info-tags {
  color: #fff;
  font-size: 12px;
  line-height: 12px;
}
.indexPage-detail-info-tags-list {
  display: block;
  width: 100%;
  margin-bottom: px2em(8);
}
.indexPage-detail-info-tags-item {
  margin-right: 5px;
  width: 100%;
}
.indexPage-detail-info-name {
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  display: inline-block;
  color: #f4f4f4;
}

.indexPage-detail-item {
  width: 100%;
  height: px2em(55);
  padding-left: px2em(10);
  box-sizing: border-box;
}
.indexPage-detail-item li {
  width: 100%;
  height: px2em(55);
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  line-height: px2em(55);
  padding: px2em(6) 0;
  box-sizing: border-box;
}
.indexPage-detail-item-number {
  display: inline-block;
  width: px2em(28);
  font-size: 17px;
  line-height: px2em(42);
}
.indexPage-detail-item-number1 {
  color: #df3436;
}
.indexPage-detail-item-content {
  //   flex-grow: 1;
  width: px2em(268);
  overflow: hidden;
}
.indexPage-detail-item-content .indexPage-detail-item-content-name {
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
.indexPage-detail-item-content .indexPage-detail-item-content-arName {
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
.indexPage-detail-item-content-playicon {
  display: inline-block;
  color: #b2b2b2;
  font-size: 22px;
  line-height: 42px;
}
</style>

