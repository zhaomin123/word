<template>
    <div class="main">
      <div class="content">
        <div class="head">
                <span class="text">退款成功</span>                
                <span class="text1">2018-12-23 12:12:12</span>
        </div>
        <div class="line">
            <div>退款总金额</div>
            <div class="mon">￥6666</div>
        </div>
        <div class="card">
            <div class="card-content">
                <img class="goodsimg" src="../../assets/images/shuiji.jpg" alt="">
                <div class="card-info">
                    <div class="title">用净水器，储水专利反渗透三年情景家用净水器，储水专利反渗透三年</div>
                    <div class="type">
                        <span class="money">￥6666</span>
                        <span class="goods_type">规格：默认</span>
                        <span class="num">x1</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="gray_line"></div>
        <div class="line">
            <div>退款编号：&nbsp;54534534</div>
        </div>
        <div class="line">
            <div>退款时间&nbsp;2015-12-12 12:23:23</div>
        </div>
        <div class="line">
            <div>退款金额&nbsp;2015-12-12 12:23:23</div>
        </div>
        <div class="line">
            <div></div>
            <div class="button">
                <div class="button_normal">删除订单</div>
            </div>
        </div>
        <div class="line">
            <div>运费：</div>
            <div>￥6666</div>
        </div>
    </div>
        <div class="bottom">
            <span class="label">实付款：</span><span class="mon">￥12</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.gray_line {
  width: 100%;
  height: 20px;
  color: #f9f9f9;
}
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    overflow: hidden;
    overflow-y: scroll;
  }
  .head {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 100%;
    height: 200px;
    background: url("../../assets/images/order_bg.png");
    background-size: 100% 100%;
    img {
      width: 46px;
      height: 46px;
      margin-left: 30px;
    }
    .text {
      font-size: 34px;
      color: #fff;
      margin-left: 30px;
      width: 300px;
      text-align: left;
    }
    .text1 {
      font-size: 30px;
      color: #fff;
      margin-left: 30px;
      width: 300px;
      text-align: left;
      padding-top: 10px;
    }
  }
  .loaction {
    background: white;
    width: 100%;
    height: 185px;
    display: flex;
    flex-direction: row;
    .left {
      flex: 1;
      img {
        width: 50px;
        height: 45px;
        margin-top: 30px;
      }
    }
    .info {
      width: 630px;
      display: flex;
      flex-direction: column;
      padding-right: 30px;
      .nameinfo {
        text-align: left;
        font-size: 30px;
        color: #666;
        padding-top: 32px;
      }
      .locationinfo {
        text-align: left;
        font-size: 30px;
        color: #999;
        padding-top: 25px;
      }
    }
  }
}

.card {
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.goodsimg {
  width: 200px;
  height: 150px;
  margin-left: 25px;
}
.card-content {
  height: 210px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
.card-info {
  width: 525px;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 30px;
    color: #212727;
    text-align: left;
    padding-left: 20px;
    padding-bottom: 30px;
  }
  .type {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    align-items: center;
    .money {
      font-size: 40px;
      color: #999;
    }
    .goods_type {
      font-size: 24px;
      color: #999;
      margin-left: 134px;
    }
    .num {
      font-size: 24px;
      color: #999;
      margin-left: 46px;
    }
  }
  .num {
    font-size: 30px;
    color: #666;
    text-align: right;
    padding-right: 20px;
  }
}
.line {
  width: 695px;
  height: 90px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #eee;
  font-size: 32px;
  color: #999;
  background: #fff;
}
.label {
  font-size: 32px;
  color: #333;
}
.mon {
  font-size: 40px;
  color: #f00;
}

.button {
  display: flex;
  flex-direction: row;
  .button_normal {
    display: flex;
    padding: 0 20px;
    height: 60px;
    border: 2px solid #999;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  .button_active {
    display: flex;
    padding: 0 20px;
    height: 60px;
    border: 2px solid #44c3df;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-left: 20px;
    color: #44c3df;
  }
}
.bottom {
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
}
</style>

