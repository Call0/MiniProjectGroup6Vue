import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
    searchResult: [],
    bookingResult: {}
  },
  getters: {
    login (state) {
      return state.isLogin
    },
    getSearchResult (state) {
      return state.searchResult
    },
    getBookingResult (state) {
      return state.bookingResult
    }
  },
  mutations: {
    setLogin (state, value) {
      state.isLogin = value
    },
    setSearchResult (state, value) {
      state.searchResult = value
    },
    setBookingResult (state, value) {
      state.bookingResult = value
    }
  },
  actions: {
    setLoginAction ({ commit }, value) {
      commit('setLogin', value)
    },
    setSearchResultAction ({ commit }, value) {
      commit('setSearchResult', value)
    },
    setBookingResultAction ({ commit }, value) {
      commit('setBookingResult', value)
    }
  }
})
