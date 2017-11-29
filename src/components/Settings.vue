<template>
  <div class="layout-padding">

    <q-collapsible icon="account_circle" opened label="사용자 등록 및 설정 "  sublabel="omamama" style="max-width: 100%; margin-bottom: 25px" class="shadow-2">
      <div id='user_json_editor_holder'></div>
      <div class="row reverse">
        <q-btn icon="done" color="primary" @click="apply_user_settings">적용/apply</q-btn>
        <q-btn icon="reply" color="secondary" @click="reply_user_settings">되돌리기/reply</q-btn>
      </div>
    </q-collapsible>

    <q-collapsible icon="computer" opened label="서버 등록 및 설정  " sublabel="Set Server Information to Connect" style="max-width: 100%; margin-bottom: 25px" class="shadow-2">

      <div id='server_json_editor_holder'> </div>
      <div class="row reverse">
        <q-btn icon="done" color="primary" @click="apply_server_settings">적용/apply</q-btn>
        <q-btn icon="reply" color="secondary" @click="reply_server_settings">되돌리기/reply</q-btn>
      </div>
    </q-collapsible>

    <q-collapsible icon="add_alert" opened label="모니터 설정" sublabel="Set Monitor Thresholds" style="max-width: 100%; margin-bottom: 25px" class="shadow-2">
      <div id='threshold_editor_holder'>

      </div>
      <div class="row reverse">
        <q-btn icon="done" color="primary" @click="apply_server_settings">적용/apply</q-btn>
        <q-btn icon="reply" color="secondary" @click="reply_server_settings">되돌리기/reply</q-btn>
      </div>
    </q-collapsible>

  </div>
</template>

<script >
import Vue from 'vue'
// import * as uiv from 'uiv'
// Vue.use(uiv)
import {
  QDataTable,
  QField,
  QInput,
  QCheckbox,
  QSelect,
  QSlider,
  QBtn,
  QIcon,
  QTooltip,
  QCollapsible
} from 'quasar'
/* global JSONEditor : true */
require('json-editor/dist/jsoneditor')
export default {
  components: {
    QDataTable,
    QField,
    QInput,
    QCheckbox,
    QSelect,
    QSlider,
    QBtn,
    QIcon,
    QTooltip,
    QCollapsible
  },
  beforeDestroy() { },
  data() {
    return {
      obobj: null,
      user_model: []
    }
  },
  methods: {
    apply_user_settings() {
      const vm = this
      Vue.axios.post('/json/user_model.json', vm.user_model)
        .then(function(response) {
          console.log(response)
          vm.$store.commit('siteModel', vm.user_model)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    apply_server_settings() { },
    apply_threshold_settings() { },
    reply_user_settings() {
      const vm = this
      Vue.axios.get('/json/user_model.json')
        .then(function(response) {
          vm.user_model = response.data
          console.log(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    reply_server_settings() { },
    reply_threshold_settings() { },
    updateValue() { }
  },
  created() {
  },
  mounted() {
    var vm = this
    this.obobj = vm.$store.state.siteContent
    this.user_model = vm.$store.state.siteModel
    var uelement = document.getElementById('user_json_editor_holder')
    var ueditor = new JSONEditor(uelement, {
      iconlib: 'fontawesome4',
      theme: 'html',
      startval: this.user_model,
      no_additional_properties: true,
      required_by_default: true,
      enum_titles: true,
      disable_collapse: true,
      disable_properties: true,
      disable_edit_json: true,
      disable_array_delete_all_rows: true,
      disable_array_delete_last_row: true,
      schema: this.obobj
    })
    var that = vm
    ueditor.on('change', function() {
      var value = ueditor.getValue()
      that.$data.user_model = value
    })

    /*
    Vue.axios.get('/json/main_setting.json')
      .then(function(response) {
        this.obobj = response.data
       // var model = this.user_model
        console.log(response.data)
       //  var thos = vm
        Vue.axios.get('/json/user_model.json')
      .then(function(response) {
       // var vm = this
        this.user_model = response.data
        console.log('mamma')
        var uelement = document.getElementById('user_json_editor_holder')
        var ueditor = new JSONEditor(uelement, {
          iconlib: 'fontawesome4',
          theme: 'html',
          startval: this.user_model,
          no_additional_properties: true,
          required_by_default: true,
          enum_titles: true,
          disable_collapse: true,
          disable_properties: true,
          disable_edit_json: true,
          disable_array_delete_all_rows: true,
          disable_array_delete_last_row: true,
          schema: this.obobj
        })
        var that = vm
        ueditor.on('change', function() {
          // Do something
          var value = ueditor.getValue()
          that.$data.user_model = value
        })
      }.bind(this))
      .catch(function(error) {
        console.log(error)
      })
      }.bind(this))
      .catch(function(error) {
        console.log(error)
      })
    */
    var selement = document.getElementById('server_json_editor_holder')
    var seditor = new JSONEditor(selement, {
      iconlib: 'fontawesome4',
      theme: 'bootstrap3',
      disable_collapse: true,
      no_additional_properties: true,
      startval: null,
      schema: {
        type: 'array',
        title: '망연계 서버',
        format: 'table',
        confirmDelete: function() {
          return window.confirm('Are you sure?')
        },
        items: {
          properties: {
            name: {
              type: 'string'
            },
            location: {
              type: 'string',
              enum: [
                'IN',
                'OUT'
              ],
              default: 'IN'
            },
            hostname: {
              'type': 'string'
            },
            ip: {
              title: 'hello',
              type: 'string',
              format: 'upload'
            },
            port: {
              type: 'number'
            },
            id: {
              title: 'hello',
              type: 'string',
              format: 'button'
            },
            password: {
              type: 'string',
              format: 'password'
            },
            service: {
              type: 'array',
              format: 'checkbox',
              items: {
                'type': 'string',
                'enum': [
                  'fcp2',
                  'urlrelay',
                  'send2',
                  'mailforward'
                ]
              },
              'uniqueItems': true
            }
          }
        }
      }
    })

    var thats = this
    seditor.on('change', function() {
      // Do something
      var value = seditor.getValue()
      thats.model2 = value
      console.log('jjj')
    })
    seditor.watch('root.0.id', function() {
      console.log('gotcha')
    })
  }
}
</script>


<style lang="stylus" >
@import '~variables'

h3 {
  font-size: 16px;
}

input[name*=port] {
  width: 50px;
}
 
input[name*=auth] {
  width: 180px;
}
input[name*=timer] {
  width: 120px;
}
input[name*=threshold] {
  width: 140px;
}
 
td[data-schematype*=array] {
  border-style: dotted;
  border-width: 1px;
  border-color: grey ;
}
 
table{border-collapse:collapse}

td {
    padding-top: .5em;
    padding-bottom: .5em;
}

// for horizontal scroll 

#server_json_editor_holder{
    max-width: 100%;
    height:100%;
    border: 1px solid #bed5cd;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}
#user_json_editor_holder{
    max-width: 100%;
    height:100%;
    border: 1px solid #bed5cd;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}
</style>
