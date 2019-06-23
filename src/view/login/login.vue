<template>
  <div class="login">
      <div class="login-bg">
         <md-field>
          <md-input-item
            ref="name"
            title="真实姓名"
            placeholder="用户姓名"
            is-title-latent
            clearable
          >
          </md-input-item>
          <md-input-item
            ref="password"
            type="password"
            title="密码"
            placeholder="请输入密码"
            is-title-latent
            clearable
            >
            </md-input-item>
    </md-field>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
     
    }
  },
  mounted () {
   
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
.login-bg{
  height:100vh;
  height: 100vw;
}
</style>
