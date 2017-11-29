<template>
  <q-layout ref="layout" view="lHr LpR lFf" :left-class="{'bg-grey-2': true} ">
    <q-toolbar slot="header" glossy>
  
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title class="uppercase">
        {{packagethis.name}}
        <div slot="subtitle"> {{packagethis.version}} / {{packagethis.description}} </div>
      </q-toolbar-title>
  
      <q-btn flat @click="$router.push('/dashboard')">
        <q-icon name="web" />
  
      </q-btn>
  
      <q-btn flat >
        <q-icon name="directions_run" />
        <q-popover ref="popover2">
          <q-list link separator class="scroll" style="min-width: 100px">
            <q-item @click="$router.push('/cservices'), $refs.popover2.close()">
              <q-item-main label="CoreBridge" sublabel="Trace CoreBridge Activities" />
            </q-item>
            <q-item @click="$router.push('/sservices'), $refs.popover2.close()">
              <q-item-main label="System" sublabel="View Server Resource" />
            </q-item>
          </q-list>
        </q-popover>
  
      </q-btn>
    <q-btn flat @click="$router.push('/events')">
        <q-icon name="report_problem" />
  
      </q-btn>
            <q-btn flat >
       <q-icon name="apps" />
        <q-popover ref="popover3">
          <q-list link separator class="scroll" style="min-width: 100px">
            <q-item @click="$router.push('/widget_logview'), $refs.popover3.close()">
              <q-item-main label="감사기록보기" sublabel="Log View" />
            </q-item>
                        <q-item @click="$router.push('/widget_fileupload'), $refs.popover3.close()">
              <q-item-main label="파일업로드" sublabel="File Upload" />
            </q-item>
                        <q-item @click="$router.push('/widget_filedownload'), $refs.popover3.close()">
              <q-item-main label="파일다운로드" sublabel="File Download" />
            </q-item>
                        <q-item @click="$router.push('/widget_fileview'), $refs.popover3.close()">
              <q-item-main label="파일 보기" sublabel="File View" />
            </q-item>
       
          </q-list>
        </q-popover>
  
      </q-btn>
      <q-btn flat @click="$router.push('/settings')">
      
        <q-icon name="settings" />
        <!--
        <q-popover ref="popover1">
          <q-list link separator class="scroll" style="min-width: 100px">
            <q-item v-for="n in 30" :key="n" @click="showToast(), $refs.popover1.close()">
              <q-item-main label="Label" sublabel="Click me" />
            </q-item>
          </q-list>
        </q-popover>
        -->
      </q-btn>
      
      <div>
        <!-- 
      <q-btn flat v-if="!$auth.check()" to="/login">
  
         <q-icon  name="smoking_rooms" />
          
      </q-btn>
      <q-btn flat v-else @click="logout">
           <q-icon   name="smoke_free" />
      </q-btn>
      -->
      </div>
         <div >
          <router-link v-if="!$auth.check()" to="/login" id="loginlabel" style="color: white;"   >Login</router-link>
          <a v-if="$auth.check()" @click="logout" style="color: white;" >Logout</a>
        </div>
    
    </q-toolbar>
  
    <div id="draa" slot="left">
      <!--
          Use <q-side-link> component 
          instead of <q-item> for 
          internal vue-router navigation
        -->
      <q-toolbar no-border color="white" slot="header" class="flex inline  shadow-7 justify-center">
  
        <div>
          <img src="~assets/cb_logo_r.png" style="max-width:100%; max-height:30px; "></img>
        </div>
  
      </q-toolbar>

      <template v-for="(menu_item, index) in menus" >
        <q-list-header v-if="menu_item.type=='just_label'" :key="1" >{{menu_item.name}}</q-list-header>
  
        <q-side-link  inset-separator item v-else-if="menu_item.type=='self_worker'" :key="2"  :to="menu_item.target">
          <q-item-side :icon="menu_item.icon" />
          <q-item-main :label="menu_item.name" :sublabel="menu_item.id" />
        </q-side-link>

        <q-collapsible inset-separator v-else-if="menu_item.type=='group_leader'" :key="3" indent dense :icon="menu_item.icon" :label="menu_item.name" :sublabel="menu_item.id">
  
          <div class="scroll" style="max-height: 400px">
            <q-side-link inset-separator item v-for="competition in menu_item.competitions" :key="4" :to="competition.target" exact>
              <q-item-side :icon="competition.icon" />
              <q-item-main :label="competition.name"  > </q-item-main>
            </q-side-link>
          </div>
  
        </q-collapsible>

      </template> 
       </div>
      <!--
        <q-list-header>모니터</q-list-header>
  
        <q-side-link item to="/config">
          <q-item-side icon="show_chart" />
          <q-item-main label="대시보드" sublabel="DashBoard" />
        </q-side-link>

        <q-collapsible indent dense icon="directions_run" label="서비스" sublabel="Service/Process">
  
          <div class="scroll" style="max-height: 400px">
            <q-side-link separator item v-for="competition in competitions" :key="competition" :to="`${competition.id}`" exact>
              <q-item-main :label="competition.name" />
            </q-side-link>
          </div>
  
        </q-collapsible>
          <q-side-link item to="/config"> 
        <q-icon name="menu" class="on-left" />
        <q-item-main label="Toolbar" />
      </q-side-link> 
 
  
      <q-list-header>도구</q-list-header>
      <q-collapsible indent dense icon="widgets" label="도구함" sublabel="utility widgets">
  
        <div class="scroll" style="max-height: 400px">
          <q-side-link separator item v-for="competition in competitions" :key="competition" :to="`${competition.id}`" exact>
            <q-item-main :label="competition.name" />
          </q-side-link>
        </div>
  
      </q-collapsible>
  
      <q-list-header>설정</q-list-header>
      <q-collapsible indent dense icon="settings" label="설정" sublabel="settings">
  
        <div class="scroll" style="max-height: 400px">
          <q-side-link separator item v-for="competition in competitions" :key="competition" :to="`${competition.id}`" exact>
            <q-item-main :label="competition.name" />
          </q-side-link>
        </div>
  
      </q-collapsible>
  
   
  -->
    <!--
        Replace following <div> with
        <router-view /> component
        if using subRoutes
      -->
  
    <q-toolbar id="innerbar" slot="header"  >
      <q-toolbar-title id="innertoolbar" > <q-icon name="play_arrow" color="red" style="vertical-align:top" /> <strong>{{this.$route.meta.label}}</strong>
      </q-toolbar-title>
      <div id="breadtitle"  class="row  justify-between md-gutter">
        <div id="breadbb" class=" gt-md" >
          <q-icon name="home"  />
          <router-link :to="headerinfo.menu">Home </router-link> / 
          <router-link v-if="!($route.name=='Home')" :to="$route.name"> {{$route.meta.label}}</router-link>
   </div>
        <div>   <q-icon name="access_time" />
      {{ headerinfo.now}}
        </div>
         </div>
    </q-toolbar>
    <transition name="fade" mode="out-in">
  
      <router-view class="layout-view" ref="mandu" ></router-view>
    </transition>
  
    <q-toolbar style="height:30px" slot="footer" height="240px">
      <q-toolbar-title>
        <div slot="subtitle">JionLab Co.,LTD 2017 (주)지온공작소</div>
  
      </q-toolbar-title>
      <!-- 
      <q-spinner-bars  class="animate-spin" color="white" :size="20" />
      -->
      <q-btn flat @click="toggleFullscreen()">
        <q-icon name="fullscreen" />
      </q-btn>
  
    </q-toolbar>
  
    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-fab color="primary" active-icon="close" direction="up" ref="apps_fab">
        <q-fab-action color="purple" @click= "showToast('mail')" icon="mail">
          <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Mail</q-tooltip>     
        </q-fab-action>
        <q-fab  direction="left" color="secondary"  @click="alert()" active-icon="apps" >
          <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">apps</q-tooltip>
            <q-fab-action color="secondary" @click="SaveDashBoardDragCoordi('저장합니다')" icon="save">
          <q-tooltip anchor="bottom middle" self="top middle" :offset="[20, 0]">tail</q-tooltip>
        </q-fab-action>
            <q-fab-action color="secondary" @click="SaveDashBoardDragCoordi('저장합니다')" icon="save">
          <q-tooltip anchor="bottom middle" self="top middle" :offset="[20, 0]">view</q-tooltip>
        </q-fab-action>    <q-fab-action color="secondary" @click="SaveDashBoardDragCoordi('저장합니다')" icon="save">
          <q-tooltip anchor="bottom middle" self="top middle" :offset="[20, 0]">log</q-tooltip>
        </q-fab-action>
        </q-fab >
        <q-fab-action color="secondary" @click="SaveDashBoardDragCoordi('저장합니다')" icon="save">
          <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">저장</q-tooltip>
        </q-fab-action>
      </q-fab>
  
    </q-fixed-position>
  </q-layout>
</template>

<script >
import Vue from 'vue'
import pkg from 'package'
import {
  Toast,
  Dialog,
  QAjaxBar,
  openURL,
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
  date,
  AppFullscreen
} from 'quasar'

// destructuring to keep only what is needed
let timeStamp = Date.now()
let formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm:ss')

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
  data() {
    return {
      dialog: {
        label: 'Multiple Selection',
        icon: 'check_box',
        handler() {
          Dialog.create({
            title: 'Checkbox & Toggle',
            message: 'Message can be used for all types of Dialogs.',
            form: {
              header1: {
                type: 'heading',
                label: 'Checkboxes'
              },
              group1: {
                type: 'checkbox',
                model: ['opt3'],
                items: [
                  { label: 'Option 1', value: 'opt1' },
                  { label: 'Option 2', value: 'opt2', color: 'secondary' },
                  { label: 'Option 3', value: 'opt3', color: 'amber' }
                ]
              },
              header2: {
                type: 'heading',
                label: 'Toggles'
              },
              group2: {
                type: 'toggle',
                model: ['opt1'],
                items: [
                  { label: 'Option 1', value: 'opt1' },
                  { label: 'Option 2', value: 'opt2', color: 'secondary' },
                  { label: 'Option 3', value: 'opt3', color: 'amber' }
                ]
              }
            },
            buttons: [
              'Cancel',
              {
                label: 'Ok',
                handler(data) {
                  Toast.create('Returned ' + JSON.stringify(data))
                }
              }
            ]
          })
        }
      },
      packagethis: pkg,
      headerinfo: {
        group: '모니터',
        menu: 'home',
        sub: this.$route.path,
        now: formattedString
      },
      menus: [
        {
          type: 'just_label',
          deco: 'green',
          name: '모니터'
        },
        {
          type: 'self_worker',
          id: 'dashboard',
          target: '/dashboard',
          icon: 'web',
          name: '대시보드'
        },
        {
          type: 'group_leader',
          id: 'services',
          icon: 'directions_run',
          target: '',
          name: '서비스',
          competitions: [
            {
              id: 'service_corebridges',
              target: '/cservices',
              name: 'CoreBridge',
              icon: 'storage'
            },
            {
              id: 'service_systems',
              target: '/sservices',
              name: 'System',
              icon: 'computer'
            }
          ]
        },
        {
          type: 'self_worker',
          id: 'events',
          target: '/events',
          icon: 'report_problem',
          name: '이벤트'
        },
        {
          type: 'self_worker',
          id: 'logs',
          target: '/logs',
          icon: 'event_note',
          name: '로그조회'
        },
        {
          type: 'self_worker',
          id: 'configs',
          target: '/configs',
          icon: 'build',
          name: '정책설정'
        },
        {
          type: 'just_label',
          deco: 'green',
          name: '연구소'
        },
        {
          type: 'group_leader',
          id: 'services',
          icon: 'apps',
          target: '',
          name: '실험실',
          competitions: [
            {
              id: 'widget_logview',
              target: '/widget_logview',
              name: '로그조회',
              icon: 'event_note'
            },
            {
              id: 'widget_fileupload',
              target: '/widget_fileupload',
              name: '파일업로드',
              icon: 'file_upload'
            },
            {
              id: 'widget_filedownload',
              target: '/widget_filedownload',
              name: '파일다운로드',
              icon: 'file_download'
            },
            {
              id: 'widget_fileview',
              target: '/widget_fileview',
              name: '파일 보기',
              icon: 'visibility'
            }
          ]
        },
        {
          type: 'just_label',
          deco: 'green',
          name: '설정'
        },
        {
          type: 'self_worker',
          id: 'setting',
          target: '/settings',
          icon: 'settings',
          name: '설정'
        }
      ]
    }
  },
  computed: {},
  methods: {
    launch(url) {
      openURL(url)
    },
    apply_float_settings(obj) {
      Vue.axios
        .post('/json/dashboardcordi.json', obj)
        .then(function(response) {
          console.log(response)
          // vm.$store.commit('siteModel', vm.user_model)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    navigate() {
      this.$refs.layout.hideLeft(() => {
        this.$router.push('/dashboard')
      })
    },
    showToast(msg) {
      Toast.create(
        (this.$q.platform.is.desktop ? 'Clicked' : 'Tapped') +
          ' on a Popover item' +
          msg
      )
      Toast.create(
        (this.$q.platform.is.desktop ? 'Clicked' : 'Tapped') +
          ' on a Popover item' +
          this.$store.getters.Gcount
      )
      this.$store.commit('changeTest', 'habaya')
    },
    SaveDashBoardDragCoordi(msg) {
      debugger
      if (this.$route.name !== 'Dashboard') {
        Toast.create('save layout work only dashnoard page')
      }
      else {
        var bb = this.$refs.mandu.layout
        this.apply_float_settings(bb)
        Toast.create('dashboard layout saved')
      }
    },
    toggleFullscreen() {
      AppFullscreen.toggle()
    },
    logout() {
      this.$auth.logout({
        redirect: 'Home',
        makeRequest: false
        // params: {},
        // success: function () {},
        // error: function () {},
        // etc...
      })
      console.log('logout')
    }
  },

  beforeDestroy() {},
  mounted() {
    this.$auth.logout({
      redirect: 'Home',
      makeRequest: false
    })
    setInterval(() => {
      let timeStamp = Date.now()
      this.headerinfo.now = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm:ss')
    }, 5024)
  }
}
</script>


<style lang="stylus" scoped>
@import '~variables';

.router-link-active {
  color: #027be3;
  font-weight: bold;
  background-color: #f0f0f0;
  border-right: 4px solid #99ff66;
  border-left: 4px solid;
}

#loginlabel.router-link-active {
  color: #99ff66;
  background-color: $primary;
  border-right: 4px solid $primary;
  border-left: 4px solid $primary;
}

.router-link-active .item-primary {
  color: #027be3;
}

.shadow-box {
  width: 90px;
  height: 90px;
  margin: 25px;
  border-radius: 50%;
  font-size: 12px;
}

.doc-inset-shadow {
  border: 1px solid $grey-3;
}

.q-toolbar #breadbb .router-link-active {
  color: #027be3;
  text-decoration: underline;
  background-color: #f6f6f6;
  border-right: 0px solid;
  border-left: 0px solid;
}

.q-toolbar #breadbb .router-link {
  color: #99ff66;
}

#breadbb .router-link {
  color: #99ff66;
  background-color: $secondary;
}

.q-toolbar #innertoolbar {
  font-size: 20px;
  color: black;
}

.q-list-header {
  color: green;
}

#innerbar {
  background: $grey-2;
  color: black;
}

.q-collapsible .q-item {
  font-size: 14px;
}

.q-item-division {
  padding: 4px;
}
</style>
