<template>
  <div>
    <!-- 头部 -->
    <div class="title">
      <p>为你推荐</p>
      <p>RECOMMEND CONTENT</p>  
    </div> 
    <!-- 主体内容 -->
    <div class="content">
      <!-- 背景 -->
      <div class="bg-photo"> 
        <p  class="pic-title">| 养宠记录册</p>
        <img src="http://viptail.image.alimmdn.com/files/official_web/img/cq001-f.jpg" alt="">
        <flexbox style="padding:10px 20px">
          <flexbox-item>
            <img src="../../../../static/img/dog.png" alt="" style="width:20px;height:20px">
            <!-- 用户名 -->
            <span class="topic-color">狗大王的生活</span>
          </flexbox-item>
          <flexbox-item>

              <span>大长腿和小短腿</span>
              <!-- 用户头像 -->
              <img src="http://viptail.image.alimmdn.com/files/official_web/img/cq001-f.jpg" alt="" class="user-photo">
          </flexbox-item>
        </flexbox>
      </div>
    </div>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  name:'recommend',
  components: {
    Flexbox,
    FlexboxItem
  } 
}
</script>
<style lang="scss" scoped>
  .title p:nth-child(1){
    font-size: $font-title;
    color:$font-color
  }
  .title p:nth-child(2){
    font-size: $font-size;
    color:gray;
    margin-top:10px;
  }
  .content{
    margin-top: 20px
  }
  .bg-photo {
    position: relative;
    .pic-title{
      text-align:left;
      margin-left:20px;
      position: absolute;
      top:10px;
      font-size: $font-title;
      background-color:#e0d7d7
    }
    img{
      height: 200px;
      width: 100%;
    }
    .topic-color{
      color:$topic-color
    }
    .user-photo{
      border-radius: 50%;
      height: 50px;
      width: 50px;
      position: absolute;
      bottom:20px;
    }
  }
   
</style>


