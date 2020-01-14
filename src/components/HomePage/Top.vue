<template>
  <div class="app">
    <img src="../../assets/HomePage/伊利.png" class="yili" alt="" />
    <span class="yl">中国伊利集团企业采购专柜</span>
    <img src="../../assets/HomePage/中秋.png" class="mid-aut" alt="" />
    <router-link to="/shoppingcart">
      <div class="shopcart">
        <img
          src="../../assets/HomePage/购物车.png"
          class="shopcartImg"
          alt=""
        />
        <span>购物车</span>
        <div>
          <span class="num">{{ getGoodsAmount }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import {  mapGetters,  } from "vuex";
export default {
  name: "Top",
  computed: {
    ...mapGetters(["getGoodsAmount"])
  },
  methods: {}
};
</script>

<style scoped lang="less">
.app {
  height: 80px;
  width: 1920px;
  /*display: inline-block;*/
  position: relative;
  .yili {
    width: 60px;
    height: 60px;
    margin-left: 376px;
    margin-top: 10px;
  }
  .yl {
    font-size: 14px;
    width: 84px;
    height: 40px;
    display: inline-block;
    position: absolute;
    top: 20px;
    margin-left: 21px;
  }
  .mid-aut {
    height: 60px;
    width: 760px;
    margin-top: 10px;
    margin-left: 78px;
    position: absolute;
    left: 500px;
  }
  .shopcart {
    background-color: #10c899;
    width: 116px;
    height: 36px;
    position: relative;
    top: -23%;
    left: 950px;
    margin-left: 40px;
    cursor: pointer;
    border-radius: 3px;
    .shopcartImg {
      width: 20px;
      height: 20px;
      margin-top: 8px;
      margin-left: 8px;
    }
    span {
      font-size: 14px;
      display: inline-block;
      position: relative;
      top: -10%;
      margin-left: 5px;
      color: #ffffff;
    }
    div {
      width: 15px;
      height: 15px;
      border-radius: 7.5px;
      position: absolute;
      background-color:#ffffff;
      top: 12px;
      right: 12px;
      .num {
        position: relative;
        top: -5px;
        right: 1px;
        color: #10c899;
        font-size: 12px;
      }
    }
  }
}
div,
img {
  display: inline-block;
}
</style>
