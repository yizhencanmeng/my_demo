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
          <div class="ddd1">
              <i class="iconfont icon-pencle"></i>
          </div>
          <div class="ddd2">
              <i class="iconfont icon-share"></i>
          </div>
      </div>
    </div>
</template>
<script>

</script>

<style>
.bigger{
    width: 100%;
    height: 100%;
}
.top{
    display: flex;
    justify-content: space-around;
    height: 70px;
    background: red;
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
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    height: 80px;
    background: red;
}
.ddd1{
    width: 30px;
    height: 30px;
}
.icon-pencle{
    font-size: 50px;
}
.icon-share{
    font-size: 50px;
}
</style>
