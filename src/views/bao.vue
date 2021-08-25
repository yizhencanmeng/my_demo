<template>
    <div class="bao">
        <!-- 顶部 -->
        <div class="ding">
             <img src="../assets/切图/logo.png" class="fang">
                <span class="span">设计师</span>
          <div class="tu">
            <div class="wo"><i class="iconfont icon-user"></i><p>我的</p></div>
            <div class="dao"><i class="iconfont icon-nav"></i><p>导航</p></div>
          </div>
        </div>
        <!-- 轮播 -->
        <div class="lun">
            <img src="../assets/切图/10quoted.jpg" alt="">
        </div>
        <!-- 字 -->
        <div class="zi">
            <h3>房先森10S报价</h3>
            <p><img class="qun" src="../assets/切图/common/icon_title.png" alt=""></p>
        </div>
        <!-- 输入框 -->
        <div class="shuru">
            <p><input class="mian" type="text" placeholder="请填写建筑面积"></p>
            <p><input class="mian" type="text" v-model="name"></p>
            <p>
            <span><input class="er" type="text" v-model="ting"></span>
            <span><input class="er" type="text" v-model="shi"></span>
            </p>
            <p>
                <span><input class="san" type="text" v-model="chu"></span>
                <span><input class="san" type="text" v-model="wei"></span>
                <span><input class="san" type="text" v-model="yang"></span>
            </p>
            <button class="btn">立刻申请</button>
        </div>
        <!-- 装修报价 -->
        <div class="xiu">
            <h2>装修报价</h2>
            <p><span class="hui">全包装修总价：</span><span class="hong">81,889,78</span><span class="hui">元</span></p>
            <p><span>您还可以选择</span></p>
            <p><span class="hui">房先森装修半包套产价，</span><span class="cheng">399</span><span class="hui">元/平米</span></p>
            <button class="tao">预约399套餐</button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      chu: "1厨",
      wei: "1卫",
      yang: "1阳台",
      ting: "1室",
      shi: "1厅",
      name: "现代"
    };
  }
};
</script>

<style lang="scss">
.bao {
  width: 100%;
  height: 100%;
}
.ding {
  width: 100%;
  height: 55px;
  background: white;
  position: relative;
  .fang {
    width: 65px;
    height: 30px;
    margin-left: 18px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .span {
    position: absolute;
    top: 20px;
    left: 150px;
    font-size: 20px;
  }
  .tu {
    position: absolute;
    top: 16px;
    right: 6px;
    text-align: center;

    .wo {
      width: 40px;
      height: 35px;
      font-size: 10px;
      color: #999999;
      float: left;
      img {
        width: 20px;
        height: 25px;
      }
    }
    .dao {
      width: 40px;
      height: 35px;
      font-size: 10px;
      color: #999999;
      margin-left: 20px;
      float: left;
      .icon-user {
        color: #999999;
        width: 20px;
        height: 25px;
      }
    }
  }
}
.lun {
  width: 100%;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
.zi {
  width: 100%;
  height: 60px;
  text-align: center;
  font-size: 20px;
  h3 {
    margin-top: 20px;
  }
  .qun {
    width: 55px;
    height: 20px;
  }
}
.shuru {
  width: 100%;
  text-align: center;
  p {
    margin-top: 10px;
    .mian {
      width: 260px;
      height: 35px;
    }
    .er{
        width: 130px;
        height: 35px;
        margin-left: 6px;
    }
    .san{
        width: 80px;
        height: 35px;
        margin-left: 6px;
    }
  }
  .btn{
      width: 260px;
      height: 38px;
      color: white;
      background: #feb505;
      border: 1px solid white;
      border-radius: 10%;
      margin-top: 10px;
  }
}
.xiu{
    width: 90%;
    height: 220px;
    text-align: center;
    border: 1px dashed #39c894;
    margin-left: 5%;
    margin-top: 20px;
    position: absolute;
    h2{
        position: relative;
        top: -20px;
        left: 0;
    }
    p{
        margin-top: 21px;
        .hui{
            color: #999999;
        }
        .hong{
            color: red;
        }
        .cheng{
            color: #feb505;
        }
    }
    .tao{
      width: 260px;
      height: 38px;
      color: #39c894;
      background: white;
      border: 1px solid #39c894;
      border-radius: 10%;
      margin-top: 10px;
    }
}
</style>

