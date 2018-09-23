<template>
    <div>
        <!--新弹框提醒-->
        <div v-if="visable" class="set_pass_fog">
            <div class="s_p_f_i">
                <p class="s_p_f_i_title">提示</p>
                <p class="s_p_f_i_sec">{{error_msg}}</p>
                <div class="s_p_f_i_c_box">
                    <p @click="sure_false" class="can_false">{{l_btn_msg}}</p>
                    <p @click="sure_true" class="sure_true">{{r_btn_msg}}</p>
                </div>
            </div>
        </div>
        <div v-if="visable" class="s_s_fog"></div>
    </div>
</template>
<script>
export default {

  props: ['visable', 'error_msg', 'l_btn_msg', 'r_btn_msg','sure_true','sure_false'],
  mounted(){
  },
}
</script>
<style scoped>
.sure_true {
  flex: 1;
  color: #44c3df;
  font-size: 30px;
  text-align: center;
}
.can_false {
  flex: 1;
  color: #666;
  font-size: 30px;
  text-align: center;
}
.s_p_f_i_c_box {
  display: flex;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
}
.s_p_f_i_sec {
  font-size: 28px;
  color: #666;
}
.s_p_f_i_title {
  font-size: 32px;
  line-height: 90px;
  text-align: left;
}
.s_p_f_i {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 518px;
  padding: 10px 38px 40px;
  border-radius: 10px;
  z-index: 999;
}
.set_pass_fog {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  z-index: 998;
}
</style>
