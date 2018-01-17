<template >
  <div class="layout-padding ">
    <q-list id="corebridgestatus_grid">
      <q-list-header>CoreBridge (망간자료전송서비스 현황)</q-list-header>
      <q-collapsible icon="explore" :label="serverLabel" opened>
        <q-window-resize-observable @resize="onResize" />
        <div>
          <grid-layout :layout="layout" :auto-size="true" :col-num="12" :is-draggable="true" :is-resizable="true" :vertical-compact="true"
            :use-css-transforms="true"  :row-height="30" :col-width="30" ref="GridLayout" @layout-updated="layoutUpdatedEvent">
                        <grid-item v-for="item in layout" :key='item.i' :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :min-w="2"     >
                          <!--
            <grid-item v-for="item in layout" :key='item.i' :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :min-w="2"  @resized="resizedEvent"  >
              -->
              <card-state-list v-if="item.comp_type=='list'" :card-title="item.title" base-color="bg-green-6" icon-name="comment" :what="item.api"
                :period="item.refresh_period"  :id="item.i">
              </card-state-list>
              <card-state-table v-else :card-title="item.title" base-color="bg-green-6" icon-name="comment" :what="item.api"
                :period="item.refresh_period"   :id="item.i">
              </card-state-table>
            </grid-item>

          </grid-layout>
              
        </div>
      </q-collapsible>
    </q-list>

    <q-list id="corebridgestatusmap">
      <q-list-header>CoreBridge (망간자료전송서비스 현황)</q-list-header>
      <q-collapsible icon="explore" :label="serverLabel" opened>
        <div class="row  xs-gutter">

          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-2">
            <card-state-switch card-title="command center" base-color="bg-green-7" icon-name="comment" what="/api/systemstat" period=5000>
            </card-state-switch>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-10">
            <card-state-socket class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" card-title="tails of the story on soket" base-color="bg-green-7" icon-name="comment"
              what="/api/systemstat" period=5000>
            </card-state-socket>
          </div>

        </div>
      </q-collapsible>
    </q-list>
    <q-list id="corebridgestatus">
      <q-list-header>CoreBridge (망간자료전송서비스 현황)</q-list-header>
      <q-collapsible icon="explore" label="CoreBridge Service / 192.168.1.15 terry mini CentOS 7.2" opened>
        <div class="row  xs-gutter">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <q-card>
              <q-card-title>
                사용자 자료교환
                <q-icon slot="right" name="more_vert">
                  <q-popover ref="popover">
                    <q-list link class="no-border">
                      <q-item @click="$refs.popover.close()">
                        <q-item-main label="자세히보기" />
                      </q-item>
                      <q-item @click="$refs.popover.close()">
                        <q-item-main label="설정보기" />
                      </q-item>
                      <q-item @click="$refs.popover.close()">
                        <q-item-main label="로그보기" />
                      </q-item>
                    </q-list>
                  </q-popover>
                </q-icon>

              </q-card-title>
              <q-card-separator />
              <q-card-main>
                10건 /초당
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <q-card>
              <q-card-title>
                사용자 외부URL접속 현황
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                10건 /초당
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <q-card>
              <q-card-title>
                분리망 서버 자료교환
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                10건 /초당
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <q-card>
              <q-card-title>
                외부메일 변환전송
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                10건 /초당
              </q-card-main>
            </q-card>
          </div>
        </div>
      </q-collapsible>
    </q-list>
    <q-list inset-separator>
      <q-list-header>System Resource( 서버자원 현황)</q-list-header>
      <q-collapsible id="insystemstatus" icon="explore" label="내부망 System Resource" opened>
        <div class="row  xs-gutter   ">

          <div class="col-sm-12 col-md-6 col-lg-3">
            <q-card>
              <q-card-title>
                CPU
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                <q-knob v-model="model" style="font-size: 2rem" color="green-7" size=4rem :min="min" :max="max" :step="5"></q-knob>

              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <q-card>
              <q-card-title>
                Memory
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                <q-knob v-model="model" style="font-size: 2rem" color="green-5" size=4rem :min="min" :max="max" :step="5"></q-knob>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <q-card>
              <q-card-title>
                Network
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                <q-knob v-model="model" style="font-size: 2rem" color="green-5" size=4rem :min="min" :max="max" :step="5"></q-knob>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <q-card>
              <q-card-title>
                Disk
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                <q-knob v-model="model" style="font-size: 2rem" color="amber-7" size=4rem :min="min" :max="max" :step="5"></q-knob>
              </q-card-main>
            </q-card>
          </div>
        </div>

      </q-collapsible>
      <q-collapsible id="outsystemstatus" icon="explore" label="외부망 System Resource" opened>
        <div class="row xs-gutter">
          <div class="col-sm-12 col-md-6 col-lg-6">
                        <card-chart card-title="CPU" :cdata="dataset" :labels="labels" baseColor="red">

            </card-chart>
          </div>
        </div>
      </q-collapsible>
    </q-list>
  </div>
</template>




<script type = "text/javascript" >
import Vue from 'vue'
var VueGridLayout = require('vue-grid-layout')
var GridLayout = VueGridLayout.GridLayout
var GridItem = VueGridLayout.GridItem
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
  QWindowResizeObservable,
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
import Peity from 'vue-peity'
import cardChart from './cardChart.vue'
import cardTotal from './cardTotal.vue'
import cardTodo from './cardTodo.vue'
import cardStateList from './cardStateList.vue'
import cardStateTable from './cardStateTable.vue'
import cardStateSwitch from './cardStateSwitch.vue'
import cardStateSocket from './cardStateSocket.vue'
import cardSystemstatus from './cardSystemstatus.vue'
import knobStatistics from './knobStatistics.vue'
export default {
  name: 'Home',
  mounted() {
    // debugger
    // var obj = this.$data.layout[0]
    // obj.h = 8
    // var yy = this.$refs.gagaga.clientHeight
    // var xx = this.$refs.nanana.clientHeight
    // console.log('hama1 ' + yy)
    // console.log('hama2 ' + xx)
    // this.$refs.GridLayout.resizeEvent('resizeend', obj.i, obj.x, obj.y, obj.h, obj.w)
    window.addEventListener('resize', this.handleResize)
    this.layout = this.layout_init
    var that = this
    Vue.axios.get('/json/dashboardcordi.json')
      .then(function(response) {
        that.$store.state.dashboard_layout = response.data
        that.layout = that.$store.state.dashboard_layout
      })
      .catch(function(error) {
        alert('loading layout config fail')
        console.log(error)
      })
      /*
    that.$nextTick(function () {
      var children = this.$refs.GridLayout.$children
      for (var i = 1; i < children.length; i++) {
        var x = children[i]
        var y = x.$el.clientHeight
        if (y !== 0) {
          if (that.layout != null) {
            if (that.layout[i - 1].h !== 0) {
              var happy = Math.round(y / 38)
              if (happy !== this.layout[i - 1].h) {
                that.layout[i - 1].h = happy
              }
            }
          }
        }
      }
    }) */
  },
  updated() {
    //  var obj = this.$data.layout[0]
    //  this.$refs.GridLayout.resizeEvent('resizeend', obj.i, obj.x, obj.y, obj.h, obj.w)
  },
  data() {
    return {
      dataset: [],
      labels: [],
      mamamu: 0,
      max: 45,
      min: 12,
      resizeTimeout: null,
      model: 30,
      hamoni: 1023,
      my_row_height: 4,
      fullHeight: document.documentElement.clientHeight,
      layout: [],
      layout_init: [
        {
          x: 0,
          y: 0,
          w: 2,
          h: 12,
          i: '0',
          ref: 'babo',
          api: '/api/systemstat',
          comp_type: 'list',
          title: 'system info',
          refresh_period: 10000
        },
        {
          x: 0,
          y: 12,
          w: 2,
          h: 8,
          i: '1',
          api: '/api/diskstat',
          comp_type: 'list',
          title: 'disk info',
          refresh_period: 10000
        },
        {
          x: 2,
          y: 7,
          w: 2,
          h: 13,
          i: '2',
          api: '/api/fsstat',
          comp_type: 'list',
          title: 'file system info',
          refresh_period: 10000
        },
        {
          x: 4,
          y: 14,
          w: 8,
          h: 6,
          i: '3',
          api: '/api/networkinterfaces',
          comp_type: 'table',
          title: 'network interface',
          refresh_period: -1
        },
        {
          x: 2,
          y: 0,
          w: 2,
          h: 7,
          i: '4',
          api: '/api/netstat',
          comp_type: 'list',
          title: 'netstat',
          refresh_period: 10000
        },
        {
          x: 4,
          y: 0,
          w: 8,
          h: 7,
          i: '5',
          api: '/api/processess',
          comp_type: 'table',
          title: 'process info',
          refresh_period: -1
        },
        {
          x: 4,
          y: 7,
          w: 8,
          h: 7,
          i: '6',
          api: '/api/connectstat',
          comp_type: 'table',
          title: 'connections',
          refresh_period: -1
        },
        {
          x: 0,
          y: 14,
          w: 8,
          h: 7,
          i: '7',
          api: '/api/services',
          comp_type: 'table',
          title: 'services',
          refresh_period: 5000
        }
      ],
      layout_init2: [
        {
          x: 0,
          y: 0,
          w: 12,
          h: 8,
          i: '0',
          api: '/api/systemstat',
          comp_type: 'list',
          title: 'system info',
          refresh_period: 10000
        },
        {
          x: 0,
          y: 8,
          w: 12,
          h: 8,
          i: '1',
          api: '/api/diskstat',
          comp_type: 'list',
          title: 'disk info',
          refresh_period: 10000
        },
        {
          x: 0,
          y: 18,
          w: 12,
          h: 8,
          i: '2',
          api: '/api/fsstat',
          comp_type: 'list',
          title: 'file system info',
          refresh_period: 10000
        },
        {
          x: 0,
          y: 24,
          w: 12,
          h: 8,
          i: '3',
          api: '/api/networkinterfaces',
          comp_type: 'table',
          title: 'network interface',
          refresh_period: -1
        },
        {
          x: 0,
          y: 32,
          w: 12,
          h: 8,
          i: '4',
          api: '/api/netstat',
          comp_type: 'list',
          title: 'netstat',
          refresh_period: 10000
        },
        {
          x: 0,
          y: 40,
          w: 12,
          h: 8,
          i: '5',
          api: '/api/processess',
          comp_type: 'table',
          title: 'process info',
          refresh_period: -1
        },
        {
          x: 4,
          y: 7,
          w: 12,
          h: 8,
          i: '6',
          api: '/api/connectstat',
          comp_type: 'table',
          title: 'connections',
          refresh_period: -1
        },
        {
          x: 0,
          y: 14,
          w: 12,
          h: 8,
          i: '7',
          api: '/api/services',
          comp_type: 'table',
          title: 'services',
          refresh_period: 5000
        }
      ],
      myArray: [
        {
          name: 'kimchi'
        },
        {
          name: 'goguma'
        }
      ]
    }
  },
  computed: {
    serverLabel() {
      return this.$store.state.siteModel.server[0].IP
    }
  },
  created() {
    var that = this
    setInterval(() => {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      // this.dataset.unshift(this.dataset.pop())
      // this.dataset.push(this.getRandomInt())
      // console.log(this.dataset)
      // this.dataset.splice(0, 1)
      // this.dataset.push(this.getRandomInt())
      if (that.dataset.length >= 10) {
        that.dataset.splice(0, 1)
        that.labels.splice(0, 1)
        that.dataset.push(that.getRandomInt())
        that.labels.push(new Date().toLocaleTimeString())
      }
      else {
        that.dataset.push(that.getRandomInt())
        that.labels.push(new Date().toLocaleTimeString())
      }
    }, 5000)
  },
  ready: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    onResize (event) {
      console.log('Updated weeth: ', event)
      if (event.width < 500) {
        // this.layout = this.layout_init2
      }
      else if (event.width >= 500) {
        // this.layout = this.layout_init
      }
    },
    layoutUpdatedEvent: function(newLayout) {
      var that = this
      console.log('Updated layout: ', newLayout)
      var children = this.$refs.GridLayout.$children
      for (var i = 1; i < children.length; i++) {
        var x = children[i]
        // var x = children[mm]
        var y = x.$el.children[0].clientHeight
        // var y = x.$el.clientHeight
        if (y !== 0) {
          if (that.layout != null) {
            var ind = children[i].i
            var hh = this.layout.findIndex(x => x.i === ind)
            var kill = Math.round(y / 38)
            if ( this.layout[hh].h !== kill) { 
              this.layout[hh].h = kill
              this.$refs.GridLayout.resizeEvent('resizeend', this.layout[hh].i, this.layout[hh].x, this.layout[hh].y, this.layout[hh].h, this.layout[hh].w)
              debugger
            }
          }
        }
      }
    },
    resizedEvent: function(i, newH, newW, newHPx, newWPx) {
      var msg =
        'RESIZED i=' +
        i +
        ', H=' +
        newH +
        ', W=' +
        newW +
        ', H(px)=' +
        newHPx +
        ', W(px)=' +
        newWPx
      console.log(msg)
      var hh = this.layout.findIndex(x => x.i === i)
      var children = this.$refs.GridLayout.$children
      var ndx = -1
      for (var j = 0; j < children.length; j++) {
        var mam = children[j].i
        if (mam === i) {
          ndx = j
        }
      }
      if (ndx > -1) {
        var mm = ndx
        var x = children[mm]
        var y = x.$el.children[0].clientHeight
        var kill = Math.round(y / 38)
        console.log('beforehgt' + hh + 'at:' + this.layout[hh].h)
        console.log('hgt' + hh + 'at:' + kill)
        this.layout[hh].h = kill
        console.log('afterhgt' + hh + 'at:' + this.layout[hh].h)
        // this.layout[0].h = 135
        this.$emit('resized', i, kill, newW, newHPx, newWPx)
        // this.eventBus.$emit('resizeEvent', 'resizeend', i, kill, newW, newHPx, newWPx)
      }
    }
  },
  components: {
    GridLayout: GridLayout,
    GridItem: GridItem,
    Peity,
    cardTotal,
    cardChart,
    cardTodo,
    cardStateList,
    cardStateTable,
    cardStateSwitch,
    cardStateSocket,
    knobStatistics,
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
    QWindowResizeObservable,
    QItem,
    QItemSide,
    QFixedPosition,
    QItemMain,
    QKnob,
    AppFullscreen,
    cardSystemstatus
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables';

.q-list#corebridgestatus {
  .q-card-primary {
    background-color: $blue-3;
    padding: 4px;
  }
}

.q-collapsible#insystemstatus {
  .q-card-primary {
    background-color: $indigo-3;
    padding: 4px;
  }
}

.q-collapsible#outsystemstatus {
  .q-card-primary {
    background-color: $teal-3;
    padding: 4px;
  }
}

#content {
  width: 100%;
}

.vue-resizable-handle {
  z-index: 5000;
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 0;
  right: 0;
  background-position: bottom right;
  padding: 0 3px 3px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: se-resize;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  border: 1px solid black;
}

.vue-grid-item.resizing {
  opacity: 0.9;
}

.vue-grid-item.static {
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-grid-item.border {
  border: 2px solid black;
  background-color: green !important;
  box-shadow: 0 0 5px black;
  color: white;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>

<style lang='css' >
.vue-grid-item.vue-grid-placeholder {
  background: green;
  opacity: 0.2;
  transition-duration: 0.1s;
  z-index: 2;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>
