<template>
  <div class="index">
    <!-- 注册页面 -->
     <div class="logo-set">
      <img src="http://viptail.image.alimmdn.com/files/official_web/img/icon_logo.png" alt="">
    </div>
     <div class="md-example-child md-example-child-input-item-1">
      <md-field>
        <md-input-item
          v-model="user.name"
          title="用户名"
          placeholder="用户名"
          is-title-latent
          clearable
        ></md-input-item>
         <md-input-item
          v-model="user.phone"
          title="手机号码"
          placeholder="手机号码"
          is-title-latent
          clearable
          type="phone"
          error="请输入正确的手机号码"
          ></md-input-item>
        <md-input-item
          v-model="user.password"
          title="密码"
          placeholder="密码"
          is-title-latent
          clearable
          type="password"
          ></md-input-item>
           <md-input-item
          v-model="user.repeatPw"
          title="确认密码"
          placeholder="确认密码"
          is-title-latent
          clearable
          type="password"
          @blur="checkPassword"
          >
           <p
          v-if="isError"
          class="error"
          slot="error"
        >
          两次的密码不一致
        </p></md-input-item>
      </md-field>
      <md-button type="primary" round @click="handleClick">注册</md-button>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import {register} from '@/api/user'
export default {
  name: 'register',
  data () {
    return {
      user:{
        name:'',
        password:'',
        repeatPw:'',
        phone:'',
      },
       isError: false,//检查确认密码是否正确
    }
  },
  methods: {
    ...mapActions(['setUser']),
    handleClick() {
        // 先判断密码和确认密码是否一致
        register(this.user).then(res=>{
          let User = JSON.stringify(this.user);
            this.setData('user',User);
            //存到vuex
            this.setUser(this.user);
            this.$toast.succeed(`欢迎您的加入, ${this.user.name}`,1500)
            this.$router.push({path:'/'});
        })
    },
    // 检查密码是否一致
    checkPassword() {
      if (this.user.password !== this.user.repeatPw) {
        this.isError = true
      } else {
        this.isError = false
      }
    },
  },
}
</script>


<style scoped lang="scss">
 .login{
  position: relative;
}
.logo-set{
  margin:30px auto 20px
}
.logo-set img{
  height:40px;
  margin-left: 10px;
}
.md-input-item-input{
  font-size: 20px
}
.md-example-child-input-item-1.md-field{
    padding-bottom:40px;
}
.md-button.primary{
  color:$font-color;
  font-size: 20px; 
  height: 50px;
  background-color:$topic-color
}
.title { position: relative; z-index: 2; font-size: 16px; line-height: 24px; text-align: center; color: #999; overflow: hidden; }
.title .caption { position: relative; display: inline-block; }
.title .caption .line { position: absolute; top: 11px; width: 600px; height: 1px; background-color: #ddd; }
.title .caption .line-l { right: 100%; margin-right: 15px; }
.title .caption .line-r { left: 100%; margin-left: 15px; }


</style>
