<template>
  <div class="index">
    <div class="i-slide" v-if="false">
      <mt-swipe>
        <mt-swipe-item :key="index" v-for="(item, index) in items">
          <img :src="item.imageUrl">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="m-i-content">
      <div class="m-i-content-list">
        <div class="m-i-content-list-head" v-if="false">
          <span>推荐歌单</span>
          <span class="iconfont">更多</span>
        </div>
        <div class="m-i-content-list-item">
          <ul>
            <li v-for="(item,index) in listPersonalized" :key="index" @click="goLink(item)">
              <span class="pic-item">
                <span class="pic-content">
                  <img :src="item.picUrl" :alt="item.name">
                  <span class="item-bottom">
                    <span class="play-icon iconfont">&#xe624;</span>
                    <span class="play-count"></span>
                    <span class="play-button iconfont">&#xe6bf;</span>
                  </span>
                </span>
                <span class="pic-title">{{item.name}}</span>
              </span>
            </li>
          </ul>
        </div>
        <div class="m-i-content-list-head" v-if="false">
          <span>精选歌单</span>
          <span class="iconfont">更多</span>
        </div>
        <div class="m-i-content-list-item" v-if="false">
          <ul>
            <li v-for="(item,index) in listTop" :key="index">
              <span class="pic-item">
                <span class="pic-content">
                  <img :src="item.coverImgUrl" :alt="item.name">
                  <span class="item-bottom">
                    <span class="play-icon iconfont">&#xe624;</span>
                    <span class="play-count"></span>
                    <span class="play-button iconfont">&#xe6bf;</span>
                  </span>
                </span>
                <span class="pic-title">{{item.name}}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      items: [],
      listPersonalized: [],
      swiperOption: {
        slidesPerView: 4,
        freeMode: true,
        autoplay: true,
        grabCursor: true,
        loopFillGroupWithBlank: true
      },
      listTop: []
    };
  },
  methods: {
    goLink(item) {
      this.$router.push({
        name: "indexpagedetail",
        params: {
          PlayListDetailId: item.id,
          picUrl: item.picUrl,
          name: item.name,
          playCount: item.playCount
        }
      });
    }
  },
  created: function() {
    // console.log(new this.$apiUrl());
    let that = this;
    let baseUrl = this.$apiUrl.BaseUrl;
    //banner数据
    // this.$getHttp(baseUrl + this.$apiUrl.Banner).then(function(res) {
    //   if (res.data.code == 200) {
    //     var itemObj = res.data.banners;
    //     for (var item in itemObj) {
    //       var obj = itemObj[item];
    //       that.items.push({
    //         url: "javascript;",
    //         imageUrl: obj.imageUrl
    //       });
    //     }
    //   }
    // });
    //热门推荐数据
    this.$nextTick(function() {
      this.$getHttp(baseUrl + this.$apiUrl.Personalized).then(function(res) {
        if (res.data.code == 200) {
          var itemObj = res.data.result;
          var temArr = [];
          for (var t = 0; t < 10; t++) {
            var obj = itemObj[t];
            temArr.push({
              id: obj.id,
              name: obj.name,
              copywriter: obj.copywriter,
              picUrl: obj.picUrl,
              canDislike: obj.canDislike,
              playCount: obj.playCount,
              highQuality: obj.highQuality,
              alg: obj.alg
            });
          }
          that.listPersonalized = temArr;
        }
      });
    });

    //精选歌单
    // this.$getHttp(baseUrl + this.$apiUrl.HotPlayList).then(function(res) {
    //   if (res.data.code == 200) {
    //     var itemObj = res.data.playlists;
    //     var temArr = [];
    //     for (var t = 0; t < itemObj.length; t++) {
    //       var obj = itemObj[t];
    //       temArr.push({
    //         playCount: obj.playCount,
    //         id: obj.id,
    //         coverImgUrl: obj.coverImgUrl,
    //         name: obj.name
    //       });
    //     }
    //     that.listTop = temArr;
    //   }
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../common/css/base.scss";
.i-slide {
  width: 100%;
  height: px2em(128);
}
.i-slide img {
  width: 100%;
  height: 100%;
  display: block;
}
.m-i-content {
  width: px2em(300);
  margin: 0 auto;
  // margin-top: px2em(10);
}
.m-i-content-list-head {
  width: 100%;
  height: px2em(38);
  border-bottom: 2px solid #1da0ef;
  box-sizing: border-box;
}
.m-i-content-list-head > span {
  display: inline-block;
  height: px2em(38);
  line-height: px2em(38);
  color: #333;
}
.m-i-content-list-head > span:first-child {
  float: left;
  font-size: px2em(16);
  position: relative;
  padding-left: px2em(25);
}
.m-i-content-list-head > span:first-child::before {
  display: inline-block;
  content: "";
  height: px2em(14);
  border: px2em(4) solid #1da0ef;
  width: px2em(14);
  border-radius: 50%;
  box-sizing: border-box;
  position: absolute;
  margin-left: -1 * px2em(20);
  position: absolute;
  top: 50%;
  margin-top: -1/2 * px2em(14);
}
.m-i-content-list-head > span:last-child {
  float: right;
  margin-right: px2em(25);
  font-size: px2em(12);
  position: relative;
  visibility: hidden;
}
.m-i-content-list-head > span:last-child::after {
  content: "\e6c6";
  position: absolute;
  color: #1da0ef;
  font-size: px2em(25);
  width: px2em(30);
}
.m-i-content-list-item {
  width: 100%;
  height: auto;
  overflow-x: hidden;
  // margin-top: px2em(10);
}
.m-i-content-list-item > ul {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: px2em(8);
}
.m-i-content-list-item > ul > li {
  display: block;
  width: px2em(146);
  margin-bottom: px2em(8);
}
.m-i-content-list-item > ul > li:nth-child(2n + 1) {
  margin-right: px2em(8);
}

.m-i-content-list-item > ul > li img {
  display: block;
  width: 100%;
  height: 100%;
}
.m-i-content-list-item .pic-content {
  position: relative;
  width: 100%;
  display: inline-block;
}

.m-i-content-list-item .pic-content > .item-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: px2em(46);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-bottom span {
  display: inline-block;
  font-size: 24px;
  color: #f1e4f0;
}
.item-bottom .play-icon {
  margin-left: px2em(5);
  font-size: 12px;
  display: none;
}
.item-bottom .play-icon1 {
  margin-left: px2em(5);
  font-size: 12px;
}
.item-bottom .play-count {
  font-size: 12px;
}
.item-bottom .play-button {
  margin-right: px2em(5);
  display: inline-block;
  // background-color: rgba($color: #000000, $alpha: 0.5);
  // border-radius: 50%;
}

.m-i-content-list-item .pic-title {
  width: px2em(120);
  display: inline-block;
  line-height: px2em(18);
  height: px2em(36);
  font-size: 14px;
  margin-top: px2em(6);
  white-space: normal;
  word-wrap: break-word;
  overflow: hidden;
  padding: 0 px2em(7);
}
</style>
