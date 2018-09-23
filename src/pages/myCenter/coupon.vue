<template>
    <div class="main">
        <div class="coupon">
            <span class="money">￥</span>
            <div class="num">30</div>
            <div class="title">满300可用</div>
            <div class="time">有效期：2018.2.12-2028.2.13</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {
    this.settitle("我的卡券");
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
}
.coupon {
  width: 700px;
  height: 200px;
  background: url("../../assets/images/coupon_bg.png");
  margin: 0 auto;
  background-size: 100% 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}
.money {
  font-size: 40px;
  color: white;
  position: relative;
  top: 90px;
  display: inline-block !important;
  height: 40px;
  left: 30px;
}
.num {
  color: #fff;
  height: 100px;
  font-size: 100px;
  position: relative;
  top: 50px;
  left: 30px;
}
.title {
  font-size: 32px;
  color: #535353;
  height: 34px;
  position: relative;
  top: 60px;
  font-weight: bold;
  left: 110px;
}
.time {
  font-size: 28px;
  color: #535353;
  height: 30px;
  position: relative;
  top: 120px;
  left: -40px;
}
</style>
