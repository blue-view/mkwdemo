<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view ></router-view>
   
    <router-link to="/helloWorld">Go to Foo</router-link>
    <router-link to="/apple">Go to Bar</router-link>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
