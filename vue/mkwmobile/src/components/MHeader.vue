<template>
  <div class="mHeader ">
    <header class="headercls clearfix">
      <a href="javascript:;"  class="logo">
        <img
          src="https://m.imooc.com/static/wap/static/common/img/logo2.png"
          alt="幕课网"
        >
      </a>
      <a class="userinfo">
        <img src="https://img3.mukewang.com/57f786d20001cc7601000076-370-370.jpg">
      </a>
      <i class="search icon iconfont icon-search"></i>
      <a id="loadFile" href="Javascript:;" class="loadFileCls">
        <span>下载APP</span>
      </a>
    </header>
  </div>
</template>

<script>
export default {
  name: "mHeader",
  props: {
    msg: String
  }
};
</script>
<style scoped>
.mHeader{
  width:100%;
   height: 1.49333333rem;
}
.headercls {
  padding-top: .21333333rem;
  width: 100%;
 
  padding-left: 0.37333333rem;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 99999;
  box-sizing: border-box;
  /* box-shadow: 0 2px 2px 0 rgba(28, 31, 33, 0.1); */
  clear:both;
}
.headercls .logo {
  float: left;
  margin-top: 0.32rem;
  width: 2.18666667rem;
  height: 0.64rem;
}
.headercls .logo img {
  width: 100%;
  border: none;
  display: block;
}

.headercls .userinfo {
  float: right;
  margin-top: 0.26666667rem;
  margin-right: 0.37333333rem;
  width: 0.74666667rem;
  height: 0.74666667rem;
  /* display: inline-block; */
}
.headercls .userinfo img {
  border-radius: 50%;
  width: 100%;
  display: block;
}

.headercls .loadFileCls {
  text-decoration: none;
  float: right;
  margin-top: .21333333rem;
  margin-right: 0.10666667rem;
  width: 2.34666667rem;
  height: 0.85333333rem;
  line-height: 0.85333333rem;
  background: rgba(240, 20, 20, 0.05);
  border-radius: 0.42666667rem;
  font-weight: 700;
  font-size: 0.37333333rem;
  color: #f01414;
  text-align: center;
}
.headercls .search {
    float: right;
    margin-right: .10666667rem;
    width: 1.06666667rem;
    height: 1.28rem;
    line-height: 1.28rem;
    font-size: .64rem;
    color: #B7BBBF;
    text-align: center;
    display: block;
}
</style>


