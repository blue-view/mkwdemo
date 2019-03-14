<template>
  <div class="qqline">
    <a href="javascript:void(0)" id="contactQQ">在线客服</a>
  </div>
</template>
<script>
export default {
  name: "qqline",
  data() {
    return {};
  },
  mounted: function() {
    BizQQWPA.addCustom({
      aty: "0", //指定工号类型,0-自动分流，1-指定工号，2-指定分组
      nameAccount: "40012345", //指定的聊天 QQ 号码
      selector: "contactQQ" //触发聊天的标签id
    });
  }
};
</script>