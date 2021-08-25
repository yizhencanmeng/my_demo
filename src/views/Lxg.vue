<template>
    <div class="page">
        <div class="head">
            <img src="../assets/img/logo.png" alt="">
            <p class="step">装修流程</p>
            <div class="guider">
                <div class="mine">
                    <i class="iconfont icon-user"></i>
                    <span>我的</span>
                </div>
                <div class="guide">
                    <i class="iconfont icon-nav"></i>
                    <span>导航</span>
                </div>
            </div>
        </div>
        <div class="banner">
            <img src="../assets/img/process1.jpg" alt="">
        </div>
        <div class="banner2">
            <span class="fir">【装修前】</span>
            <span class="no1">NO.1收房验房</span>
            <span class="no2">NO.2装修预算</span>
            <span class="no3">NO.3装修风水</span>
            <span class="no4">NO.4装修设计</span>
        </div>
        <div class="banner3">
            <span class="fir">【装修中】</span>
            <span>NO.5材料选择</span>
            <span>NO.6水电工程</span>
            <span>NO.7泥木工程</span>
            <span>NO.8油漆工程</span>
        </div>
        <div class="banner4">
            <span class="fir">【装修后】</span>
            <span>NO.9装修验房</span>
            <span>NO.10去污保洁</span>
            <span>NO.11软装搭配</span>
            <span>NO.12家具生活</span>
        </div>
        <div class="exp">
          <p>
            &emsp;&emsp;
            房先森互联网家装有别于传统装修公司与其他装修中
            介平台，以自营模式整合设计师与项目经理，杜绝项目转
            包外包，利用互联网将工地进行在线全景直播，通过去中
            间环节，提供装修套餐+个性化定制服务。</p>
        </div>
        <div class="connect">
          <p class="phone"><i class="iconfont icon-hot-line"></i>服务热线：400-9977-658</p>
          <p class="choice">
            <span>触屏版</span>
            <span>电脑版</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </p>
          <div class="img"> 
            <img src="../assets/img/icon_close.png" alt="">
            <img src="../assets/img/quoten_bottom.png" alt=""> 
           
          </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.page {
  margin: 0;
  padding: 0;
  width: 100%;
  .head {
    width: 100%;
    display: flex;
    justify-content: space-around;
    img {
      display: inline-block;
      width: 100px;
      height: 40px;
    }
    .step {
      flex: 1;
      font-size: 18px;
      color: #000;
      text-align: center;
    }
    .guider {
      width: 80px;
      display: flex;
      .mine {
        width: 50%;
        i {
          color: #999;
          font-size: 30px;
        }
        span {
          text-align: center;
        }
      }
      .guide {
        width: 50%;
        i {
          color: #999;
          font-size: 30px;
        }
        span {
          text-align: center;
        }
      }
    }
  }
  .banner {
    width: 100%;
    img {
      width: 100%;
      height: 130px;
    }
  }
  .banner1 {
    width: 100%;
    img {
      width: 100%;
      margin-top: 0px;
    }
  }
  .banner2 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 392px;
    background-image: url(../assets/img/process2.jpg);
    background-size: 100%;
    position: relative;
    .fir {
      display: inline-block;
      color: #ff4351;
      padding-top: 20px;
      padding-left: 50px;
      font-size: 20px;
    }
    .no1 {
      position: absolute;
      top: 90px;
      left: 90px;
      font-size: 14px;
    }
    .no2 {
      position: absolute;
      top: 160px;
      left: 163px;
      font-size: 14px;
    }
    .no3 {
      position: absolute;
      top: 231px;
      left: 90px;
      font-size: 14px;
    }
    .no4 {
      position: absolute;
      top: 300px;
      left: 163px;
      font-size: 14px;
    }
  }
  .banner3 {
    width: 100%;
    height: 392px;
    background-image: url(../assets/img/process3.png);
    background-size: 100%;
    position: relative;
    .fir {
      position: absolute;
      margin-top: 20px;
      margin-left: 200px;
      font-size: 20px;
      color: dodgerblue;
    }
    span:nth-child(2) {
      position: absolute;
      margin-top: 90px;
      margin-left: 170px;
      font-size: 14px;
    }
    span:nth-child(3) {
      position: absolute;
      margin-top: 165px;
      margin-left: 85px;
      font-size: 14px;
    }
    span:nth-child(4) {
      position: absolute;
      margin-top: 240px;
      margin-left: 170px;
      font-size: 14px;
    }
    span:nth-child(5) {
      position: absolute;
      margin-top: 310px;
      margin-left: 85px;
      font-size: 14px;
    }
  }
  .banner4 {
    width: 100%;
    height: 436px;
    background-image: url(../assets/img/process4.jpg);
    background-size: 100%;
    position: relative;
    .fir {
      display: inline-block;
      color: #7b72e9;
      padding-top: 20px;
      padding-left: 50px;
      font-size: 20px;
    }
    span:nth-child(2) {
      position: absolute;
      top: 90px;
      left: 90px;
      font-size: 14px;
    }
    span:nth-child(3) {
      position: absolute;
      top: 160px;
      left: 163px;
      font-size: 14px;
    }
    span:nth-child(4) {
      position: absolute;
      top: 231px;
      left: 90px;
      font-size: 14px;
    }
    span:nth-child(5) {
      position: absolute;
      top: 300px;
      left: 163px;
      font-size: 14px;
    }
  }
  .exp {
    width: 100%;
    background-color: white;
    p {
      font-family: 微软雅黑;
    }
  }
  .connect {
    position: relative;
    width: 100%;
    .phone {
      i {
        color: #39c894;
      }
      width: 100%;
      text-align: center;
    }
    .choice {
      width: 100%;
      display: flex;
      justify-content: space-around;
      span {
        text-align: center;
        display: inline-block;
        border-right: 1px solid #ddd;
      }
      span:hover {
        color: #39c894;
      }
    }
    .img {
      position: absolute;
      width: 100%;
      height: 80px;
      background-color: rgba(0, 0, 0, 0.7);
      top: 60px;
      img:nth-child(1){
        position: fixed;
        top: 560px;
      }
      img:nth-child(2) {
        width: 70%;
        margin-left: 30px;
      }
    }
  }
}
</style>
