<template>
    <div class="index">
         <!--轮播图-->
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <a v-for="i in index_data.ratcoinBannerDTOS"  :href="i.bannerUrl" class="swiper-slide">
                  <img :src="i.bannerImg" alt="">
                </a>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <!--立即领取-->
          <immediately-receive></immediately-receive>
          <!-- 商品精选 -->
          <selection-of-goods :Selection_of_goods='Selection_of_goods'></selection-of-goods>
      <div class="scroll_box"></div>
        <div class="footer">
            <div class="foot_one_menu">
              <img src="../../assets/images/m_footer_01.png" alt="">
              <p class="f_active">商城</p>
            </div>
          <div @click="go_car()" class="foot_one_menu">
            <img src="../../assets/images/m_footer_04.png" alt="">
            <p>购物车</p>
          </div>
          <div @click="go_my_center" class="foot_one_menu">
            <img src="../../assets/images/m_footer_06.png" alt="">
            <p>我的</p>
          </div>
        </div>
    </div>
</template>

<script>
import api from "../../../static/js/index";
import ImmediatelyReceive from "./ImmediatelyReceive"
import SelectionOfGoods from './SelectionOfGoods'

export default {

  components:{
    ImmediatelyReceive,
     SelectionOfGoods
},
  name: "index",
  data() {
    return {
      Selection_of_goods:"geggduo jingp",
      timer_one: null,
      day_or_night: "",
      djs: "",
      today: null,
      token:"",
      index_data:{},
    };
  },
  created(){
     window.go_back = this.go_back;
     window.get_sao_result = this.get_sao_result;
     window.test = this.test;
     var storage=window.localStorage;
     storage.clear();
  },

  methods: {
    /*退出app*/
    go_back(){
        window.AndroidJs.exitApp();
    },
    /*收钱*/
    get_money() {
      this.$router.push("/qrcode");
    },
    /*扫一扫*/
    sao_sao() {
      window.AndroidJs.Scan();
    },
    /*商城*/
    shop_city() {
      this.$router.push("/mouse_city_index");
    },
    /*钱包*/
    go_wallet() {
      this.$router.push("/wallet");
    },
    /*会员管理*/
    member_manage() {
      this.$router.push("/member_manage");
    },
    /*订单管理*/
    order_manage() {
      this.$router.push('/order');
    },
    /*优惠券*/
    go_coupon() {
      this.$router.push("/card");
    },
    /*数据统计*/
    data_statistics() {
      this.$router.push('/datachart');
    },
    /*发现*/
    go_car() {
      this.$router.push('/shopcar');
    },
    /*我的*/
    go_my_center() {
      this.$router.push('/centerIndex');
    },
    test(){
      alert("fdfsd");
    },
    /*扫一扫结果*/
    get_sao_result(result){
      alert(result);
      // var result = 1;
      if(result){
        this.$router.push({
          path:'./scanres',
          query:{
            plate:result
          }
        });
      }
    }
  },
  mounted() {
    /*
           * ajax
           * */
          this.ajax({
            url: "",
            data: {},
            success: (result) =>{
              this.index_data = result.data;
              console.log(this.index_data);

              setTimeout(()=>{
                var mySwiper = new Swiper ('.swiper-container', {
                  direction: 'horizontal',
                  loop: true,
                  autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                    },
                  // 如果需要分页器
                  pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                    dynamicMainBullets: 2
                  },
                });
              },300);

            },
            error: function(error) {
              console.log(error);
            }
          });
    var timestamp = new Date().getTime();

    /*
        * 获取当前日期
        * */
    this.today = api.DATE(timestamp).slice(0, 10);

    /*
          * 鼠币获取倒计时
          * */
    this.timer_one = setInterval(() => {
      let timestamp = new Date().getTime();

      var now_hour = api.DATE(timestamp).slice(11, 13);
      var how_hour = "";
      if (now_hour >= 18 && now_hour <= 23) {
        how_hour = 30 - now_hour - 1;
        this.day_or_night = "今天白天";
      } else if (now_hour < 6) {
        how_hour = 6 - now_hour - 1;
        this.day_or_night = "今天白天";
      } else if (now_hour >= 6 && now_hour < 18) {
        how_hour = 18 - now_hour - 1;
        this.day_or_night = "昨天晚上";
      }
      this.djs =
        how_hour +
        "小时" +
        (60 - Number(api.DATE(timestamp).slice(14, 16))) +
        "分" +
        (60 - Number(api.DATE(timestamp).slice(17))) +
        "秒";
    }, 1000);

    /*
    * ajax
    * */
    this.ajax({
      url: "api/shopsaccount/listInformation",
      data: {},
      success: (result) =>{
        console.log(result);
        this.index_data = result.data;
        console.log(this.index_data);
      },
      error: function(error) {
        // console.log(error);
      }
    });
  }
};
</script>

<style scoped src='../../../static/css/common.css'/>
<style lang="scss" scoped>
.swiper-slide img{
    width:100%;
    height:350px;
  }
  .about_mouse_money{
    font-size: 28px;
    /*flex: 1;*/
  }
  .swiper-pagination{
    flex-direction: row;
  }
  .swiper-wrapper{
    width:100%;
    height:454px;
    flex-direction: row;
  }
  .swiper-container{
    width:100%;
    height:454px;
    flex-direction: row;
  }
p{
  text-align: center;
}
.footer {
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-top:1px solid #eaeaea;
  z-index: 1;
  justify-content: space-around;
  .foot_one_menu {
    align-items: center;
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
.scroll_box {
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}
.sec_c_two {
  /*flex: 1;*/
  background: #fff;
  border-top: 1px solid #ededed;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  li {
    /*height:220px;*/
    img {
      width: 100px;
      margin-top: 36px;
    }
    p {
      margin-top: 28px;
      font-size: 30px;
      color: #999;
    }
  }
}
.sec_c_one {
  padding: 37px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h5 {
    font-size: 28px;
    color: #292733;
    font-weight: 300;
  }
  h6 {
    font-size: 30px;
    color: #777;
    margin-top: 21px;
    font-weight: 100;
  }
}
.section {
  background: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex: 1;
  overflow-y: scroll;
  .sec_title {
    padding: 23px 30px 0;
    display: flex;
    flex-direction: row;
    line-height: 103px;
    border-bottom: 1px solid #ededed;
    justify-content: space-between;
    b {
      font-size: 36px;
      font-weight: 600;
    }
    span {
      font-size: 22px;
      color: #999;
      align-self: flex-end;
    }
  }
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 108px 30px 57px;
  position: relative;
  li {
    img {
      height: 100px;
      width: auto;
      position: static;
    }
    p {
      color: #e5ba6e;
      line-height: 106px;
    }
  }
  .index_line {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 98%;
  }
}
.index {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  font-size: 32px;
  background: #2f2c3b;
  display: flex;
}
</style>
