
<template>
<div>

<mt-index-list >
    <mt-index-section v-for="letter in citySortArr" :key="letter" :index="letter">
      <mt-cell
        v-for="cityobj in cityArr"
        :key="cityobj.postCode"
        :title="cityobj.value "
        v-if="cityobj.key == letter"
      ></mt-cell> 
    </mt-index-section>
  </mt-index-list> 
</template>
 </div>
<script>
import city from "../data/city/city2.json"; //导入所有城市的JSON
import { makePy } from "../data/city/pinying.js"; //导入插件获取所有城市中文的大写首字母

export default {
  data() {
    return {
      arr: [], //存放初始筛选的城市名称
      cityArr: [], //存放第二次筛选后所有城市名称
      citySort: [], //存放初始获取城市首字母大写的数组
      citySortArr: [] //存放第二次筛选重复，不存在的城市首字母数组
    };
  },
  created() {
    /**
     * 将json数据中的无用数据剔除
     */
    for (let i in city) {
      if (city[i].name != "请选择") {
        //将第一层数据中为 “请选择” 的剔除掉
        this.arr.push({
          name:city[i].name,
          postCode:city[i].postCode
        });
        for (let j in city[i].sub) {
          //将第二层数据中为 “请选择 和 其他” 的剔除掉
          if (
            city[i].sub[j].name != city[i].name 
          ) {
            this.arr.push({
              name:city[i].sub[j].name,
              postCode:city[i].sub[j].postCode
            }); //将处理后的数据存放在数组中，等待第二次筛选处理
          }
        }
      }
    }

    /**
     * 配置相关数据
     */
    for (let k in this.arr) {
      let cityKey = makePy(this.arr[k].name)[0].substring(0, 1); //获取每一个市区的首字母
      let cityValue = this.arr[k].name; //获取所有市区
      let postCode=this.arr[k].postCode;//邮政编码
      this.citySort[cityKey] = cityKey; //利用对象特性，剔除重复的字母，并将剔除后的字母存进对象中

      //将所有市区信息 以（ 字母 - 市区名 ）的格式存在至数组中

      this.cityArr[k] = {
        key: cityKey,
        value: cityValue,
        postCode:postCode
      };
    }

    /**
     * 将处理后的首字母数据对象，存放至数组中
     */
    for (let p in this.citySort) {
      this.citySortArr.push(this.citySort[p]);
    }

    /**
     * 将真实存在的市区首字母按A-Z进行排序
     */
    this.citySortArr = this.citySortArr.sort();

  }
};
</script>
 
<style>
.mint-cell-title {
  flex: 0 0 auto;
}

.mint-indexsection-index {
  text-align: left;
}
