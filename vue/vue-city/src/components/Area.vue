<template>
  <div>
    <div class="main">
      <div class="view_search">
        <div @submit="formSubmit" class="view_searchbg">
          <label>
            <div class="img_wrap"></div>
            <button class="img_btn" hidden type="submit" name="search"></button>
          </label>
          <input
            v-model="inputText"
            type="text"
            class="input"
            @keypress="formSubmit"
            name="keyword"
            placeholder="请输入关键字..."
          >
        </div>
      </div>

      <div class="slide">
        <a v-for="(item, index) in temABC" :key="index">
          <span class="temABC" @click="slide(item)">{{item}}</span>
        </a>
      </div>
      <div v-if="show==1">
        <div class="yin">{{strA}}</div>
      </div>

      <div class="top" :style="`height: ${screenHeight}px`" ref="topContainer">
        <div class="common">当前城市</div>

        <div class="city">{{position.city}}</div>

        <div class="common">热门城市</div>

        <div class="hotaddr">
          <div v-for="(item, index) in hotaddr" :key="index">
            <div class="cityx">{{item.city}}</div>
          </div>
        </div>

        <div class="common sort">排序城市</div>

        <div v-for="(item, index) in addr" :key="index" :id="item.key">
          <div class="sort">{{item.key}}</div>

          <div v-for="(item1, key) in item.item" :key="key">
            <div class="add">{{item1.city}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import addr from "@/common/js/add"; //引用add.js
export default {
  // props: ['position'], //父组件传过来的值，由于是模拟，所以可以将position的数据写死

  data() {
    return {
      position: {
        city: "深圳市",
        lat: parseFloat(22.553329),
        lng: parseFloat(113.88308)
      },
      temABC: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      hotaddr: [
        {
          city: "北京市",

          N: "39.55",

          E: "116.24",

          firststr: "B"
        },
        {
          city: "成都市",

          N: "30.4",

          E: "104.04",

          firststr: "C"
        },
        {
          city: "佛山市",

          N: "23.02",

          E: "113.06",

          firststr: "F"
        },
        {
          city: "广州市",

          N: "23.08",

          E: "113.14",

          firststr: "G"
        },
        {
          city: "杭州市",

          N: "30.16",

          E: "120.1",

          firststr: "H"
        },
        {
          city: "南京市",

          N: "32.03",

          E: "118.46",

          firststr: "N"
        },
        {
          city: "深圳市",

          N: "22.33",

          E: "114.07",

          firststr: "S"
        },
        {
          city: "上海市",

          N: "31.14",

          E: "121.29",

          firststr: "S"
        },
        {
          city: "天津市",

          N: "39.02",

          E: "117.12",

          firststr: "T"
        },
        {
          city: "武汉市",

          N: "30.35",

          E: "114.17",

          firststr: "W"
        },
        {
          city: "西安市",

          N: "34.17",

          E: "108.57",

          firststr: "X"
        },
        {
          city: "重庆市",

          N: "29.35",

          E: "106.33",

          firststr: "Z"
        }
      ],
      addr: addr,
      show: 0,
      strA: [],
      screenHeight: 0,
      inputText: ""
    };
  },

  created() {
    this.screenHeight = window.screen.availHeight; //设置#topdiv的高度
  },

  methods: {
    slide(item) {
      let that = this;

      this.show = 1; //弹出右侧点击的字母
      this.strA = item;

      for (let key in addr) {
        if (item == key) {
          //判断城市列表中是否包含右侧点击的字母，不判断会报错
          let slideScrollHeight =
            document.querySelector("#" + item).offsetTop - 65; //计算要滚动的距离
          this.$refs.topContainer.scrollTop = slideScrollHeight; //赋值给需要滚动的盒子
        }
      }

      setTimeout(function() {
        that.show = 0; //两秒后关闭
      }, 2000);
    },

    formSubmit() {
      //找出与搜索框对应的城市，
      for (let i in addr) {
        for (let j in addr[i].item) {
          // this.addr=this.addr.filter(function(item,index,arr){});
          if (this.inputText == addr[i].item[j].city) {
            this.address;
          }
        }
      }
    }
  }
};
</script>
 
<style lang="less" rel="stylesheet/less">
.main {
  width: 100%;
  height: 92%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
  .view_search {
    width: 100%;
    height: 1.25rem;
    background: #ffffff;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.2rem;
    .view_searchbg {
      width: 94%;
      border-radius: 0.1rem;
      height: 0.6rem;
      // margin-left: 3%;

      border-style: solid;

      border-width: 1px;

      overflow: hidden;

      line-height: 0;

      border-color: #cdcdcd;

      display: flex;

      flex-direction: row;

      align-items: center;

      justify-content: space-between;

      position: relative;

      background-color: #fff;
    }

    .img_wrap {
      width: 0.84rem;

      height: 0.6rem;

      background-image: url(http://tws.cnweisou.com/images/search.png);

      background-size: 0.44rem 0.44rem;

      background-repeat: no-repeat;

      background-position: 0.2rem 0.08rem;
    }

    .img_btn {
      width: 0.84rem;

      height: 0.6rem;

      background-color: #fff;

      position: absolute;

      left: 0;

      top: 0;

      z-index: 3;

      border-color: transparent;
    }

    .input {
      border: 0;

      &:focus {
        outline: 0;
      }
    }
  }

  /* 当前城市 */

  .top {
    overflow-x: hidden;

    overflow-y: scroll;

    font-size: 0.26rem;

    line-height: 0.6rem;

    padding-left: 3%;

    width: 97%;

    //  height: 12rem;
    display: inline-block;
    // transition: all 1s linear;
    .city {
      width: 1.45rem;

      height: 0.56rem;

      text-align: center;

      margin-right: 0.2rem;

      margin-bottom: 0.2rem;

      border-radius: 0.8rem;

      border: 1px solid #6ab3d1;

      color: #55bad3;

      display: inline-block;
    }

    .hotaddr {
      display: flex;

      flex-wrap: wrap;

      align-content: stretch;

      // justify-content: center;

      .cityx {
        width: 1.45rem;

        height: 0.56rem;

        text-align: center;

        margin-right: 0.2rem;

        margin-bottom: 0.2rem;

        border-radius: 0.08rem;

        border: 1px solid #d5d5d5;

        color: black;

        display: inline-block;

        font-size: 0.26rem;
      }
    }
  }
}

/*排序城市*/

.footer1 {
  display: flex;

  flex-direction: column;

  font-size: 0.26rem;

  line-height: 0.6rem;
}

.add {
  line-height: 0.8rem;

  font-size: 0.26rem;

  padding-left: 0.3rem;
}

/*右侧*/

.slide {
  width: 0.4rem;

  height: 100%;

  position: fixed;

  right: 3%;

  top: 1.2rem;

  color: #6ab3d1;

  display: flex;

  flex-direction: column;

  font-size: 0.24rem;

  text-align: center;

  z-index: 3;
}

/*阴影*/

.yin {
  width: 1.75rem;

  height: 1.75rem;

  background-color: rgba(0, 0, 0, 0.4);

  position: fixed;

  top: 30%;

  left: 40%;

  text-align: center;

  line-height: 1.75rem;

  color: white;

  border-radius: 0.08rem;

  font-size: 0.8rem;

  z-index: 9;
}

.input {
  position: absolute;

  left: 1rem;

  top: 0;

  height: 0.6rem;

  background-color: #fff;

  font-size: 0.28rem;
}

.temABC {
  margin-top: 0.04rem;
}

.common {
  margin-bottom: 0.1rem;

  font-weight: bolder;

  width: 100%;
}

.sort {
  margin-left: 0.3rem;
  font-size: 0.5rem;
}
</style>