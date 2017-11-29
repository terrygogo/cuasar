<template>
  <q-card>
    <q-card-title class="card-title bg-teal text-white">
      {{cardTitle}}
           <q-icon slot="right" name="more_vert">
                  <q-popover ref="popover">
 
        <q-fab-action color="purple" @click.native="type = 'bar'"  icon="mail">
          <q-tooltip anchor="center left" self="top middle" :offset="[20, 0]">bar</q-tooltip>
        </q-fab-action>
        <q-fab-action color="secondary" @click.native="type = 'horizontalBar'" icon="alarm">
          <q-tooltip anchor="center left" self="top middle" :offset="[20, 0]">hbar</q-tooltip>
        </q-fab-action>
        <q-fab-action color="secondary" @click.native="type = 'pie'" icon="alarm">
          <q-tooltip anchor="center left" self="top middle" :offset="[20, 0]">pie</q-tooltip>
        </q-fab-action>
 
        </div>
         </q-popover>
                </q-icon>
    </q-card-title>
    <q-card-main class="card-content">
             <chartjs-line :data="data"  :bordercolor="['rgba(255,99,132,1)']" :backgroundcolor="['rgba(0,0,0,0.05)']" :bind="true"></chartjs-line>
    </q-card-main>
  </q-card>
</template>
<script type="text/javascript">
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
  import Chart from 'chart.js'
  export default {
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
    AppFullscreen
  },
    data () {
      return {
        type: 'horizontalBar'
      }
    },
    props: {
      data: {
        required: true
      },
      myfill: {
        default () { return false }
      },
      cardTitle: {
        default () { return 'Graph'}
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style lang="stylus" scoped>
@import '~variables'

.q-.q-card
  .xs-gutter 
    margin: 0px 0px 0px 0px;

.q-list#corebridgestatus
  .q-card-primary
    background-color: $blue-3;
    padding: 4px;
 
.q-collapsible#insystemstatus
  .q-card-primary
    background-color: $indigo-3;
    padding:4px;
 
.q-collapsible#outsystemstatus
  .q-card-primary
    background-color: $teal-3;
    padding: 4px;
 
</style>
