<template>
  <div>
      <div class="goods">
          <div class="title">
              <span >{{Selection_of_goods}}</span>
              <i @click="more_boutique()">更多精品>>></i>
          </div>
          <h1>{{fatherData}}</h1>
          <button @click="clickme">我是父组件，点击我，我将我的值传给子组件</button>  
          <div >
            <ul class=" shopping">
                <li class="goods-list">
                    <div class="left">  
                        <img src="" alt="">
                    </div>
                    <div class="right">
                
                        <div class="car-buy">
                            <div class="bbb"><span>¥ 400</span></div>
                            <div class="shopping-car">
                                <div class=" come car">
                                    <img src="../../assets/images/m_footer_07.png" alt="">
                                </div>
                                <div class=" come buy"  >购买</div>
                            </div>
                            

                        </div>
                    </div>
                </li>
            </ul>
        </div>
      </div>
  </div>      
</template>

<script>
export default {
    props:['Selection_of_goods'],
 data(){
    return{
      //  'Selection_of_goods':'商品精选    新建了一个分支',
       fatherData:"凄凄切切   "  
    };
    },
 methods:{
     /*更多精品*/
   more_boutique(){
      this.$router.push('/moreBoutique');
    },
 clickme:function(){
         console.log(1)
        this.$emit('go_buy',this.fatherData)
        console.log(2)
    },
   
    
   
 }
}
</script>


<style lang="scss" scoped>
.goods{
    background: #f9f9f9;
    
    padding-top: 20px;
    .title{
        background: #fff;
       
        padding:20px 20px 18px;
        //margin: 0 20px;
        line-height: 30px;
        display: flex;
        justify-content:space-between;
        
        span{
            padding-left: 14px;
            font-size: 32px;
            font-weight: bolder;
            color:#212727;
            border-left: 5px solid #2ebcdb;
        }
        i{
            font-size: 26px;
            color:#999;
            font-style: normal;
            font-weight: bolder;
        }
    }
}
.shopping{
    border-top: 1px solid #999;
    padding: 30px 20px 40px;
     background: #fff;
    
    .goods-list{
         display: flex;
        justify-content: space-between;
        .left{
            width: 200px;
            height: 150px;
            background: red;
            margin-right:20px ;
        }
        .right{
           width: 80%;
            p{
                text-align: left;
            }
            .car-buy{
                margin-top:40px;
                display: flex;
                justify-content: space-between;
               .bbb{
                    span{
                    color:#ff0000;
                    font-weight: bolder;
                    display: flex;
                    justify-content: flex-end;  
                }
               }
                .shopping-car{
                    display: flex;
                    .come{
                        width: 100px;
                         height: 55px;
                        vertical-align: middle;
                        border: 1px solid #4bc5e0;
                        border-radius: 10px;
                        color:#4bc5e0;
                    }
                    .car{
                       img{
                            width:auto;
                            height:auto;
                            max-width:100%;
                            max-height:100%;
                       }
                    }
                    .buy{
                        vertical-align: middle;
                        margin-left: 14px;
                        align-items: center;
                        display: flex;
                        justify-content: center;
                    }
                }
            }
        }
    }
}
</style>

