<template>
    <div class="card">
        <slot name="header"></slot>
        <div class="card-content">
          <img class="goodsimg" src="../../../assets/images/shuiji.jpg" alt="">
          <div class="card-info">
            <div class="title">{{item.name}}</div>
            <div class="type">规格：默认</div>
            <div class="num">x1</div>
          </div>
        </div>
        <slot name="bottom"></slot>
    </div>
</template>

<script>
export default {
  props:['item'],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
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
.card-info{
  width: 525px;
  display: flex;
  flex-direction: column;
  .title{
    font-size: 30px;
    color: #212727;
    text-align: left;
    padding-left: 20px;
    padding-bottom: 30px;
  }
  .type{
    font-size: 26px;
    color: #999;
    text-align: left;
    padding-left: 20px;
  }
  .num{
    font-size: 30px;
    color: #666;
    text-align: right;
    padding-right: 20px;
  }
}


</style>

