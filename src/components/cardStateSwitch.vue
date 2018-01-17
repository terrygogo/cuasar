<template>
  <card-template  :card-title="cardTitle" :base-color="baseColor" :icon-name="iconName" :what="what"
                :period="period"  :id="id" >
    <q-card-main class="card-content">
      <q-list dense link v-for="(value, key) in layout" v-bind:key="11">
        <q-list-header  > {{key}}
        </q-list-header>   <q-item-side right >
            <q-btn color="primary" icon="" @click="runcmd">Go</q-btn>
          </q-item-side>
        <q-item  v-for="(value, key) in value" v-bind:key="11" >
          <q-item-main>
            <q-item-tile v-show="show_content" label>{{key}}</q-item-tile>
          </q-item-main>
          <q-item-side>
           {{value}}
          </q-item-side>
         
        </q-item>
     
      </q-list>
    </q-card-main>
     <q-inner-loading :visible="visible_loading">
            <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
          </q-inner-loading>
  </card-template>
</template>

<script type="text/javascript">
import Vue from 'vue'
import {
  Loading,
  Toast,
  QAjaxBar,
  QLayout,
  QToolbar,
  QTabs,
  QFab,
  QCard,
  QCardTitle,
  QCardSeparator,
  QCardMain,
  QCheckbox,
  QFabAction,
  QRouteTab,
  QToolbarTitle,
  QFixedPosition,
  QPopover,
  QBtn,
  QIcon,
  QList,
  QTooltip,
  QListHeader,
  QInnerLoading,
  QCollapsible,
  QSideLink,
  QSpinnerBars,
  QItem,
  QItemTile,
  QItemSide,
  QItemMain,
  QItemSeparator,
  QSpinnerGears,
  QKnob,
  AppFullscreen
} from 'quasar'
import cardTemplate from './cardTemplate.vue'
export default {
  components: {
    Loading,
    Toast,
    QTooltip,
    QFab,
    QFabAction,
    QAjaxBar,
    QLayout,
    QToolbar,
    QTabs,
    QCard,
    QCheckbox,
    QRouteTab,
    QToolbarTitle,
    QBtn,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QIcon,
    QPopover,
    QList,
    QSpinnerBars,
    QListHeader,
    QSideLink,
    QSpinnerGears,
    QCollapsible,
    QInnerLoading,
    QItem,
    QItemSide,
    QItemTile,
    QItemSeparator,
    QFixedPosition,
    QItemMain,
    QKnob,
    AppFullscreen,
    cardTemplate
  },
  props: ['what', 'baseColor', 'iconName', 'cardTitle', 'period', 'child_height', 'id'],
  created() {
    /*
    var that = this
    if (this.period < 0) {
      Vue.axios.get(this.what)
        .then(function(response) {
          that.results = response.data
          // console.log(response)
        })
    }
    else {
      setInterval(() => {
        Vue.axios.get(this.what)
          .then(function(response) {
            that.results = response.data
          // console.log(response)
          })
      }, this.period)
    } */
  },
  computed: {
    formatBytes(bytes) {
      if (bytes < 1024) return bytes + ' Bytes'
      else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
      else if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + ' MB'
      else return (bytes / 1073741824).toFixed(1) + ' GB'
    }
  },
  watch: {
  },
  methods: {
    runcmd() {
      // this.visible_loading = true
      // this.show_content = false
      var that = this
      Vue.axios.post('/api/run', {
        cmd: 'netstat'
      })
        .then(function(response) {
          that.layout[0].std_out = response.data.std_out
          // that.visible_loading = false
          // that.show_content = true
          // console.log(response)
        })
    },
    pre_check() {
      var xx
      for (xx in this.results) {
        if (typeof this.results[xx] !== 'object') {
          delete this.results[xx]
        }
      }
      return this.results
    }
  },
  data() {
    return {
      visible_loading: false,
      show_content: true,
      options: {
        separator: '.'
      },
      results: null,
      tempkey: '',
      layout: [
        {
          i: '0',
          api: '/api/run',
          cmd: 'list',
          state: '?',
          title: 'system info',
          std_out: '',
          std_err: '',
          return_code: ''
        },
        {
          i: '1',
          api: '/api/run',
          cmd: 'list',
          state: '?',
          title: 'disk info',
          std_out: '',
          std_err: '',
          return_code: ''
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
      var xx = this.$el.clientHeight
      console.log(xx)
      this.$emit('update-height', Math.ceil(xx / 7))
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '~variables'

.q-list
    padding: 6px;
    margin-top: 8px;

.q-card-primary
    background-color: $red-6;
    padding: 4px;
</style>
