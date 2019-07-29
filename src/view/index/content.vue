<template>
  <div class="content">
    <!-- 信息栏 -->
    <div class="message">
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
             <span>申请家庭</span>
             <img src="../../../static/img/family.png" alt="">
          </div>         
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
             <span>宠物指南</span>
             <img src="../../../static/img/guide.png" alt="">
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
             <span>保障指南</span>
             <img src="../../../static/img/protect.png" alt="">
          </div>
        </flexbox-item>
    </flexbox>
    </div>
    <!-- 轮播部分 -->
    <div style="margin-top:30px">
      <swiper loop auto :list="imgs" :index="imgs" @on-index-change="onIndexChange"></swiper>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem,Swiper } from 'vux'
const showTimeS=[
          {
            img:"http://viptail.image.alimmdn.com/files/official_web/img/cq001-f.jpg",
            title:'小狗之家',
          },
          {
            img:"http://viptail.image.alimmdn.com/files/official_web/img/cq001-f.jpg",
            title:'小狗之家2',
          },
       ];
const urlList = showTimeS.map((item, index) => ({
  url: 'http://www.baidu.com',
  img: item.img,
  title: item.title
}))
export default {
  name: 'content',
  components:{Flexbox, FlexboxItem,Swiper},
  data () {
    return {
       imgs:urlList,
       
    }
  },
  methods:{
    onIndexChange() {

    },
  }
}
</script>

<style scoped lang="scss">
  .message .flex-demo{
    text-align: center
  }
  .message img{
    height: 30px;
    margin-left: 5px;
  }
  .content{
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
