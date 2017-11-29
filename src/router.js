import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/',
      component: load('LayoutMain'),
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        //    {path: '', component: load('Hello')},
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        {path: 'home', component: load('Home'), name: 'Home', meta: { label: '집' }},
        {path: '', component: load('Home'), name: 'Default', meta: { label: '홈' }},
        {path: 'login', component: load('Login'), name: 'Login', meta: {auth: false, label: '로그인'}},
        {path: 'dashboard', component: load('Dashboard'), name: 'Dashboard', ref: 'dashboard', meta: {auth: true, label: '대시보드'}},
        {path: 'cservices', component: load('Cservices'), name: 'ServiceCorebridges', meta: {auth: true, label: 'CoreBridge 서비스'}},
        {path: 'sservices', component: load('Sservices'), name: 'ServiceSystems', meta: {auth: true, label: 'System 서비스'}},
        {path: 'widget_logview', component: load('WidgetLogview'), name: 'WidgetLogview', meta: {auth: true, label: '로그조회'}},
        {path: 'widget_fileupload', component: load('WidgetFileUpload'), name: 'WidgetFileUpload', meta: {auth: true, label: '파일 업로드'}},
        {path: 'widget_filedownload', component: load('WidgetFileDownload'), name: 'WidgetFileDownload', meta: {auth: true, label: '파일 다운로드'}},
        {path: 'widget_fileview', component: load('WidgetFileView'), name: 'WidgetFileView', meta: {auth: true, label: '파일 보기'}},
        {path: 'configs', component: load('Configs'), name: 'Configs', meta: {auth: true, label: '연계 정책'}},
        {path: 'settings', component: load('Settings'), name: 'Settings', meta: {auth: true, label: '관리도구 설정'}},
        {path: 'logs', component: load('Logs'), name: 'Logs', meta: {auth: true, label: '로그 조회 '}},
        {path: 'events', component: load('Events'), name: 'Events', meta: {auth: true, label: '이벤트 조회'}}
        // UserPosts will be rendered inside User's <router-view>
      ]
    },
    { path: '*', component: load('Error404') } // Not found
  ]
})
