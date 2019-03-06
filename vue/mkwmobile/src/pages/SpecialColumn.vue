
<template>
  <div class="SpecialColumn"></div>
</template>

<script>
import axios from "axios"

export default {
  name: "SpecialColumn",
  props: {
    msg: String
  },
  data:function() {
    return {
      SpecialColumnData: null
    };
  },
  mounted: function() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.SpecialColumnData = response));
  }
};
</script>


