<template>
    <div>
        <selection-of-goods
         :Selection_of_goods="Selection_of_goods"> 
        </selection-of-goods>
        <selection-of-goods :go_buy='buy' ></selection-of-goods>
        <p>父组件的值将会出现在这里{{childData}}</p>
         <div class="red" :class="{dome:isdome}" @click="div()">12334</div>
         </div>
</template>
<script>
import SelectionOfGoods from '../index/SelectionOfGoods'
    export default {
        name:'moreBoutique',
        components:{
           SelectionOfGoods,
        },
        data(){
            return{
                'Selection_of_goods':'更多精品',
                'dome':"red",
                isdome:false, 
                mun:'' ,
               ' father-tell-me':'',
              'childData':'',
               }; 
 },
 methods:{
    buy: function(fatherData){
        this.childData=fatherData;
        console.log(3)
    },
   
     div:function(){
        // mum++
        this.isdome=!this.isdome

     },
  },


    }
</script>

<style lang="scss" scoped>
.red{
    color: red;
}
.dome{
    color: pink;
}
</style>

