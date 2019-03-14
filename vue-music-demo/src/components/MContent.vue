<template>
  <div class="m-content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "m-content"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../common/css/base.scss";
.m-content {
  padding-top: px2em(80);
  background:#f6f6f6;
}
</style>
