import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    siteContent: null,
    siteModel: null,
    dashboard_layout: null
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
    },
    dashboard_load (state, payload) {
      state.dashboard_layout = payload
    },
    dashboard_add_entry (state, payload) {
      state.dashboard_layout.push(
        {
          x: 0,
          y: 0,
          w: 2,
          h: 12,
          i: '0',
          api: '/api/systemstat',
          comp_type: 'list',
          title: 'system info',
          refresh_period: 10000
        })
    },
    dashboard_delete_entry (state, payload) {
      var i
      var ndx
      var ff = false
      for (i = 0; i < state.dashboard_layout.length; i++) {
        if (state.dashboard_layout[i].i === payload) {
          ndx = i
          ff = true
          break
        }
      }
      debugger
      if (ff) {
        state.dashboard_layout.splice(ndx, 1)
      }
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

export default store
