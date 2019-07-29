<template>
  <div class="pets">
    <flexbox>
      <flexbox-item :span="1">
          <img src="../../../static/img/search.png" alt="#" class="search-img">
      </flexbox-item>
      <flexbox-item>
        <tab :line-width="1" custom-bar-width="60px" :active-color='activeColor'>
          <tab-item selected>精选</tab-item>
          <tab-item>发现</tab-item>
          <tab-item>最新</tab-item>
        </tab>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import { Tab, TabItem,Flexbox, FlexboxItem} from 'vux'
export default {
    name:'pet',
   components: {
    Tab,
    TabItem,Flexbox, FlexboxItem
  },
  data (){
    return{
      activeColor:'#fbc02d'
    }
  }
}
</script>
<style lang="scss" scoped>
  .search-img{
    height: 20px;
    margin-left: 10px;
  }
</style>

