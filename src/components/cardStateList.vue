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
  </q-card>
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
export default {
  props: ['what', 'baseColor', 'iconName', 'cardTitle', 'period', 'child_height'],
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
