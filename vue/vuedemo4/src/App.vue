<template>
  <div id="app">
    <!-- <Editor/> -->
    <!-- <MapVue msg="vue-amap向你问好！"/> -->
    <!-- <HelloWorld/> -->
    <CityIndex/>
  </div>
</template>

<script>
// import Editor from './components/Editor.vue'
// import MapVue from "./components/Map.vue";
// import HelloWorld from "./components/HelloWorld";
// import QQLine from "./components/QQLine";
import CityIndex from './components/CityIndex'

export default {
  name: "app",
  components: {
    // Editor
    // HelloWorld
    CityIndex
  }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
</style>
