<template>
  <div class="m-i-content-listTop-container" ref="SongListItem" >
    <span class="m-i-content-listTop-container-l">
      <img  :src="TopList.coverImgUrl">
    </span>
    <ul class="m-i-content-listTop-container-r">
      <h3>{{TopList.name}}</h3>
      <li v-for="(item,index) in TopList.tracks" :key="index">
        <span>
          <i class="song-index">{{index+1}}</i>
          <span class="itext-color">{{item.name}}</span>
        </span>
      </li>
      <i class="topic_arrow"></i>
    </ul>
  </div>
</template>
<script>
export default {
  name: "pcontainer",
  props: ["param"],
  data() {
    return {
      TopList: {}
    };
  },
  methods:{
  },
  created: function() {
    var that = this;
    let baseUrl = this.$apiUrl.BaseUrl;
    this.$getHttp(baseUrl + this.$apiUrl.TopList + this.param).then(function(
      res
    ) {
      if (res.data.code == 200) {
        var itemObj = res.data.playlist;
        var temObj = {};
        temObj["name"] = itemObj.name;
        temObj["coverImgUrl"] = itemObj.coverImgUrl;
        var temArr = [];
        for (var t = 0; t < 3; t++) {
          var obj = itemObj.tracks[t];
          temArr.push({
            id: obj.id,
            name: obj.name
          });
        }
        temObj["tracks"] = temArr;
        that.TopList = temObj;
      }
    });
  }
};
</script>
<style scoped lang="scss">
@import "@/common/css/base.scss";
.m-i-content-listTop-container {
  display: flex;
  align-content: flex-start;
  margin-bottom: px2em(10);
  color: #333;
  background: #fff;
}
.m-i-content-listTop-container-l {
  width: px2em(100);
  height: px2em(100);
  overflow: hidden;
}
.m-i-content-listTop-container-l img {
  width: px2em(100);
  height: px2em(100);
}
.m-i-content-listTop-container-r {
  padding-left: px2em(15);
  width: px2em(200);
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.m-i-content-listTop-container-r .topic_arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -4px;
  width: 6px;
  height: 6px;
  border-right: 1px solid #b2b2b2;
  border-bottom: 1px solid #b2b2b2;
  transform: rotate(-45deg);
}
.m-i-content-listTop-container-r > h3 {
  font-size: 16px;
  margin: px2em(8) 0;
  font-weight: 400;
}
.m-i-content-listTop-container-r > li {
  width: 100%;
  line-height: px2em(21);
}
.m-i-content-listTop-container-r > li > span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.m-i-content-listTop-container-r .song-index {
  display: inline-block;
  color: rgba($color: #000000, $alpha: 0.5);
  font-size: 14px;
  padding-right: px2em(8);
}
.m-i-content-listTop-container-r .itext-color {
  display: inline-block;
  color: #000;
}
</style>