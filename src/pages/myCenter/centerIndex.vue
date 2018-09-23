<template>
  <div class="main">
    <div class="header">
      <div class="header_box">
        <img class="heade_img" :src="shopinfo.shopsImg || headimg" />
        <div class="name">周小瑞</div>
      </div>
    </div>
    <div class="content">
      <div class="location_mer">
        <div class="line_1">
          <div class="title"><div class="dot"></div>我的订单</div>
          <div class="order">查看全部订单></div>
        </div>
        <div class="li">
          <div class="line"></div>
        </div>
        <div class="icon">
          <div><img src="../../assets/images/waitmoney.png" alt=""><span>待付款</span></div>
          <div><img src="../../assets/images/waitfahuo.png" alt=""><span>待发货</span></div>
          <div><img src="../../assets/images/waitshouhuo.png" alt=""><span>待收货</span></div>
          <div><img src="../../assets/images/oncomplate.png" alt=""><span>已完成</span></div>
          <div><img src="../../assets/images/tuikuan.png" alt=""><span>退款售后</span></div>
        </div>
      </div>
      
      <div class="div">
        <img class="icon" src="../../assets/images/d_location.png" />
        <span>地址管理</span>
        <img class="arrow" src="../../assets/images/d_arrow.png" />
      </div>
      <div class="li">
        <div class="line"></div>
      </div>
      <div class="div" @click="go_coupon()">
        <img class="icon" src="../../assets/images/copon.png" />
        <span>我的优惠券</span>
        <img class="arrow" src="../../assets/images/d_arrow.png" />
      </div>
      <div class="li">
        <div class="line"></div>
      </div>
      <div class="div">
        <img class="icon" src="../../assets/images/save.png" />
        <span>我的收藏</span>
        <img class="arrow" src="../../assets/images/d_arrow.png" />
      </div>
      <div class="li">
        <div class="line"></div>
      </div>
      <div class="div">
        <img class="icon" src="../../assets/images/group.png" />
        <span>我的拼团</span>
        <img class="arrow" src="../../assets/images/d_arrow.png" />
      </div>
      <div class="li">
        <div class="line"></div>
      </div>
      <div class="div">
        <img class="icon" src="../../assets/images/pindan.png" />
        <span>我的拼单</span>
        <img class="arrow" src="../../assets/images/d_arrow.png" />
      </div>
      <div class="li">
        <div class="line"></div>
      </div>
      <div class="div">
        <img class="icon" src="../../assets/images/auth.png" />
        <span>销售授权</span>
        <img class="arrow" src="../../assets/images/d_arrow.png" />
      </div>
      <div class="li">
        <div class="line"></div>
      </div>
      <div class="div">
        <img class="icon" src="../../assets/images/kefu.png" />
        <span>联系客服</span>
        <img class="arrow" src="../../assets/images/d_arrow.png" />
      </div>
    </div>
    <div class="footer">
      <div @click="go_index()" class="foot_one_menu">
        <img src="../../assets/images/m_footer_02.png" alt="">
        <p class="f_active">商城</p>
      </div>
      <div @click="go_car()" class="foot_one_menu">
        <img src="../../assets/images/m_footer_04.png" alt="">
        <p>购物车</p>
      </div>
      <div class="foot_one_menu">
        <img src="../../assets/images/m_footer_05.png" alt="">
        <p>我的</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuth: false,
      AuthText: "",
      shopinfo: {},
      headimg: require("../../assets/images/m_one.png")
    };
  },
  created() {
    // this.$store.dispatch('setToast',true);
    // let token = this.gettoken()
    this.ajax({
      url: "/api/shopsaccount/selectByPerShopsAccount",
      data: {
        // token:token
      },
      success: result => {
        console.log(result);
        this.shopinfo = result.data;
        if (this.shopinfo.isapproval) {
          this.AuthText = "已认证";
        } else {
          this.AuthText = "未认证";
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
    window.go_back = this.go_back;
  },
  methods: {
    /*退出app*/
    go_back() {
      window.AndroidJs.exitApp();
    },
    share() {
      this.$router.push("/share");
    },
    auth() {
      return this.shopinfo.isapproval === true
        ? "../../../static/img/d_is_auth.png"
        : "../../../static/img/d_no_auth.png";
    },
    setting() {
      this.$router.push("/setting");
    },
    go_index() {
      this.$router.push("/");
    },
    go_coupon() {
      this.$router.push("/coupon");
    },
    go_auth() {
      this.$router.push("/auth");
    },
    go_edit() {
      this.$router.push("/shopedit");
    },
    go_car() {
      this.$router.push("/shopcar");
    },
    applyad() {
      this.$router.push("/applyads");
    }
  }
};
</script>


<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 0 !important;
}
.li {
  height: 2px !important;
  background: #fff !important;
  width: 100vw !important;
}
.line {
  height: 2px !important;
  width: 660px !important;
  // background: #fff!important;
  background: #e1e1e1 !important;
  margin: 0 auto;
  // margin-left: 60px !important;
}
.header {
  background-image: url("../../assets/images/d_center_back.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 310px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  .header_box {
    height: 175px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .heade_img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
    }
    .name {
      font-size: 34px;
      font-weight: bold;
      padding-top: 10px;
    }
  }
}
.margin_20 {
  margin-top: 20px;
}
.content {
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  display: block;
  flex-direction: column;
  background: #f5f5f5;
  padding-top: 20px;
  .div {
    height: 120px;
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: row;
    padding-left: 30px;
    align-items: center;
    .icon {
      width: 40px;
      height: 40px;
    }
    .arrow {
      width: 30px;
      height: 30px;
    }
    span {
      font-size: 32px;
      color: #333;
      padding-left: 20px;
      text-align: left;
      flex: 0.9;
    }
  }
}
.footer {
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-top: 1px solid #eaeaea;
  z-index: 1;
  justify-content: space-around;
  .foot_one_menu {
    align-items: center;
    display: flex;
    flex-direction: column;
    img {
      width: 50px;
    }
    p {
      font-size: 26px;
      color: #555;
      text-align: center;
      padding-top: 10px;
    }
    .f_active {
      color: #2f2c3b;
    }
  }
}

.location_mer {
  height: 280px !important;
  width: 100%;
  background: #fff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column !important;
  .line_1 {
    height: 90px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 30px;
    display: flex;
    .dot {
      height: 30px;
      width: 6px;
      background: #2ebcdb;
      margin-right: 15px !important;
    }
    .title{
      display: flex;
      font-size: 32px;
    }
    .order{
      font-size: 26px;
      color: #999;
    }
  }
  .icon{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 30px;
      img{
        width: 60px;
        height: 60px;
      }
      span{
        padding-top: 20px;
        font-size: 28px;
        color: #212727;
      }
    }
  }
}
</style>

