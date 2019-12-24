<template>
  <div id="app">
    <view-box ref="viewBox">
      <router-view/>
      <bottom-bar v-if="isLogin"></bottom-bar>
    </view-box >
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ViewBox } from 'vux'
import bottomBar  from './components/bottom'
export default {
  name: 'App',
  components:{
    bottomBar,ViewBox
  },
  data() {
    return {
      isLogin:false
    }
  },
  mounted () {
    // 验证本地是否已经登录过
    let tmpUser = this.getDate('user')
    if (tmpUser) {
      this.isLogin = true
      this.setUser(tmpUser)
    } else {
      this.$router.push({ path: '/login' })
    }
  },
  methods: {
     ...mapActions(['setUser'])
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
