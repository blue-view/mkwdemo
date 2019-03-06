<template>
  <div class="layout">
    <MHeader></MHeader>
    <MContent></MContent>
  </div>
</template>

<script>
import MHeader from "@/components/MHeader.vue";
import MContent from "@/components/MContent.vue";

export default {
  name: "layout",
  props: {
    msg: String
  },

  components: {
    MHeader,
    MContent
  }
};
</script>


