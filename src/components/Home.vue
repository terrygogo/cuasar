<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <div class="row wrap "   >
  
      <div class="col-12" align="center" >
  
        <img src="~assets/cb_logo_r.png" style="width:35%;  ">
  
      </div>
      <div class="col-12" align="center"  >
  
        <p>
          <br>
          <strong class="uppercase">{{packagethis.name}} {{packagethis.version}} </strong>
          <br> Live  Development {{count}}
          <br>
          <br> {{packagethis.description}}
        </p>
      </div>

      <div class="col-12"   align="center"   >
        <div class="row"  style="width:70%; ; padding:20px; margin-top:40px;">
         <div class="col-3 gt-sm">
          <q-btn  round icon="show_chart" color="blue-5" big @click="$router.push('/dashboard')">대시보드</q-btn>
         </div>
         <div class="col-3 gt-sm">
          <q-btn  round icon="report_problem" color="indigo-5" big  @click="$router.push('/events')">이벤트</q-btn>
           </div><div  class="col-3 gt-sm">
          <q-btn round icon="event_note" color="orange-5" big @click="$router.push('/logs')" >로그조회</q-btn>
           </div><div class="col-3 gt-sm">
          <q-btn  round icon="settings" color="red-5" big @click="$router.push('/settings')" >설정</q-btn>
          </div>

  <div class="col-3 lt-md">
          <q-btn  round icon="show_chart" color="blue-5"   @click="$router.push('/dashboard')">대시보드</q-btn>
         </div>
              <div class="col-3 lt-md">
          <q-btn  round icon="report_problem" color="indigo-5"    @click="$router.push('/events')">이벤트</q-btn>
           </div>   <div class="col-3 lt-md">
          <q-btn round icon="event_note" color="orange-5"  @click="$router.push('/logs')" >로그조회</q-btn>
           </div>   <div class="col-3 lt-md">
          <q-btn  round icon="settings" color="red-5"  @click="$router.push('/settings')" >설정</q-btn>
          </div>

        
          </div>
      </div>
      <!-- your content -->
    </div>
  
    <!-- your content -->
  </div>
</template>

<script>
import pkg from 'package'
import {
  Toast,
  QAjaxBar,
  QLayout,
  QToolbar,
  QTabs,
  QFab,
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
  AppFullscreen
} from 'quasar'
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
    QRouteTab,
    QToolbarTitle,
    QBtn,
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
    AppFullscreen
  },
  data () {
    return {
      packagethis: pkg
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style scoped>


</style>
