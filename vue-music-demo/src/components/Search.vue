<template>
  <div class="search">
    <mt-search
      v-model="keyWord"
      :autofocus="true"
      cancel-text="取消"
      placeholder="搜索歌曲、歌单、专辑"
      @focus.native="hideSearchKeyWord"
      @keyup.enter.native="searchSong(keyWord)"
    >
      <!-- <p class="page-loadmore-desc">translate : {{ translate }}</p> -->
      <div
        class="loading-background"
        :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }"
      >
        <!-- translateScale : {{ moveTranslate }} -->
      </div>
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore
          :top-method="loadTop"
          @translate-change="translateChange"
          :bottom-method="loadBottom"
          @bottom-status-change="handleBottomChange"
          :bottom-all-loaded="allLoaded"
          ref="loadmore"
        >
          <!-- @top-status-change="handleTopChange" -->
          <div :key="item.id" v-for="item in songs.temArr" class="m-search-list">
            <span class="iconfont m-search-list-l">&#xe9d5;</span>
            <span class="m-search-list-r">
              <span class="m-search-list-l-title-cls">{{item.keyWord}}</span>
              <span class="m-search-list-l-value-cls">{{item.artistsName}}-{{item.albumName}}</span>
            </span>
          </div>
          <!-- <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>-->
          <div slot="bottom" class="mint-loadmore-bottom">
            <span
              v-show="bottomStatus !== 'loading'"
              :class="{ 'is-rotate': bottomStatus === 'drop' }"
            >↑</span>
            <span v-show="bottomStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
        </mt-loadmore>
      </div>
    </mt-search>
    <div class="searchHot" v-show="isShowSearchHot">
      <h3 class="result_tit">热门搜索</h3>
      <span v-for="(item,index) in hotSearch" :key="index" @click="searchSong(item.first)">
        {{
        item.first
        }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data: function() {
    return {
      keyWord: "",
      songs: {},
      hotSearch: [],
      isShowSearchHot: true,
      allLoaded: false,
      bottomStatus: "",
      wrapperHeight: 0,
      topStatus: "",
      translate: 0,
      moveTranslate: 0,
      currentPage: 1
    };
  },

  watch: {
    keyWord(newValue, oldValue) {
      if (newValue) {
        this.isShowSearchHot = false;
      } else {
        this.isShowSearchHot = true;
      }
    }
  },
  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  },
  methods: {
    loadBottom() {
      var that = this;
      var totalData = this.songs["temArr"];
      var totalValue = this.songs["songCount"];
      var limit = 10;
      var baseUrl = this.$apiUrl.BaseUrl;
      var pageTotal =
        totalValue % limit == 0
          ? parseInt(totalValue / limit)
          : parseInt(totalValue / limit) + 1;
      var lastValue = 0;
      this.currentPage = this.currentPage + 1;

      var url =
        baseUrl +
        this.$apiUrl.Search +
        this.keyWord +
        "&offset=" +
        (this.currentPage - 1) * limit +
        "&limit=" +
        limit;
      if (lastValue < totalValue) {
        this.$getHttp(url).then(function(res) {
          if (res.data.code == 200) {
            var itemObj = res.data.result.songs;
            for (var t in itemObj) {
              var obj = itemObj[t];
              that.songs["temArr"].push({
                id: obj.id,
                artistsName: obj.artists[0] && obj.artists[0].name,
                albumName: obj.album && obj.album.name,
                keyWord: obj.name
              });
            }
          }
        });
      } else {
        this.allLoaded = true;
      }
      this.$refs.loadmore.onBottomLoaded();
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    // handleTopChange(status) {
    //   this.moveTranslate = 1;
    //   this.topStatus = status;
    // },
    translateChange(translate) {
      const translateNum = +translate;
      this.translate = translateNum.toFixed(2);
      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    },
    searchSong(keyWord) {
      if (keyWord != "") {
        var that = this;
        this.keyWord=keyWord;
        var baseUrl = this.$apiUrl.BaseUrl;
        this.$getHttp(
          baseUrl +
            this.$apiUrl.Search +
            keyWord +
            "&offset=" +
            this.currentPage +
            "&limit=20"
        ).then(function(res) {
          if (res.data.code == 200) {
            var itemObj = res.data.result.songs;
            var temObj = {};
            temObj["songCount"] = res.data.result.songCount;
            var temArr = [];
            for (var t in itemObj) {
              var obj = itemObj[t];
              temArr.push({
                id: obj.id,
                artistsName: obj.artists[0] && obj.artists[0].name,
                albumName: obj.album && obj.album.name,
                keyWord: obj.name
              });
            }
            // temObj["showData"] = temArr.slice(0, 10);
            temObj["temArr"] = temArr;
            that.songs = temObj;
          }
        });
      }
    }
  },
  created: function() {
    var that = this;
    let baseUrl = this.$apiUrl.BaseUrl;
    this.$getHttp(baseUrl + this.$apiUrl.SearchHot).then(function(res) {
      if (res.data.code == 200) {
        var itemObj = res.data.result.hots;
        var temArr = [];
        for (var t = 0; t < itemObj.length; t++) {
          var obj = itemObj[t];
          temArr.push({
            first: obj.first,
            second: obj.second,
            third: obj.third,
            iconType: obj.iconType
          });
        }
        that.hotSearch = temArr;
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../common/css/base.scss";
.m-search-list {
  width: 100%;
  height: px2em(56);
  border-bottom: 1px solid #ccc;
  display: flex;
  box-sizing: border-box;
  background: #fff;
}
.m-search-list-l {
  width: px2em(55);
  line-height: px2em(56);
  text-align: center;
  font-size: 26px;
  color: #b4b4b4;
}
.m-search-list-r {
  width: px2em(255);
  overflow: hidden;
}
.m-search-list-l-title-cls {
  width: 100%;
  font-size: 16px;

  color: #000;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: px2em(8);
}
.m-search-list-l-value-cls {
  width: 100%;
  color: gray;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.searchHot .result_tit {
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 8px;
  font-size: 14px;
}
.searchHot {
  background: #fff;
  padding: 15px 15px 10px 15px;
}
.searchHot span {
  display: inline-block;
  font-size: 14px;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 99px;
  word-break: keep-all;
  margin-bottom: 10px;
  margin-right: 14px;
}

.mint-loadmore-top span {
  display: inline-block;
  vertical-align: middle;
}

.mint-loadmore-top span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.page-loadmore .mint-spinner {
  display: inline-block;
  vertical-align: middle;
}

.page-loadmore-desc {
  text-align: center;
  color: #666;
  padding-bottom: 5px;
}

.page-loadmore-desc:last-of-type,
.page-loadmore-listitem {
  border-bottom: 1px solid #eee;
}

.page-loadmore-listitem {
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.page-loadmore-listitem:first-child {
  border-top: 1px solid #eee;
}

.page-loadmore-wrapper {
  overflow: scroll;
}

.mint-loadmore-bottom span {
  display: inline-block;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
  vertical-align: middle;
}

.mint-loadmore-bottom span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>
