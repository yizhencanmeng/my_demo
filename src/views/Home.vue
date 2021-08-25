<template>
  <div class="home">
    <!-- 顶部 -->
    <div class="home-top">
      <div class="home-top-left">
        <img src="/img/logo.png" alt="">
      </div>
      <div class="home-top-right">
        <div class="home-top-right-left">
          <p><img src="/img/name.png" alt=""></p>
          <span>我的</span>
        </div>
        <div class="home-top-right-right">
          <p><img src="/img/dao.png" alt=""></p>
          <span>导航</span>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in imgs" :key="index">
        <img :src="'/img/'+item" />
      </van-swipe-item>
    </van-swipe>
    <!-- 图标 -->
    <div class="home-icon">
      <ul>
        <li>
          <p style="background:#39c894"><i class="iconfont">&#xe602;</i></p> 
          <span>装修方案</span>
        </li>
        <li>
          <p style="background:#feb505"><i class="iconfont">&#xe606;</i></p>
          <span>效果图</span>
        </li>
        <li>
          <p style="background:#eed215"><i class="iconfont">&#xe609;</i></p>
          <span>设计师</span>
        </li>
        <li>
          <p style="background:#00b2b2"><i class="iconfont">&#xe603;</i></p>
          <span>装修工地</span>
        </li>
        <li>
          <p style="background:#1b9af7"><i class="iconfont">&#xe60b;</i></p>
          <span>装修攻略</span>
        </li>
        <li>
          <p style="background:#7b72e9"><i class="iconfont">&#xe637;</i></p>
          <span>装修贷款</span>
        </li>
        <li>
          <p style="background:#ff4351"><i class="iconfont">&#xe62c;</i></p>
          <span>免费预约</span>
        </li>
        <li>
          <p style="background:#fe8864"><i class="iconfont">&#xe608;</i></p>
          <span>十秒报价</span>
        </li>
      </ul>
    </div>
    <!-- 分 -->
    <div class="home-fen"></div>
    <!-- 全屋装修 -->
    <div class="home-quan">
      <div class="home-quan-top">
        <p class="home-quan-top-p">
          <span class="home-quan-top-p-shu"></span>
          <span class="home-quan-top-p-quan">全屋装修</span>
          <span class="home-quan-top-p-bao">包设计、包主材、包水电、包施工</span>
        </p>
      </div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in imgss" :key="index">
          <img :src="'/img/'+item" />
        </van-swipe-item>
      </van-swipe>
      <div class="home-quan-footer">
        <div class="home-quan-footer-tu">
          <i class="iconfont">&#xe627;</i>
          <span>0增项，标准施工</span>
        </div>
        <div class="home-quan-footer-tu">
          <i class="iconfont">&#xe628;</i>
          <span>杜绝项目外包</span>
        </div>
        <div class="home-quan-footer-tu">
          <i class="iconfont">&#xe60c;</i>
          <span>装修贷款</span>
        </div>
      </div>
    </div>
    <!-- 分 -->
    <div class="home-fen"></div>
    <!-- 装修预约 -->
    <div class="home-yuyue">
      <div class="home-quan-top">
        <p class="home-quan-top-p">
          <span class="home-quan-top-p-shu"></span>
          <span class="home-quan-top-p-quan">装修预约</span>
          <span class="home-quan-top-p-bao">免费上门量房,设计方案满意为止</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs:['banner.jpg','banner1.jpg','banner2.jpg'],
      imgss:['img1.jpg','img1.jpg']
    }
  },
}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
}
.home-top{
  height: 85px;
  display: flex;
  justify-content: space-between;
}
.home-top-left{
  width: 45%;
  padding-top: 16px;
  padding-left: 18px;
  padding-bottom: 16px;
}
.home-top-left>img{
  width: 100%;
}

.home-top-right{
  display: flex;
  padding-top: 10px;
}
.home-top-right-left{
  margin-right: 20px;
  color: #999999;
  text-align: center;
}
.home-top-right-left>p{
  height: 45px;;
}
.home-top-right-right{
        margin-top: 12px;
        margin-right: 18px;
        color: #999999;
        text-align: center;
}
.home-top-right-right >p{
  height: 33px;
}
.van-swipe{
  width: 100%;
  height: 130px;
}
.van-swipe-item{
  width: 100%;
  height: 130px;
}
.van-swipe-item>img{
  width: 100%;
  height: 100%;
}
.home-icon{
  width: 100%;
}
.home-icon > ul{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-items: center; 
}
.home-icon > ul > li{
  width: 25%;
  text-align: center;
}
.home-icon > ul > li > p{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 18px;
  margin-left: 13px;
  margin-right: 20px;
}
.home-icon > ul > li > p > i{
  font-size: 35px;
  color: #fff;
  line-height: 60px;
}
.home-icon > ul > li > span{
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 18px;
}

.home-fen{
  width: 100%;
  height: 9px;
  background: #eaeaea;
}

.home-quan{
  width: 100%;
}
.home-quan-top{
  width: 100%;
  height: 50px;
}
.home-quan-top-p{
  margin-top: 16px;
  margin-left: 16px;
  display: flex;
  margin-bottom: 16px;
}
.home-quan-top-p-shu{
  width: 5px;
  height: 32px;
  background: #39c894;
}
.home-quan-top-p-quan{
  font-size: 25px;
  margin-left: 5px;
}
.home-quan-top-p-bao{
  font-size: 15px;
  color: #999999;
  margin-top: 10px;
  margin-left: 5px;
}
.home-quan > .van-swipe{
  width: 100%;
  height: 150px;
}
.home-quan > .van-swipe > .van-swipe-item{
  width: 100%;
  height: 150px;
}
.home-quan > .van-swipe > .van-swipe-item > img{
  width: 100%;
  height: 100%;
}
.home-quan-footer{
  width: 100%;
  margin-top: 18px;
  margin-left: 5px;
  display: flex;
  justify-content: space-around;
}
.home-quan-footer-tu{
  margin-right: 10px;
}
.home-quan-footer-tu > i{
  font-size: 18px;
  color: #39c894;
}
.home-quan-footer-tu > span{
  font-size: 15px;
  display: inline-block;
  margin-bottom: 15px;
}
</style>

