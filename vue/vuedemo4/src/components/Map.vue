<template>
  <div class="amap-page-container">
    <div :style="{width:'100%',height:'300px'}">
      <el-amap vid="amap" :events="events" :map-manager="amapManager" :zoom="zoom" :plugin="plugin"  :center="center" class="amap-demo"></el-amap>
    </div>

    <div class="toolbar">
      <span v-if="loaded">location: lng = {{ lng }} lat = {{ lat }}</span>
      <span v-else>正在定位</span>
    </div>
    <div v-on:click="req_post()">查询周边</div>
  </div>
</template>
<script>
import Vue from "vue";
import Axios from "axios";
import VueAMap from "vue-amap";
// import { lazyAMapApiLoaderInstance } from 'vue-amap';

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  key: "0ee3c9b7aee067d80e0c03ecb11de27a",
  plugin: [
    "AMap.Geolocation",
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});

export default {
  data() {
    const self = this;
    return {
      center: [119.28, 26.08],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 100, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "RB", //定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions: "all",
          pName: "Geolocation",
          events: {
            init(map) {
              // o 是高德地图定位插件实例
              map.getCurrentPosition((status, result) => {
                // console.log(result)
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
              AMapUI.loadUI(["overlay/SimpleMarker"], function(SimpleMarker) {
                const marker = new SimpleMarker({
                  iconLabel: "A",
                  iconStyle: "red",
                  map: map,
                  position: map.getCenter()
                });
              });
            }
          }
        }
      ]
    };
  },
  methods: {
    req_post() {
      const that = this;
      const registerUrl =
        "http://restapi.amap.com/v3/batch?key=0ee3c9b7aee067d80e0c03ecb11de27a";
      const newUserInfo = {
        ops: [
          {
            url:
              "/v3/place/around?offset=10&page=1&key=0ee3c9b7aee067d80e0c03ecb11de27a&location=" +
              that.lng +
              "," +
              that.lat +
              "&output=json&radius=100000&types=080000"
          }
        ]
      };
      Axios.post(registerUrl, newUserInfo, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(function(response) {
          // console.log(response['data'][0]['body']['pois'])
        })
        .catch(function(error) {
          // console.log(error);
        });
    }
  }
};
</script>
<style>
.amap-demo {
  height: 300px;
}
</style>
