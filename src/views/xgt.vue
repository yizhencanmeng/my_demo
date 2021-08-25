<template>
<div class="xgt">
    <div class="logo">
        <div class="left">
            <img src="@/img/logo.png" alt="">
        </div>
        <div class="title">
            <p>效果图</p>
        </div>
        <div class="right">
            <div>
                <van-icon name="contact" size="30" color="#999999" /> 
                <p>我的</p>
            </div>
            <div>
                <van-icon name="bars" size="30" color="#999999" />
                <p>导航</p>
            </div>
        </div>
    </div>
    <div class="nav">
        <ul>
            <li>户型 <span><van-icon name="arrow-down" color="#dedede" /></span></li>
            <li>区域 <span><van-icon name="arrow-down" color="#dedede" /></span></li>
            <li>风格 <span><van-icon name="arrow-down" color="#dedede" /></span></li>
            <li><van-icon name="search" color="#dedede" /></li>
        </ul>
    </div>
    <div class="con">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
                <p>{{item.guige}}</p>
            </li>
        </ul>
        <div class="fen">
            <button>上一页</button>
            <p>2/30</p>
            <button>下一页</button>
        </div>
        <div class="jian">
            <p>	房先森互联网家装有别于传统装修公司与其他装修中介平台，
                以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，
                通过去中间环节，提供装修套餐 + 个性化定制服务。
            </p>
        </div>
    </div>
    <div class="foot">
        <p>服务热线：400-9977-658</p>
        <ul>
            <li>触屏版</li>
            <li>电脑版</li>
            <li>关于我们</li>
            <li>联系我们</li>
        </ul>
        
    </div>
    <div class="footer">
        <img src="@/img/foot.png" alt="">
        <button>免费获取报价</button>
        <img class="img" src="@/img/icon_close.png" alt="">
    </div>
</div>
</template>

<script>
export default {
  prop: {},
  components: {},
  data() {
    return {
      list: [],
    };
  },

  computed: {},

  watch: {},

  methods: {},

  async created() {
    var res = await this.http.get("/data.json");
    console.log(res);
    this.list = res.data;
  },

  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style lang='scss' scoped>
.xgt {
  .logo {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    .left {
      width: 100px;
      height: 40px;
      margin-top: 16px;
      margin-left: 18px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      width: 100px;
      height: 50px;
      margin-top: 16px;
      p {
        text-align: center;
        line-height: 50px;
        font-size: 20px;
      }
    }
    .right {
      width: 100px;
      height: 50px;
      margin-top: 16px;
      margin-right: 18px;
      display: flex;
      justify-content: space-around;
      div {
        text-align: center;
        width: 50px;
        height: 30px;
        p {
          color: #999;
          font-size: 14px;
        }
      }
    }
  }
}
.nav {
  width: 100%;
  height: 50px;
  border-top: 1px solid #ededed;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    li:nth-child(4) {
      font-size: 30px;
      margin-top: 10px;
    }
    li {
      line-height: 50px;
      display: flex;
      span {
        width: 30px;
        height: 50px;
        font-size: 25px;
        margin-top: 5px;
        margin-left: 8px;
      }
    }
  }
}
.con {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 12px;
    box-sizing: border-box;
    li {
      width: 48%;
      height: 200px;
      img {
        width: 100%;
        height: 140px;
      }
      p {
        text-align: center;
      }
      p:nth-child(2) {
        font-size: 12px;
      }
    }
  }
  .fen {
    width: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    button {
      width: 100px;
      height: 40px;
      background: #39c894;
      border: none;
      color: white;
    }
    p {
      line-height: 40px;
      width: 50px;
      text-align: center;
      font-size: 25px;
    }
  }
  .jian {
    width: 100%;
    padding: 12px;
    p {
      color: #999999;
      font-size: 14px;
    }
  }
}
.foot {
  width: 100%;
  margin-top: 20px;
  p {
    color: #999999;
    font-size: 16px;
    text-align: center;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    li {
      color: #999999;
      font-size: 16px;
    }
  }
}
.footer {
  width: 100%;
  background: #333333;
  display: flex;
  justify-content: space-around;
  position: relative;
  img {
    width: 200px;
    height: 50px;
    margin-left: 20px;
  }
  button {
    margin-top: 20px;
    width: 120px;
    height: 25px;
    border: none;
    border-radius: 15px;
    background: #feb505;
    color: white;
  }
  .img {
    position: absolute;
    top: 0;
    left: -20px;
    width: 25px;
    height: 25px;
  }
}
</style>