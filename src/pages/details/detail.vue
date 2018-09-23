<template>
    <div >
        <div class="detail">
            <div class="img-big">
                <img src="" alt="">
            </div>
            <div class="shopping-detail">
                <p> <span>¥ </span>4512</p>
                    
                <p class="spms">fdsjfkl ljsdf ksdfp skfjfdsjfkl ljsdf ksdfp skfjfdsjfkl ljsdf ksdfp skfjfdsjfkl ljsdf ksdfp skfjfdsjfkl ljsdf ksdfp skfjfdsjfkl ljsdf ksdfp skfj </p>

            </div>
       
            <div class=" Specifications">
                <div class="guige">规格</div>
                <div class="ico">
                    <div class="span">普通版</div>
                    <div class="span">加强版</div>
                    <div class="span">豪华版</div>
                </div>
            </div>
            <div class=" Specifications">
                <div class="guige">数量</div>
                <div class="ico number">
                    <div class=" reduce">-</div>
                    <div class=" num">{{number}}</div>
                    <div class="add">+</div>
                </div>
            </div>
            <div class=" Specifications footer">
                <div class="shouye">
                    <img src="../../assets/images/shouye.png" alt="">
                    首页
                    </div>
                <div class="shoucang">
                    <img src="../../assets/images/shoucang.png" alt=""> 
                    收藏
                </div>
                <div class="ico goumai">
                    <div class=" join"> 加入购物车</div>
                    <div class="buy">立即购买</div>
                </div>
            </div>
            <div class="big-img">
                <img src="" alt="">
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"detail",
    data () {
        return {
           number:"",
        }
    }
}
</script>
<style scoped src='../../../static/css/common.css'/>
<style lang="scss" scoped>
.detail{
    background: #f9f9f9;
}
.img-big{
    
    width: 100%;
    height: 620px;
  
    img{
        width: 100%;
        height: 100%;
    }
}
.shopping-detail{
    
    height: 200px;
    padding: 40px 20px 0;
    background: #fff;
    display: flex;
    justify-content: space-around;
   p{
       display: flex;
       flex-wrap: wrap;
       color: #ff0000;
       font-size: 56px;
       font-weight:bolder;
       text-align: start;
       line-height: 40px;
       span{
           font-size: 30px;
            font-weight:bolder;
       }
   }
   .spms{
       color: #212727;
       font-size: 30px;
       font-weight: normal;
       line-height: 30px;
      
   }
  
}
.Specifications{
    padding: 0px 20px;
    justify-content: space-between;
    flex-direction: row;
    line-height: 100px;
    margin-top: 10px;
    background: #fff;
    font-size: 32px;
    color: #212727;
    font-weight:bolder;
    .ico{
        flex-direction: row;
         display: flex;
          font-weight:bolder;
        .span{
            width: 130px;
            line-height: 55px;
            color: #fff;
            background: #44c3df;
            border-radius: 10px;
            justify-content: center;
            margin:10px 10px;
        }       
    }
    .number{
        border:2px solid #dddddd;
         margin:20px 10px;
         width: 188px;
         line-height: 60px;
         justify-content: space-around;
        .reduce{
           margin: 0 auto;
        }
        .num{
           border-left:2px solid #dddddd;
           border-right:2px solid #dddddd;
           padding:0 30px;
        }
        .add{
           margin: 0 auto;
        }
    }
    .shouye{
        font-size: 22px;
        color: #999999;
        img{
            width: 50px;
            height: 50px;
        }
    }
    .shoucang{
        font-size: 22px;
        color: #999999;
        img{
            width: 50px;
            height: 50px;
        }
    }
    .goumai{
        .join{
            width: 255px;
            height: 110px;
            color: #44c3df;
            border: 2px solid #44c3df;
            box-sizing: border-box;
        }
        .buy{
            width: 255px;
            height: 110px;
            color:#fff;
            background: #44c3df;
            
        }
    }

}
.footer{
    width: 100%;
    position: fixed;
    bottom:0;
}
.big-img{
   
    img{
        width: 100%;
        height: 100%;
       
    }
}

</style>
