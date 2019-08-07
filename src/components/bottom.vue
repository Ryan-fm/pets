<template>
 <!-- 底部栏 -->
    <tabbar>
      <tabbar-item selected link="/index">
        <img slot="icon" src="../../static/img/index.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/pets">
        <img slot="icon" src="../../static/img/pet.png">
        <span slot="label">宠物</span>
      </tabbar-item>
      <tabbar-item  link="/message">
        <img slot="icon" src="../../static/img/message.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/home">
        <img slot="icon" src="../../static/img/home.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,TabbarItem
  }
}
</script>
<style lang="scss" scoped>
  
</style>

