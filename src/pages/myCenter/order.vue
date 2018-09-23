<template>
    <div class="main">
        <div class="header">
            <div :class="activetab == 0 ? 'active':''" @click="changeactive(0)">待付款</div>
            <div :class="activetab == 1 ? 'active':''" @click="changeactive(1)">待发货</div>
            <div :class="activetab == 2 ? 'active':''" @click="changeactive(2)">待收货</div>
            <div :class="activetab == 3 ? 'active':''" @click="changeactive(3)">已完成</div>
            <div :class="activetab == 4 ? 'active':''" @click="changeactive(4)">退款售后</div>
        </div>
        <div v-if="flag"></div>
        <div class="content">
          <div v-if = "activetab == 0">
            <Shopcar :item="list">
              <template slot="header">
                <div class="order_head">
                  <div>订单编号:8381267678</div>
                  <div>1023-09-07 12:12:12</div>
                </div>
              </template>
              <template slot="bottom">
                <div class="payment_bottom">
                  <div>合计：￥6666</div>
                  <div class="button">
                    <div class="button_normal">取消</div>
                    <div class="button_active">付款</div>
                  </div>
                </div>
              </template>
            </Shopcar>
          </div>
          <div v-if = "activetab == 1">
            <Shopcar :item="list">
              <template slot="header">
                <div class="order_head">
                  <div>订单编号:8381267678</div>
                  <div>1023-09-07 12:12:12</div>
                </div>
              </template>
              <template slot="bottom">
                <div class="payment_bottom">
                  <div>合计：￥6666</div>
                  <div class="button">
                    <div class="button_normal">取消订单</div>
                  </div>
                </div>
              </template>
            </Shopcar>
          </div>
          <div v-if = "activetab == 2">
            <Shopcar :item="list">
              <template slot="header">
                <div class="order_head">
                  <div>订单编号:8381267678</div>
                  <div>1023-09-07 12:12:12</div>
                </div>
              </template>
              <template slot="bottom">
                <div class="payment_bottom">
                  <div>圆通快递:12232312</div>
                  <div class="button">
                  </div>
                </div>
                <div class="payment_bottom">
                  <div>合计：￥6666</div>
                  <div class="button">
                    <div class="button_normal">确认收货</div>
                  </div>
                </div>
              </template>
            </Shopcar>
          </div>
          <div v-if = "activetab == 3">
            <Shopcar :item="list">
              <template slot="header">
                <div class="order_head">
                  <div>订单编号:8381267678</div>
                  <div>1023-09-07 12:12:12</div>
                </div>
              </template>
              <template slot="bottom">
                <div class="payment_bottom">
                  <div>合计：￥6666</div>
                  <div class="button">
                    <div class="button_normal">删除订单</div>
                  </div>
                </div>
              </template>
            </Shopcar>
          </div>
          <div v-if = "activetab == 4">
            <Shopcar :item="list">
              <template slot="header">
                <div class="order_head">
                  <div>订单编号:8381267678</div>
                  <div>1023-09-07 12:12:12</div>
                </div>
              </template>
              <template slot="bottom">
                <div class="payment_bottom">
                  <div class="icon_box"><img class="icon" src="../../assets/images/shouhou.png" alt="">退款成功</div>
                  <div class="button">
                    <div class="button_normal">删除订单</div>
                    <div class="button_active">查看详情</div>
                  </div>
                </div>
              </template>
            </Shopcar>
          </div>
        </div>
    </div>
</template>

<script>
import Shopcar from "./components/shopcard";
export default {
  components: { Shopcar },
  data() {
    return {
      // 显示相应标签的标志
      activetab: 0,
      list:{
        name:'用净水器，储水专利反渗透三年情景家用净水器，储水专利反渗透三年'
      }
    };
  },
  created() {
    this.settitle("订单");
  },
  methods: {
    changeactive(tab) {
      this.activetab = tab;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    div {
      font-size: 32px;
      color: #999;
      border-bottom: 4px solid #fff;
      padding-bottom: 30px;
    }
    .active {
      color: #44c3df;
      border-bottom: 4px solid #44c3df;
    }
  }
  .content {
    flex: 1;
  }
}
.order_head{
  width: 695px;
  height: 80px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;
  font-size: 30px;
  color: #666;
}
.payment_bottom{
  width: 695px;
  height: 90px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #eee;
  font-size: 30px;
  color: #333;
}
.icon{
  width: 35px;
  height: 40px;
}
.button{
  display: flex;
  flex-direction: row;
  .button_normal{
    display: flex;
    padding: 0 20px;
    height: 60px;    
    border: 2px solid #999;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    
  }
  .button_active{
    display: flex;
    padding: 0 20px;
    height: 60px;
    border: 2px solid #44c3df;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-left: 20px;
    color:#44c3df;
  }
}
.icon_box{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

