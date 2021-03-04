import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
    searchResult: []
  },
  getters: {
    login (state) {
      return state.isLogin
    },
    getSearchResult (state) {
      return state.searchResult
    }
  },
  mutations: {
    setLogin (state, value) {
      state.isLogin = value
    },
    setSearchResult (state, value) {
      state.searchResult = value
    }
  },
  actions: {
    setLoginAction ({ commit }, value) {
      commit('setLogin', value)
    },
    setSearchResultAction ({ commit }, value) {
      commit('setSearchResult', value)
    }
  }
})
