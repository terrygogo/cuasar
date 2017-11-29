import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    siteContent: null,
    siteModel: null
  },
  getters: {
    Gcount: state => {
      return state.count + 1
    }
  },
  mutations: {
    increment (state, payload) {
      state.count += payload
    },
    siteContent (state, payload) {
      state.siteContent = payload
    },
    siteModel (state, payload) {
      state.siteModel = payload
    },
    changeTest (state, payload) {
      state.siteContent.title = payload
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

export default store
