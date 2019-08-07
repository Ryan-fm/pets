<template>
  <div class="index">
        <!-- 寄养 -->
       <div class="bg_pic">
         <img src="http://viptail.image.alimmdn.com/files/official_web/img/icon_logo.png" alt="" class="pic-logo">
         <p class="bg-title">成为寄养家庭</p>
         <!-- 预约寄养 -->
         <el-button type="warning" style="margin-top:120px" @click="goAppoint">预约寄养</el-button>
       </div>
  </div>
</template>

<script>

export default {
  name: 'headContact',
  data () {
    return {
      petName:'',//宠物姓名
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  methods: {
      goAppoint(){
          this.$router.push({
            path:'/appoint'
          })
      }
  }
}
</script>


<style scoped lang="scss">
  .bg_pic {
    height:200px;
    background: url(http://viptail.image.alimmdn.com/files/official_web/img/home_top.jpg);
    background-size: 100% 200px;
    background-repeat: no-repeat
  }
  .bg_pic .pic-logo {
    float: left;
    margin: 20px 0px 0px 20px;
    height: 20px;
  }
  .bg-title {
    color: $font-color;
    background-color: $topic-color;
    height: 20px;
    float:right;
    font-size: $font-size;
    margin-right: 20px;
    margin-top: 10px;
    text-align: center;
    padding: 10px 5px 0px;
    border-radius: 5px
  }
  .be-appoint{
    color: $font-color;
    background-color: $topic-color;
    height: 20px;
    width: 60px;
    font-size: $font-size;
    margin-right: 20px;
    text-align: center;
    padding: 10px 5px 0px;
    border-radius: 5px
  }
  .bg_pic .el-button--warning{
      background-color: $topic-color;
      color: $font-color;
  }
</style>
