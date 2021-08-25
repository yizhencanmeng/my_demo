<template>
    <div class="pj">
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

        <div class="aaa">
            <div class="aaa1">
                <div class="a">
                <p><i class="iconfont icon-user"></i></p>
                <span>x*h</span>
                </div>
                <div class="aa">2016-05-19</div>
            </div>
            <div class="bbb">这篇文章很实用，正在装修，刚好可以用来参考一下。</div>    
        </div>
        <div class="aaa">
            <div class="aaa1">
                <div class="a">
                <p><i class="iconfont icon-user"></i></p>
                <span>z*o</span>
                </div>
                <div class="aa">2015-05-19</div>
            </div>
            <div class="bbb">这篇文章很实用。</div>    
        </div>
        <div class="aaa">
            <div class="aaa1">
                <div class="a">
                <p><i class="iconfont icon-user"></i></p>
                <span>h*5</span>
                </div>
                <div class="aa">2019-02-19</div>
            </div>
            <div class="bbb">这个设计师为人随和，很喜欢他。画图也仔细</div>    
        </div>
        <div class="aaa">
            <div class="aaa1">
                <div class="a">
                <p><i class="iconfont icon-user"></i></p>
                <span>x*n</span>
                </div>
                <div class="aa">2017-05-20</div>
            </div>
            <div class="bbb">这篇文章很实用，正在装修，刚好可以用来参考一下。</div>    
        </div>
        <div class="aaa">
            <div class="aaa1">
                <div class="a">
                <p><i class="iconfont icon-user"></i></p>
                <span>z*o</span>
                </div>
                <div class="aa">2016-05-20</div>
            </div>
            <div class="bbb">这篇文章很实用，刚好可以用来参考一下。</div>    
        </div>
        <div class="aaa">
            <div class="aaa1">
                <div class="a">
                <p><i class="iconfont icon-user"></i></p>
                <span>h*5</span>
                </div>
                <div class="aa">2016-05-19</div>
            </div>
            <div class="bbb">正在装修，刚好可以用来参考一下。</div>    
        </div>

        <div class="ooo">
            <div class="ooo1">上一页</div>
            <div class="ooo2">2/30</div>
            <div class="ooo1">下一页</div>
        </div>

           <div class="fxs">
           &emsp;&emsp;房先森互联网家装又别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
       </div>

       <div class="ding">
       <div class="kong"></div>
        <i class="iconfont icon-backtop"></i>
       </div>
        
        <div class="phone">
             <i class="iconfont icon-tel"></i>服务热线:400-9977-658
        </div>
        <div class="ban">
            <span>触摸版</span>
            <span>电脑版</span>
            <span>关于我们</span>
            <span>联系我们</span>
        </div>
        <div class="di">
            <img src="/img/quoten_bottom.png" alt="">
            <span>免费获取报价</span>
        </div>
    </div>
</template>
<style lang="scss">
.pj{
    width: 100%;
    height: 100%;
}
.top{
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-bottom:1px solid #999;
}
.wa{
    height: 45px;
      margin-top: 16px;
      margin-bottom: 16px;
      margin-left: 5px;
}
.zxys{
    margin-right: 55px;
    font-size: 22px;
    line-height: 70px;
}
.top2{
    width: 50px;
    text-align: center;
    padding-top:20px;
}
.aaa{
    width: 95%;
    margin: auto;
    height: 110px;
    border-bottom: 1px solid #999;
    .aaa1{
        display: flex;
        justify-content: space-between;
        .a{
            p{  
            display: inline-block;
            width: 50px;
            height: 50px;
            background: pink;
            border-radius: 30px;
            text-align: center;
            color: white;
            padding-top: 5px;
            .icon-user{
                font-size: 35px;
            }
        }
        span{
            font-size: 30px;
            margin-left: 5px;
            color: #ccc;
        }
        }
        
    }
    .aa{
        padding-top: 18px;
        font-size: 22px;
        color: #ccc;
    }
    .bbb{
        font-size: 17px;
    }
}
.ooo{
    height: 50px;
    // background: red;
    display: flex;
    justify-content: space-around;
    .ooo1{
        width: 110px;
        line-height:50px;
        background: #39c894;
        text-align: center;
        font-size: 20px;
        color: white;
    }
    .ooo2{
        width: 110px;
        line-height:50px;
        text-align: center;
        font-size: 20px;
    }
}
.di{
    height: 100px;
    background: #333333;
    display: flex;
    justify-content: space-around;
    img{
        width:220px;
        height: 78px;
    }
    span{
        margin-top: 13px;
        padding-top: 10px;
        color: white;
        width: 120px;
        height: 40px;
        background: #feb505;
        border-radius: 30px;
        text-align: center;
    }
}
.ban{
    display: flex;
    justify-content: space-around;
}
.phone{
    width: 190px;
    margin: auto;
    height: 30px;
}
.ding{
    height: 30px;
    position: relative;
    .icon-backtop{
        font-size: 50px;
        position: absolute;
        top: -18px;
        right: 10px;
        color: #999;
    }
}
.fxs{
    color: #ccc;
}
.kong{
    height: 15px;
    background: #ccc;
}
</style>
