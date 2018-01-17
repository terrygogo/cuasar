<template>
  <card-template  :card-title="cardTitle" :base-color="baseColor" :icon-name="iconName" :what="what"
                :period="period"  :id="id" >
  
    <q-card-main class="card-content">
     <pulse-chart :chart-data="datacollection"></pulse-chart>
    </q-card-main>
   </card-template>
</template>
<script type = "text/javascript" >
  /* eslint-disable */
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
    QItemSide,
    QItemMain,
    QKnob,
    AppFullscreen
  } from 'quasar'
  import pulseChart from './pulseChart.js'
  import cardTemplate from './cardTemplate.vue'
  export default ({
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
      QFixedPosition,
      QItemMain,
      QKnob,
      AppFullscreen,
      pulseChart,
      cardTemplate
    },
    data() {
      return {
        fillit: [65, 59, 80, 81, 56, 55, 40],
        datacollection: null
      }
    },
    props: {
      id: {},
      cdata: {
        required: true
      },
      baseColor: '',
      iconName: '',
      what: '',
      period: '',
      labels: {
      },
      cardTitle: {
        default () {
          return 'Graph'
        }
      }
    },
    created() {
      // setInterval(() => {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      // this.fillit.unshift(this.fillit.pop())
      // this.dataset.push(this.getRandomInt())
      // console.log(this.dataset)
      // this.fillData()
      //}, 1000)
    },
    watch: {
      cdata: function () {
        this.fillData()
      }
    },
    methods: {
      fillData() {
        this.datacollection = {
          labels : this.labels,
          datasets: [{
            label: 'Data One',
            backgroundColor: '#f87979',
            data: this.cdata
          }],
          options: {
            responsive: true,
            title: {
              display: true,
              text: "Chart.js Time Point Data"
            },
            scales: {
              xAxes: [{
                type: "time",
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Date'
                },
                ticks: {
                  major: {
                    fontStyle: "bold",
                    fontColor: "#FF0000"
                  }
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'value'
                }
              }]
            }
          }
        }
      },
      getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    },
  })

</script>

<style lang="stylus" scoped>
@import '~variables'

 
 
.q-collapsible#outsystemstatus
  .q-card-primary
    background-color: $teal-3;
    padding: 4px;
 
</style>
