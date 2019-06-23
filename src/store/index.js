import Vue from 'vue'
import Vuex from 'vuex'


// 引入各部分组件
import user from '@/store/module/user'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
      user
    }
})
// this.$store.commit('increment')
//this.$store.state.count