export default {
  state: {
    user:null,
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    setUser (state,data) {
      state.user = data
    }
  },
  actions: {
    serUser (store ,data) {
      store.commit(setUser,data)
    }
  }

}