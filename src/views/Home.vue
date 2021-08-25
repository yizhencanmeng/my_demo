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
      <div class="home-yuyue-inps">
        <input type="text" placeholder="小区名">
        <input type="text" placeholder="手机号">
        <input type="text" placeholder="建筑面积">
        <p>立即申请</p>
      </div>
    </div>
    <!-- 分 -->
    <div class="home-fen"></div>
    <!-- 设计师 -->
    <div class="home-shejishi">
      <div class="home-quan-top">
        <p class="home-quan-top-p">
          <span class="home-quan-top-p-shu"></span>
          <span class="home-quan-top-p-quan">设计师</span>
        </p>
      </div>
      <div class="home-shejishi-pepol">
        <div class="home-shejishi-pepol-one">
          <img src="/img/12233c.jpg" alt="">
          <p>吴飞柯</p>
          <span>优秀</span>
        </div>
        <div class="home-shejishi-pepol-one">
          <img src="/img/122222.jpg" alt="">
          <p>陆炎龙</p>
          <span>主任</span>
        </div>
        <div class="home-shejishi-pepol-one">
          <img src="/img/122222.jpg" alt="">
          <p>张海建</p>
          <span>总监</span>
        </div>
        <div class="home-shejishi-pepol-one">
          <img src="/img/12233c.jpg" alt="">
          <p>陈冲</p>
          <span>优秀</span>
        </div>
      </div>
      <div class="home-shejishi-footers">
        <p>
          <span>换一换</span>
          <i class="iconfont">&#xe62f;</i>
        </p>
        <p>
          <span>更多设计师</span>
          <i class="iconfont">&#xe605;</i>
        </p>
      </div>
    </div>
    <!-- 分 -->
    <div class="home-fen"></div>
    <!-- 效果图 -->
    <div class="home-xiaoguotu">
      <div class="home-quan-top">
        <p class="home-quan-top-p">
          <span class="home-quan-top-p-shu"></span>
          <span class="home-quan-top-p-quan">效果图</span>
        </p>
      </div>
      <div class="home-xioguotu-tu">
        <img src="/img/13356.jpg" alt="">
      </div>
      <div class="home-xiaoguotu-tu2">
        <ul>
          <li><img src="/img/13356.jpg" alt=""></li>
          <li><img src="/img/13356.jpg" alt=""></li>
          <li><img src="/img/13356.jpg" alt=""></li>
          <li><img src="/img/13356.jpg" alt=""></li>
        </ul>
      </div>
      <div class="home-shejishi-footers">
        <p>
          <span>换一换</span>
          <i class="iconfont">&#xe62f;</i>
        </p>
        <p>
          <span>更多效果图</span>
          <i class="iconfont">&#xe605;</i>
        </p>
      </div>
    </div>
    <!-- 分 -->
    <div class="home-fen"></div>
    <!-- 工地直播 -->
    <div class="home-gongdi">
      <div class="home-quan-top">
        <p class="home-quan-top-p">
          <span class="home-quan-top-p-shu"></span>
          <span class="home-quan-top-p-quan">工地直播</span>
        </p>
      </div>
      <div class="home-gongdi-tu">
        <img src="/img/333.jpg" alt="">
      </div>
      <p class="home-gongdi-p">重汽嘉泽苑7幢<span>泥木工程</span></p>
      <div class="home-shejishi-footers">
        <p>
          <span>换一换</span>
          <i class="iconfont">&#xe62f;</i>
        </p>
        <p>
          <span>更多工地直播</span>
          <i class="iconfont">&#xe605;</i>
        </p>
      </div>
    </div>
    <!-- 分 -->
    <div class="home-fen"></div>
    <!-- 装修攻略 -->
    <div class="home-gonglue">
      <div class="home-quan-top">
        <p class="home-quan-top-p">
          <span class="home-quan-top-p-shu"></span>
          <span class="home-quan-top-p-quan">装修攻略</span>
        </p>
      </div>
      <div class="home-gonglue-con">
        <ul>
          <li>
            <div class="home-gonglue-con-tu">
              <img src="/img/3232.jpg" alt="">
            </div>
            <div class="home-gonglue-con-span">
              <p>房子交付要验房,验房师是做什么的？</p>
              <p>2016-07-07</p>
            </div>
          </li>
          <li>
            <div class="home-gonglue-con-tu">
              <img src="/img/3232.jpg" alt="">
            </div>
            <div class="home-gonglue-con-span">
              <p>能让您涨工资的家居风水!</p>
              <p>2016-07-07</p>
            </div>
          </li>
          <li>
            <div class="home-gonglue-con-tu">
              <img src="/img/3232.jpg" alt="">
            </div>
            <div class="home-gonglue-con-span">
              <p>遇到有这样房子的男人就嫁了吧</p>
              <p>2016-07-07</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-shejishi-footers">
        <p>
          <span>换一换</span>
          <i class="iconfont">&#xe62f;</i>
        </p>
        <p>
          <span>更多装修攻略</span>
          <i class="iconfont">&#xe605;</i>
        </p>
      </div>
    </div>
    <!-- 分 -->
    <div class="home-fen"></div>
    <!-- 介绍 -->
    <div class="home-doce">
      <p>&emsp;&emsp;房先森互联网家装又别于传统装修公司与其他装修中介平台，以自营模式整合设
        计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节
        ，提供装修套餐+个性化定制服务。</p>
    </div>
    <!-- 分 -->
    <div class="home-fen"></div>
    <!-- 尾 -->
    <div class="home-footer">
      <p><i class="iconfont">&#xe607;</i><span>服务热线:400-9977-658</span></p>
      <div class="home-footer-ul">
        <ul>
          <li>触屏版</li>
          <li>电脑版</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
      </div>
      <p class="home-footer-img"><img src="/img/quoten_bottom.png" alt=""></p>
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

<style lang="scss">
.home{
  width: 100%;
  height: 100%;
  .home-top{
    height: 85px;
    display: flex;
    justify-content: space-between;
    .home-top-left{
      width: 45%;
      padding-top: 16px;
      padding-left: 18px;
      padding-bottom: 16px;
      img{
        width: 100%;
      }
    }
    .home-top-right{
      display: flex;
      padding-top: 10px;
      .home-top-right-left{
        margin-right: 20px;
        color: #999999;
        text-align: center;
        p{
          height: 45px;
        }
      }
      .home-top-right-right{
        margin-top: 12px;
        margin-right: 18px;
        color: #999999;
        text-align: center;
        p{
          height: 33px;
        }
      }
    }
  }
  .van-swipe{
    width: 100%;
    height: 130px;
    .van-swipe-item{
      width: 100%;
      height: 130px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .home-icon{
    width: 100%;
    ul{
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      justify-items: center;
      li{
        width: 25%;
        text-align: center;
        p{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-top: 18px;
          margin-left: 13px;
          margin-right: 20px;
        }
        i{
          font-size: 35px;
          color: #fff;
          line-height: 60px;
        }
        span{
          display: inline-block;
          margin-top: 10px;
          margin-bottom: 18px;
        }
      }
    }
  }
  .home-fen{
    width: 100%;
    height: 9px;
    background: #eaeaea;
  }
  .home-quan{
    width: 100%;
    .home-quan-top{
      width: 100%;
      height: 50px;
      .home-quan-top-p{
        margin-top: 16px;
        margin-left: 16px;
        display: flex;
        margin-bottom: 16px;
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
      }
    }
    .van-swipe{
      width: 100%;
      height: 150px;
      .van-swipe-item{
        width: 100%;
        height: 150px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .home-quan-footer{
      width: 100%;
      margin-top: 18px;
      margin-left: 5px;
      display: flex;
      justify-content: space-around;
      .home-quan-footer-tu{
        margin-right: 10px;
      }
      i{
        font-size: 18px;
        color: #39c894;
      }
      span{
        font-size: 15px;
        display: inline-block;
        margin-bottom: 15px;
      }
    }
  }
  .home-yuyue{
    width: 100%;
    .home-quan-top{
      width: 100%;
      height: 50px;
      .home-quan-top-p{
        margin-top: 16px;
        margin-left: 16px;
        display: flex;
        margin-bottom: 16px;
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
      }
    }
    .home-yuyue-inps{
      text-align: center;
      margin-bottom: 18px;
      input{
        width: 300px;
        height: 50px;
        border: 1px solid #eaeaea;
        margin-top: 10px;
        font-size: 16px;
        padding-left: 10px;
        color: #cacacaca;
        border-radius: 5px;
      }
      p{
        width: 300px;
        line-height: 50px;
        margin-top: 10px;
        background: #feb500;
        color: #fff;
        font-size: 20px;
        text-align: center;
        margin-left: 37px;
        border-radius: 5px;
      }
    }
  }
  .home-shejishi{
    width: 100%;
    .home-quan-top{
      width: 100%;
      height: 50px;
      .home-quan-top-p{
        margin-top: 16px;
        margin-left: 16px;
        display: flex;
        margin-bottom: 16px;
        .home-quan-top-p-shu{
          width: 5px;
          height: 32px;
          background: #39c894;
        }
        .home-quan-top-p-quan{
          font-size: 25px;
          margin-left: 5px;
        }
      }
    }
    .home-shejishi-pepol{
      width: 100%;
      height: 135px;
      display: flex;
      margin-bottom: 18px;
      .home-shejishi-pepol-one{
        width: 25%;
        height: 94px;
        text-align: center;
        img{
          width: 80%;
          height: 80%;
        }
        p{
          margin-top: 10px;
        }
        span{
          margin-top: 10px;
          display: inline-block;
          width: 60px;
          line-height: 20px;
          text-align: center;
          background: #39c894;
          border-radius: 5px;
          color: #fff;
        }
      }
    }
    .home-shejishi-footers{
      display: flex;
      width: 100%;
      height: 50px;
      margin-bottom: 15px;
      p{
        line-height: 50px;
        width: 50%;
        text-align: center;
        font-size: 18px;
        color: #39c894;
        border: 1px solid #eaeaea;
        i{
          margin-left: 5px;
        }
      }
    }
  }
  .home-xiaoguotu{
    width: 100%;
    .home-quan-top{
      width: 100%;
      height: 50px;
      .home-quan-top-p{
        margin-top: 16px;
        margin-left: 16px;
        display: flex;
        margin-bottom: 16px;
        .home-quan-top-p-shu{
          width: 5px;
          height: 32px;
          background: #39c894;
        }
        .home-quan-top-p-quan{
          font-size: 25px;
          margin-left: 5px;
        }
      }
    }
    .home-xioguotu-tu{
      width: 375px;
      height: 253px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .home-xiaoguotu-tu2{
      width: 100%;
      ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 18px;
        li{
          width: 48%;
          margin-left: 1%;
          margin-top: 5px;
          img{
            width: 100%;
          }
        }
      }
    }
    .home-shejishi-footers{
      display: flex;
      width: 100%;
      height: 50px;
      margin-bottom: 15px;
      p{
        line-height: 50px;
        width: 50%;
        text-align: center;
        font-size: 18px;
        color: #39c894;
        border: 1px solid #eaeaea;
        i{
          margin-left: 5px;
        }
      }
    }
  }
  .home-gongdi{
    width: 100%;
    .home-quan-top{
      width: 100%;
      height: 50px;
      .home-quan-top-p{
        margin-top: 16px;
        margin-left: 16px;
        display: flex;
        margin-bottom: 16px;
        .home-quan-top-p-shu{
          width: 5px;
          height: 32px;
          background: #39c894;
        }
        .home-quan-top-p-quan{
          font-size: 25px;
          margin-left: 5px;
        }
      }
    }
    .home-gongdi-tu{
      width: 375px;
      height: 253px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .home-gongdi-p{
      margin-top: 10px;
      margin-left: 20px;
      font-size: 18px;
      margin-bottom: 10px;
      span{
        display: inline-block;
        margin-left: 20px;
        width: 80px;
        line-height: 25px;
        text-align: center;
        border-radius: 5px;
        background: #39c894;
        color: #fff;
      }
    }
    .home-shejishi-footers{
      display: flex;
      width: 100%;
      height: 50px;
      margin-bottom: 15px;
      p{
        line-height: 50px;
        width: 50%;
        text-align: center;
        font-size: 18px;
        color: #39c894;
        border: 1px solid #eaeaea;
        i{
          margin-left: 5px;
        }
      }
    }
  }
  .home-gonglue{
    width: 100%;
    .home-quan-top{
      width: 100%;
      height: 50px;
      .home-quan-top-p{
        margin-top: 16px;
        margin-left: 16px;
        display: flex;
        margin-bottom: 16px;
        .home-quan-top-p-shu{
          width: 5px;
          height: 32px;
          background: #39c894;
        }
        .home-quan-top-p-quan{
          font-size: 25px;
          margin-left: 5px;
        }
      }
    }
    .home-gonglue-con{
      width: 100%;
      ul{
        list-style: none;
        li{
          width: 100%;
          display: flex;
          margin-top: 15px;
          margin-bottom: 15px;
          .home-gonglue-con-tu{
            width: 95px;
            height: 72px;
            margin-left: 18px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .home-gonglue-con-span{
            font-size: 20px;
            width: 250px;
            margin-left: 12px;
          }
        }
      }
    }
    .home-shejishi-footers{
      display: flex;
      width: 100%;
      height: 50px;
      margin-bottom: 15px;
      p{
        line-height: 50px;
        width: 50%;
        text-align: center;
        font-size: 18px;
        color: #39c894;
        border: 1px solid #eaeaea;
        i{
          margin-left: 5px;
        }
      }
    }
  }
  .home-doce{
    width: 100%;
    p{
      margin-top: 18px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 18px;
      font-size: 14px;
      color: #333;
    }
  }
  .home-footer{
    width: 100%;
    p{
      width: 100%;
      margin-top: 18px;
      line-height: 20px;
      text-align: center;
      i{
        width: 16px;
        line-height: 16px;
        color: #39c894;
        margin-top: 1px;
      }
      span{
        margin-left: 5px;
        font-size: 16px;
        color: #333;
      }
    }
    .home-footer-ul{
      ul{
        list-style: none;
        display: flex;
        li{
          width: 25%;
          text-align: center;
          margin-top: 10px;
        }
        li:nth-child(1){
          color: #39c894;
        } 
      }
    }
    .home-footer-img{
      width: 100%;
      height: 80px;
      background: rgba($color: #000000, $alpha: 0.8);
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
} 
</style>

