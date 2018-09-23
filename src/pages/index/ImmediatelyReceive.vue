<template>
   <section>
       <ul class="list">
           <li class="list-money">
               <div class="top">
                   <span>10</span>
                   <span><img  class="img2" src="../../assets/images/d_arrow.png" alt=""></span>
                   
               </div>
              <p class="coupon">满200可用</p>
              <p class="draw">立即领取 <img src="../../assets/images/d_arrow.png" alt=""></p>

           </li>
           <li class="list-money">
               <div class="top">
                   <span>30</span>
                   <span><img  class="img2" src="../../assets/images/d_arrow.png" alt=""></span>
                   
               </div>
              <p class="coupon">满500可用</p>
              <p class="draw">立即领取 <img src="../../assets/images/d_arrow.png" alt=""></p>

           </li>
           <li class="list-money">
               <div class="top">
                   <span>50</span>
                   <span><img  class="img2" src="../../assets/images/d_arrow.png" alt=""></span>
                   
               </div>
              <p class="coupon">满800可用</p>
              <p class="draw">立即领取 <img src="../../assets/images/d_arrow.png" alt=""></p>

           </li>
          
         
       </ul>
    
   </section>
           
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>
.list{
   background: #fff;
    display: flex;
    padding:20px 12.5px 30px 12.5px;
  
    
}
.list-money{
    margin:0 12.5px;
    padding:25px 33px 20px 33px;
    padding-bottom:20px;
    
    background: #fff url('../../assets/images/xiankuang.png')  no-repeat  ;
     background-size: 100% 100%;
   .top{
     position: relative;
    
      vertical-align: text-top;
      //background: #fff url('../../assets/images/¥@2x.png') 200px 0px no-repeat  ;
      span {
         font-size: 100px;
         color: #5353;
         font-style:  bolder;
      }
     .img2{
      vertical-align:super;
     
      
     }
   }
   p{
       font-size: 24px;
       color: #ccc;
       vertical-align: middle;
       font-weight: bolder;
       img{
           width: 20px;
           height: 20px;
           vertical-align: middle;
       }
   }
   .coupon{
       padding-top: 18px;
       padding-bottom: 13px;
       color: #808080;
   }
   .draw{
      // width: 140px;
       line-height: 35px;
      color: #d0d0d0;
       text-align: center;
       background: #535353;
       
       img{
           vertical-align: middle;
       }
   }
}
</style>

