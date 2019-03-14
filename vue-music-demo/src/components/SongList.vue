<template>
  <div class="song-list">
    <SongListItem v-for="item in 10" :key="item" :param="item"/>
  </div>
</template>
<script>
import SongListItem from "@/components/SongListItem";
export default {
  name: "songList",
  components: {
    SongListItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/common/css/base.scss";
.song-list{
  margin:px2em(10);
}
</style>
