<template>
  <div class="tab-bar">
	 <tab :line-width="1"  :active-color='activeColor'>
          <tab-item v-for="item in items" :key="item.name" @on-item-click="handerTab">
			  	{{item.label}}
		  </tab-item>
        </tab>
	<!-- 通知 -->
	<Notice v-if="showNotice"></Notice>
	<Message v-else></Message>
  </div>
</template>
<script>
import { Tab, TabItem} from 'vux'
import Notice from './notice.vue';
import Message from './message.vue';
export default {
  components: {
     Tab, TabItem,Notice,Message
  },
  data() {
    return {
		  items: [{name: 0, label: '公告'}, {name: 1, label: '消息'}],
		  activeColor:'#fbc02d',
		  showNotice:true,
      }
  },
  methods: {
	handerTab(index) {	
		this.$log(index)
		if(index==0){
			this.showNotice = true
		}else{
			this.showNotice = false
		}
	}
  }
};
</script>
<style lang="scss" scoped>

</style>


