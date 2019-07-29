<template>
  <div class="index">
    <!-- 顶部的信息栏 -->
    <head-contact></head-contact>
    <head-content></head-content>
  </div>
</template>

<script>
import headContact from "./header"
import headContent from "./content"

export default {
  name: 'index',
  components:{headContact,headContent,},
  data () {
    return {
    
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
