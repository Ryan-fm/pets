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
          <img src="http://viptail.image.alimmdn.com/files/official_web/img/cq001-f.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
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
</style>


