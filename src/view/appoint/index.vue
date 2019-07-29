<template>
  <div class="index">
    <!-- 预约详情页面 -->
    预约
    {{user}}
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      user:{}
    }
  },
  mounted() {
    let tmpUser = localStorage.getItem('user')
    this.user= tmpUser
  }
}
</script>


<style scoped lang="scss">
 
</style>
