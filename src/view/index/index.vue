<template>
  <div class="index">
    <!-- 顶部的信息栏 -->
    <head-contact></head-contact>
    <head-content></head-content>
    <re-commend class="comment"></re-commend>
  </div>
</template>

<script>
import headContact from "./header"
import headContent from "./content"
import reCommend from "./Recommend/index"
export default {
  name: 'index',
  components:{headContact,headContent,reCommend},
  data () {
    return {
    
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .comment{
    margin-top: 30px;
  }
</style>
