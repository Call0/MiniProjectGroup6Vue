import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    serachResult: []
  },
  getters: {
    login (state) {
      return state.isLogin
    },
    getSearchResult (state) {
      return state.serachResult
    }
  },
  mutations: {
    setLogin (state, value) {
      state.isLogin = value
    },
    setSearchResult (state, value) {
      state.serachResult = value
    }
  },
  actions: {
    setLoginAction ({ commit }, value) {
      commit('setLogin', value)
    },
    setSearchResultAction ({ commit }, value) {
      this.commit('setSearchResult', value)
    }
  }
})
