<template>
  <div class="song-list">
    <SongListItem v-for="item in 10" :key="item" :param="item" @click.native="goLink(item)"/>
  </div>
</template>
<script>
import SongListItem from "@/components/SongListItem";
export default {
  name: "songList",
  components: {
    SongListItem
  },
  methods: {
    goLink(item) {
      this.$router.push({
        // name: "billboard",
        path: "/billBoard/",
        query: {
          billBoradId: item
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/common/css/base.scss";
.song-list {
  margin: px2em(8);
}
</style>
