<template>
 
  <card-template  :card-title="cardTitle" :base-color="baseColor" :icon-name="iconName" :what="what"
                :period="period"  :id="id" >   

    <q-card-main class="card-content">
      <q-scroll-area style="height: 160px;">
      <table class="q-table horizontal-separator compact striped reponsive">
  <thead>
    <tr >
      <th class="text-left"  v-for="(value1 , key) in results[0]">{{key}}</th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="(value1 , key) in results" v-bind:key="11">
      <td class="text-right" v-for="(value , key) in value1" >{{value}}</td>
    </tr>
  </tbody>
</table>
   </q-scroll-area>
      
    </q-card-main>
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
  QCheckbox,
  QDataTable,
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
  QScrollArea,
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
  props: ['what', 'baseColor', 'iconName', 'cardTitle', 'period', 'id'],
  created () {
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
          // console.log(response)
          })
      }, this.period)
    }
  },
  computed: {
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
      results: [],
      tempkey: '',
      config: {
        title: 'Data Table',
        refresh: true,
        noHeader: false,
        columnPicker: true,
        leftStickyColumns: 0,
        rightStickyColumns: 2,
        bodyStyle: {
          maxHeight: '500px'
        },
        rowHeight: '50px',
        responsive: true,
        pagination: {
          rowsPerPage: 15,
          options: [5, 10, 15, 30, 50, 500]
        },
        selection: 'multiple'
      },
      columns: [
        {
          label: 'protocol',
          field: 'protocol',
          width: '80px',
          filter: true,
          sort: true,
          type: 'string'
        },
        {
          label: 'localaddress',
          field: 'localaddress',
          width: '80px',
          filter: true,
          sort: true,
          type: 'string'
        },
        {
          label: 'localport',
          field: 'localport',
          width: '80px',
          filter: true,
          sort: true,
          type: 'string'
        },
        {
          label: 'peeraddress',
          field: 'peeraddress',
          width: '80px',
          filter: true,
          sort: true,
          type: 'string'
        },
        {
          label: 'peerport',
          field: 'peerport',
          width: '80px',
          filter: true,
          sort: true,
          type: 'string'
        },
        {
          label: 'state',
          field: 'state',
          width: '80px',
          filter: true,
          sort: true,
          type: 'string'
        }
      ],
      pagination: true,
      rowHeight: 50,
      bodyHeightProp: 'maxHeight',
      bodyHeight: 500
    }
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
    QCheckbox,
    QDataTable,
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
    QScrollArea,
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
