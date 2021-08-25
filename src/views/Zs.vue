<template>
<div class="home">
    <van-nav-bar
        title="欧美文化的抽象美感"
        left-arrow
        >
        <template #right>
            <div class="tou">
                <i class="iconfont icon-nav"></i>
                <p>导航</p>
            </div>     
        </template>
    </van-nav-bar>
    <!-- 内容 -->
    <div class="con">
        <div class="item" v-for="(item,index) in list" :key="index" v-show="index==0">
            <img :src="item.img" alt="" />
            <van-steps :active="active"  inactive-color="#39c894" active-icon="#39c894">
                <van-step><p>客厅</p><p>(1)</p></van-step>
                <van-step><p> 卧室</p> <p>(0)</p></van-step>
                <van-step><p>书房</p>  <p>(0)</p></van-step>
                <van-step><p>厨房</p> <p>(0)</p></van-step>
                <van-step> <p>卫生间</p> <p>(0)</p></van-step>
                <van-step><p>餐厅</p> <p>(0)</p></van-step>
                <van-step><p>阳台</p> <p>(0)</p></van-step>
                <van-step><p>其他</p> <p>(0)</p></van-step>
            </van-steps>
            <div class="lis">
                设计诠释： less is more 不需要过多的装饰，
                简单的墙面背景与简洁的家具即可组成一个温暖的家
            </div>
        </div>
        <div class="list">
            房先森互联网装有别于传统装修公司与其他装修中介平台，
            以自营模式整合设计师与项目经理， 杜绝项目转包外包，
            利用物联网将工地进行在线全景直播，通过去中环节，
            提供装修套餐+个性化定制服务。
        </div>
        <div class="hua"></div>
        <p class="p1"> <i class="iconfont icon-hot-line"></i> 服务热线：400_9977_658</p>
        <div class="lie">
            <ul>
                <li>触摸屏</li>
                <li>电脑版</li>
                <li>关于我们</li>
                <li>联系我们</li>
            </ul>
        </div>
        <div class="di">
             <button>  <i class="iconfont icon-design"></i>预约免费设计</button>
        </div>
    </div>
</div>
</template>

<script>
import list from "../../public/list.json"
console.log(list.data,"iii")
export default {
    data(){
        return{
            list:list.data,
            active:1
        }
    }
 
}
</script>
<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    .tou{
    height: 30px;
    i{
        height: 10px;
       margin-top: 5px;
       color: #ccc;
    }
    p{
        margin-top: -5px;
        color: #ccc;
    }
}
.con{
    width: 100%;
    height: 200px;
   .item{
       width: 100%;
        background: #333333;
        img{
            margin-top: 50px;
            width: 100%;
        }
        van-steps{
            background: #333333;
        }
        .lis{
            color: white;
            padding: 0 20px;
            font-size: 15px;
        }
        
          
   }
   .list{
        margin-top: 10px;
        text-indent:2em;
    }
    .hua{
        margin-top: 20px;
        width: 100%;
        height: 20px;
        background: #ccc;
        
    }
   .p1{
       width:100%;
       text-align: center;
       i{
           color: #39c894;
           font-size: 20px;
       }
   }
   .lie{
       width: 100%;
       margin-top: 10px;
       ul{
           width: 100%;
           display: flex;
           justify-content: space-around;
           align-items: center;
           :nth-child(1){
               color: #39c894;
           }
       }
   }
   .di{
       width: 100%;
     button{
         width: 100%;
         border: 0;
         color: white;
         background: #ff4351;
         font-size: 15px;
         height: 30px;
         i{
             font-size: 18px;
             padding: 0 5px;
         }
     }
   }
}

}

</style>

