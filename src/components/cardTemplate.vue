<template>
  <q-card>  
    <q-card-title class="card-title text-white"  :class="baseColor" >
          <q-icon :name="iconName"></q-icon> 
      {{cardTitle}}
       <q-btn slot="right" icon="refresh" round small flat />
       <q-icon slot="right" name="settings_applications">
                  <q-popover ref="popover">
                    <q-list link class="no-border">
                      <q-item @click="$refs.popover.close()">
                        <q-item-main label="자세히보기" />
                      </q-item>
                      <q-item @click="dashboard_add(), $refs.popover.close()">
                        <q-item-main label="설정" />
                      </q-item>
                      <q-item @click="dashboard_del(), $refs.popover.close()">
                        <q-item-main label="삭제" />
                      </q-item>
                    </q-list>
                  </q-popover>
                </q-icon>
    </q-card-title>
    <q-card-main class="card-content">
     <slot></slot>
    </q-card-main>
    
  </q-card>
</template>

<script type="text/javascript">
// import Vue from 'vue'
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
  QCardActions,
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
  props: ['what', 'baseColor', 'iconName', 'cardTitle', 'period', 'child_height', 'id'],
  created() {

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
    dashboard_add() {
      this.$store.commit('dashboard_add_entry', 'mandu')
    },
    dashboard_del() {
      this.$store.commit('dashboard_delete_entry', this.id)
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
