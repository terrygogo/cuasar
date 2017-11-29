<template>
  <q-card>
    <q-card-title class="card-title text-white"  :class="baseColor" >
      {{cardTitle}}
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
     

     <q-card-main class="card-content">
          <div class="row justify-end">
          
          <q-select  class="col-8" v-model="select" :options="selectOptions">   </q-select> 
              
           <q-item-side class="col-4" right >
             {{status}}
            <q-btn color="primary" icon="" @click="runcmd">Go</q-btn>        
          </q-item-side>
         
          </div>
        
          <q-scroll-area style="height: 300px;">
            <div v-for="value in taildata">{{value}} 
               <hr>
            </div>
           
          </q-scroll-area>
          
    </q-card-main>
  </q-card>
</template>

<script type="text/javascript">
import io from 'socket.io-client'
import {
  Toast,
  QAjaxBar,
  QLayout,
  QToolbar,
  QTabs,
  QFab,
  QField,
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
  QSelect,
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
export default {
  props: ['what', 'baseColor', 'iconName', 'cardTitle', 'period'],
  created() {
    /*
    var socket = io('http://localhost:8088')
    var that = this
    socket.emit('visitor-data', this.peekData)
    socket.on('connect', function() {
    })
    socket.on('updated-stats', function(data) {
      that.pokeData.pages = data.pages
      that.pokeData.referrers = data.referrers
      that.pokeData.activeUsers = data.activeUsers
    })
    socket.on('disconnect', function() {
    }) */

  },
  computed: {
  },
  watch: {
  },
  methods: {
    runcmd() {
      // var socket = io('http://localhost:8088')
      var socket = io()
      socket.on('connect', () => {
        console.log('connected')
        this.status = 'connected'
      })
      socket.on('disconnect', () => {
        console.log('disconnected')
        this.status = 'disconnected'
      })
      var that = this
      socket.on('newLine', (data) => {
        console.log(`new data: ${data.line}`)
        that.taildata.unshift(data.line)
        if (that.taildata.length > 10) {
          that.taildata.pop()
        }
      })
      socket.emit('tail', {
        service: this.select
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
      status: 'disconnected',
      taildata: [],
      select: 'fb',
      selectOptions: [
        {
          label: 'Google',
          value: 'gg'
        },
        {
          label: 'Facebook',
          value: 'fb'
        }
      ],
      peekData: {head: 'sexy', tail: 'body'},
      pokeData: {},
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
    QField,
    QPopover,
    QList,
    QSelect,
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
    AppFullscreen
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
