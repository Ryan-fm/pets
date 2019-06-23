<template>
  <div class="content">
    <!-- 顶部的信息栏 -->
      <h6 class="title-set">别去笼子，让毛孩子住我家</h6>
      <p class="label-set">温馨舒适的环境，开放宽敞的活动空间。</p>
       <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item,key) in showTimeS" :key="key">
          <img :src="item.imgurl" alt="" style="height:150px;width:100%">
            <el-row class="label-detail">
              <el-col :span="6">
                   <img :src="item.userUrl" style="height:30px;width:30px;border-radius:50%;padding:10px 0px 10px">
              </el-col>
              <el-col :span="11">
                  <span style="" class="detail-home">家庭</span>
                  <span class="home-detail">家有芒果</span>
                  <p>
                     <img src="../../../static/img/location.png" alt="#" style="height:10px">
                     广州
                  </p>
              </el-col>
              <el-col :span="7">
                <span class="detail-price">￥50</span>
                晚/起
              </el-col>
            </el-row>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
       showTimeS:[
         {
           imgurl:"http://viptail.image.alimmdn.com/files/official_web/img/cq001-f.jpg",
           name:'鸡血小皇后的家',
           userUrl:'http://viptail.image.alimmdn.com/files/official_web/img/cq001-u.jpg',
           city:'重庆',
           price:'40'
         },
         {
           imgurl:"http://viptail.image.alimmdn.com/files/official_web/img/cq001-f.jpg",
           name:'鸡血小皇后的家',
           userUrl:'http://viptail.image.alimmdn.com/files/official_web/img/cq001-u.jpg',
           city:'重庆',
           price:'40'
         },
         {
           imgurl:"http://viptail.image.alimmdn.com/files/official_web/img/cq001-f.jpg",
           name:'鸡血小皇后的家',
           userUrl:'http://viptail.image.alimmdn.com/files/official_web/img/cq001-u.jpg',
           city:'重庆',
           price:'40'
         },
       ]
    }
  },
}
</script>

<style scoped lang="scss">
  .content{
    height:1000px;
    margin-top:20px
  }
  .title-set{
    font-size: 22px;
    color: #333;
    font-weight: 700
  }
  .label-set{
    color: #a0a0a0;
    font-size: 15px;
    margin-top: 20px
  }
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .label-detail{
    height: 50px;
  }
  .detail-home{
    display:inline-block;
    width:12px;
    padding:2px;
    background:$topic-color;
    font-size: 12px
  }
  .home-detail{
    font-size: 10px
  }
  .detail-price{
    font-size: 20px;
    color: $topic-color;
  }
</style>
