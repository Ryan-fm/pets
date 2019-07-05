<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  mounted () {
    // 验证本地是否已经登录过
    let tmpUser = localStorage.getItem('user')
    console.log(tmpUser);
    if (tmpUser) {
      this.setUser(JSON.parse(tmpUser))
    } else {
      this.$router.push({ path: '/login' })
    }
  },
  methods: {
     ...mapActions(['setUser', 'setUserData'])
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
}

</style>
