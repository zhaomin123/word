<template>
    <div class="shopwrapper">
        <div class="main">
          <div class="list">
            <div v-for="(i,k) in list " class="shop">
              <div class="left" @click="xuan(k)">
           
                 <img class="img" v-if="i.show" src="../../assets/images/edia.png" alt="">
                 <div class="img" v-else>
                </div>
              </div>
              <div class="mid">
                <div class="bg">

                </div>
              </div>
              <div class="right">
                <div class="right-top">情景家用净水器，储存水型专利反渗透压滤芯寿命三年
    
                </div>
                <div class="right-bottom">
                  <div class="money">￥{{i.pric}}</div>
                  <div class="other">规格：黑</div>
                  <div class="other">X1</div>
                </div>
              </div>
            </div>
          </div>

          <div class="contral" v-if="dshow">
            <div class="left">
              <div>
                <img class="img" v-if="selbtn" src="../../assets/images/edia.png" alt="">
                <div class="img" v-else></div>
              </div>
      
              <div @click="allslone" >
                全选
              </div>
            </div>
            <div class="mid">
              总计：￥{{price}}
            </div>
            <div class="right">
              <div class="one" @click="edit">
                编辑
              </div>
               <div class="tow">
                结算
              </div>
            </div>
          </div>
          <div class="contral" v-else>
            <div class="left">
              <div>
                <img class="img" v-if="debtn" src="../../assets/images/edia.png" alt="">
                <div class="img" v-else> </div>  
              </div>
               <div @click="allsltow">
                全选
              </div>
            </div>
            <div class="mid">

            </div>
            <div class="right">
              <div class="one" @click="finsh">
                完成
              </div>
               <div class="tow" @click="delect">
                删除
              </div>
            </div>
          </div>
        </div>
        <Alert :visable="alertTrue"  error_msg='确定删除商品吗' l_btn_msg="取消" r_btn_msg="确定" :sure_false="sure_false" :sure_true="sure_true"/>
        <div class="footer">
            <div class="foot_one_menu">
              <img src="../../assets/images/m_footer_01.png" alt="">
              <p class="f_active">商城</p>
            </div>
            <div  class="foot_one_menu">
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
import Alert from '@/component/alert'
import Vue from 'Vue'
export default {
  name: "index",
  data() {
    return {
      list:[{id:1,pric:20},{id:2,pric:20},{id:3,pric:20},{id:4,pric:20}],
      dshow:true,
      price:0,
      selbtn:false,
      debtn:false,
      alertTrue:false,
      ids:[]
    };
  },
  methods: {
    allslone() {
      if (this.selbtn) {
      this.list.map((i,k)=> {
         Vue.delete(this.list[k],'show')
         this.price -= this.list[k].pric
         this.ids=[]
      })
      this.selbtn = false
      } else {
        this.selbtn = true
        this.list.map((i,k)=> {
          Vue.set(this.list[k],'show',true)
          this.price += this.list[k].pric
          let obj= {
            id:this.list[k].id
          }
          this.ids.push(obj)
        })
      }

    },
    allsltow(){
      if (this.debtn) {
      this.list.map((i,k)=> {
         Vue.delete(this.list[k],'show')
         this.ids=[]
      })
      this.debtn = false
      } else {
        this.debtn = true
        this.list.map((i,k)=> {
          Vue.set(this.list[k],'show',true)
          let obj= {
            id:this.list[k].id
          }
          this.ids.push(obj)
        })
      }

    },
    delect() {
      this.alertTrue = true
    },
    sure_false() {
      this.alertTrue = false
    },
    sure_true() {
      alert('ok')
    },
    xuan(k) {
      if(this.list[k].show) {
        Vue.delete(this.list[k],'show')
        this.price -= this.list[k].pric
        // bug 
        this.ids.forEach((i,o)=>{
          if(i.id === this.list[k].id) {
             this.ids.splice(o,1)
          }
        })
        console.log(this.ids)


      }else {
        Vue.set(this.list[k],'show',true)
        this.price += this.list[k].pric
         let obj= {
            id:this.list[k].id
          }
          this.ids.push(obj)
      }
    },
    edit() {
      this.dshow = false
       this.ids=[]
        this.price = 0
       this.list.map((i,k)=> {
         Vue.delete(this.list[k],'show')
      })
    },
    finsh() {
      this.dshow = true
      this.price = 0
       this.ids=[]
      this.list.map((i,k)=> {
         Vue.delete(this.list[k],'show')
      })
    },
    /*我的*/
    go_my_center() {
      this.$router.push('/centerIndex');
    },
  },
  mounted() {
  },
  components: {
    Alert
  }
};
</script>

<style lang="scss" scoped>
.shopwrapper {
  display: flex;
  height:100vh;
  flex-direction: column;
  background-color:#eee; 
}
.main {
  flex:1;
  display: flex;
  flex-direction: column;
  .list {
    flex:1;
    overflow: scroll;
    .shop {
      padding: 30px 0;
      box-sizing:border-box; 

      display: flex;
      height: 210px;
      margin:20px 0;
       background-color:#fff; 
      .left {
        display:flex;
        align-items: center;
        justify-content: center;
        width:200px;
        .img {
          height: 45px;
          width: 45px;
          border-radius: 50%;
          border:1px solid #ccc;
        }
      }
      .mid {
        display:flex;
        align-items: center;
        .bg{
          width:200px;
          height: 100%;
          border:1px solid red;
        }
      }
      .right {
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
          .right-top {
            font-size: 30px;
            overflow: hidden;
          }
          .right-bottom {
             display: flex;
             justify-content: space-between;
               .money {
              font-size: 30px;
              color:red;
              font-weight: bold;
            }
            .other {
              font-size: 24px;
              color:#999;
            }
          }
      }
  }
  }
  .contral {
    background-color:#fff;
    height: 98px;
    border-top:1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
       align-items: center;
      .img {
        height: 45px;
        width:45px;
        border:1px solid #ccc;
        border-radius: 50%;
        margin: 0 20px;
      }
    }
    .mid {
      font-size: 33px;
      font-weight: 800;
    }
    .right{
       display: flex;
       .one {
         width: 130px;
         height: 94px;
        border: 2px solid #44c3df;
        line-height: 98px;
        color:#44c3df;
       }
       .tow {
          width: 130px;
          background: #44c3df;
           line-height: 98px;
           color:#fff;
       }
    }
  }
}
.footer {
  height: 98px;
  display: flex;
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
</style>
