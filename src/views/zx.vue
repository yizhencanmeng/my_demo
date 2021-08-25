<template>
    <div class="bigger">
        <!-- 头部 -->
        <div class="top">
            <div>
                <img class="wa" src="img/logo.png" alt="">
            </div>
            <div>
                <span class="zxys">装修预算</span>
            </div>
            <div class="top2">
            <p><i class="iconfont icon-nav"></i></p>
            <span>导航</span>
            </div>
        </div>
    <!-- 轮播 -->
        <div>
            <img  class="tu" src="/img/house_info.jpg" alt="">
        </div>
      
      <div class="xxx">
          房先森/装修攻略/装修预算/正文
      </div>
    
      <div class="aaa">
         <p><span class="aaaspan">装修预算注意事项</span></p>
         <p><span>2016-01-09</span><span>&emsp;&emsp;&emsp;<i class="iconfont icon-view"></i>115</span></p>
      </div>

      <div class="bbb">
          <div class="bbbzi">
              &emsp;&emsp;导语：在装修时如果没有提前最好装修预算，很容易造成最后开支过大，添置很多没有必要的增项。那么在做预算的时候又什么需要的地方呢？
          </div>
        <img class="bbbtu" src="/img/case/case1.jpg" alt="">
      </div>

      <div class="ccc">
          点击产开全文
      </div>

      <div class="ddd">
          <div class="dd1">
            <div class="ddd1">
              <i class="iconfont icon-pencle"></i>
          </div>
          <span>评价(10)</span>
          </div>
          <div class="dd2">
          <div class="ddd2">
              <i class="iconfont icon-share"></i>
          </div>
          <span>分享</span>
          </div>
      </div>

       <div class="ccc">
          进入装修预算
      </div>

       <div class="fff">
           <div class="fff1"></div>
           <span>猜你喜欢</span>
       </div>

       <div class="hhh">
           <div class="zuo"><img src="/img/common/icon_logo.png" alt=""></div>
           <div class="you">
               <p>遇见有这样房子的男人就嫁了吧</p>
               <br/><br/>
               <p>2016-07-07&emsp;&emsp;&emsp;&emsp;115</p>
           </div>
       </div> 
    </div>
</template>
<script>

</script>

<style lang="scss">
.bigger{
    width: 100%;
    height: 100%;
}
.top{
    display: flex;
    justify-content: space-around;
    height: 70px;
}
.wa{
    height: 45px;
      margin-top: 16px;
      margin-bottom: 16px;
      margin-left: 18px;
}
.zxys{
    font-size: 20px;
    line-height: 70px;
}
.top2{
    width: 50px;
    text-align: center;
    padding-top:20px;
}
.tu{
    height: 150px;
    width: 100%;
}
.xxx{
    width: 90%;
    line-height: 30px;
    background: #ccc;
    margin: auto;
}
.aaa{
    height: 100px;
    /* background: pink; */
    text-align: center;
    padding-top: 20px;
}
.aaaspan{
    font-size: 25px;
}
.bbbzi{
    color: #ccc;
}
.bbbtu{
    width: 80%;
    margin-left: 30px;
}
.ccc{
    width: 95%;
    margin:5px;
    border: 1px solid green;
    line-height: 30px;
    text-align: center;
    color: pink;
}
.ddd{
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    height: 100px;
    // background: red;
}
.dd1{
    height: 110px;
    text-align: center;
    color: #1b9af7;
}
.ddd1{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px solid #1b9af7;
    text-align: center;
    .icon-pencle{
    font-size: 50px;
}
}
.dd2{
    height: 110px;
    text-align: center;
    color: #eed215;
}
.ddd2{
     width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px solid #eed215;
    text-align: center;
    .icon-share{
    font-size: 50px;
    }
}
.fff{
    margin-left: 10px;
    line-height: 40px;
    .fff1{
        display: inline-block;
        width: 5px;
        height: 30px;
        background: #2bb281;
        margin-right: 10px;
    }
    span{
        font-size: 20px;
    }
}
.hhh{
    height: 80px;
    // background: red;
    display: flex;
    justify-content: space-around;
    .zuo{
        width: 30%;
        height: 80px;
        // background: pink;
        img{
            height: 80px;
            width: 80px;
        }
    }
    .you{
        width: 60%;
        height: 80px;
        // background: blue;
    }
}
</style>
