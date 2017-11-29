<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
  
    <router-view />
  
    <q-ajax-bar />
  </div>
</template>

<script>
/*
 * Root component
 */
import {
  QAjaxBar
} from 'quasar'
import Vue from 'vue'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    QAjaxBar
  },
  beforeMount() {
  //  this.$auth.logout({
    //   redirect: 'Home',
    //  makeRequest: false
    // params: {},
    // success: function () {},
    // error: function () {},
    // etc...
    // })
  },
  created() {
    var vm = this
    Vue.axios.get('/json/main_setting.json')
      .then(function(response) {
        let mimi = response.data
        vm.$store.commit('siteContent', mimi)
        Vue.axios.get('/json/user_model.json')
          .then(function(response) {
            let mimi = response.data
            vm.$store.commit('siteModel', mimi)
            // console.log('loaded')
          })
          .catch(function(error) {
            alert('loading config fail')
            console.log(error)
          })
      })
      .catch(function(error) {
        alert('loading config schema fail')
        console.log(error)
      })
  },
  methods: {
  },
  beforeDestroyed() {
    this.$auth.logout({
      redirect: 'Home',
      makeRequest: false
      // params: {},
      // success: function () {},
      // error: function () {},
      // etc...
    })
  }
}
</script>

<style></style>
