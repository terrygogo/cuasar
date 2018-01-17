<template>
  <card-template  :card-title="cardTitle" :base-color="baseColor" :icon-name="iconName" :what="what"
                :period="period"  :id="id" >
    
    <q-card-main class="card-content">
      <q-list dense link v-for="(value, key) in pre_check()" v-bind:key="12">
        <q-list-header  > {{key}}
        </q-list-header>
        <q-item  v-for="(value, key) in value" v-bind:key="11" >
          <q-item-main>
            <q-item-tile label>{{key}}</q-item-tile>
          </q-item-main>
          <q-item-side>
           {{value}}
          </q-item-side>
        </q-item>
     
      </q-list>
    </q-card-main>
    <q-card-actions>
  <!--
    Define the buttons to your liking,
    these are just examples
  -->
  <q-btn flat round small><q-icon name="event" /></q-btn>
  <q-btn flat>5:30PM</q-btn>
  <q-btn flat>7:30PM</q-btn>
  <q-btn flat>9:00PM</q-btn>
  <q-btn flat color="primary">Reserve</q-btn>
</q-card-actions>
<!-- Vertical actions -->
 <q-card-separator />
<q-card-actions vertical>
  <q-btn flat>Action 1</q-btn>
  <q-btn flat>Action 2</q-btn>
</q-card-actions>
  </card-template>
</template>

<script type="text/javascript">
import Vue from 'vue'
import {
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
  QCardActions,
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
  QCollapsible,
  QSideLink,
  QSpinnerBars,
  QItem,
  QItemTile,
  QItemSide,
  QItemMain,
  QItemSeparator,
  QKnob,
  AppFullscreen
} from 'quasar'
import cardTemplate from './cardTemplate.vue'
export default {
  props: ['what', 'baseColor', 'iconName', 'cardTitle', 'period', 'child_height', 'id'],
  created() {
    var that = this
    Vue.axios.get(this.what)
      .then(function(response) {
        that.results = response.data
      })
    if (this.period > 0) {
      setInterval(() => {
        Vue.axios.get(this.what)
          .then(function(response) {
            that.results = response.data
          })
      }, this.period)
    }
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
      options: {
        separator: '.'
      },
      results: null,
      tempkey: ''
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
  },
  components: {
    Toast,
    QTooltip,
    QFab,
    QFabAction,
    QAjaxBar,
    QLayout,
    QToolbar,
    QTabs,
    QCard,
    QCardActions,
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
    QCollapsible,
    QItem,
    QItemSide,
    QItemTile,
    QItemSeparator,
    QFixedPosition,
    QItemMain,
    QKnob,
    AppFullscreen,
    cardTemplate
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
