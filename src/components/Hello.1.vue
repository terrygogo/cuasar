<template>
  <q-layout
    ref="layout"
    view="hHr LpR fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">
     

      <q-toolbar-title>
        CoreBridge Manager 
        <div slot="subtitle">Running on v{{$q.version}}</div>
      </q-toolbar-title>
       <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>
    <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="view_quilt" to="/layout/about" replace hide="icon" label="About" />
      <q-route-tab slot="title" icon="view_day" to="/layout/toolbar" replace hide="icon" label="Toolbar" />
      <q-route-tab slot="title" icon="view_day" to="/layout/tabs" replace label="Tabs" />
      <q-route-tab slot="title" icon="input" to="/layout/drawer" replace label="Drawer" />
    </q-tabs>
    <div slot="left">
      <!--
        Use <q-side-link> component 
        instead of <q-item> for 
        internal vue-router navigation
      -->
     <q-list no-border link inset-delimiter>
         <q-list-header>Essential Links</q-list-header>
    
    <q-side-link item to="/config">
    <q-item-side icon="school" />
      <q-item-main label="Toolbar" />
    </q-side-link>
      </q-list>

    <q-collapsible indent icon="event" label="Event" opened>
      <q-side-link item to="/dashboard">
        <q-item-main label="CoreBridge" />
      </q-side-link>
      <q-collapsible menu label="Competitions" opened>
        <div class="scroll" style="max-height: 400px">
          <q-side-link
            item
            v-for="competition in competitions"
            :key="competition"
            :to="`${competition.id}`"
            exact >
            <q-item-main :label="competition.name" />
          </q-side-link>
        </div>
      </q-collapsible>
      <q-side-link item to="/app/other-info">
        <q-item-main label="Other Information" />
      </q-side-link>
    </q-collapsible>

      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
   <router-view />

    <q-toolbar style="height:30px"  slot="footer" class="glossy" height="240px">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        <div slot="subtitle">JionLab Co.,LTD 2017</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-layout>
</template>

<script>
import {
  dom,
  event,
  openURL,
  QLayout,
  QToolbar,
  QTabs,
  QRouteTab,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QCollapsible,
  QSideLink,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

const
  { viewport } = dom,
  { position } = event,
  moveForce = 30,
  rotateForce = 40,
  RAD_TO_DEG = 180 / Math.PI

function getRotationFromAccel (accelX, accelY, accelZ) {
  /* Reference: http://stackoverflow.com/questions/3755059/3d-accelerometer-calculate-the-orientation#answer-30195572 */
  const sign = accelZ > 0 ? 1 : -1
  const miu = 0.001

  return {
    roll: Math.atan2(accelY, sign * Math.sqrt(Math.pow(accelZ, 2) + miu * Math.pow(accelX, 2))) * RAD_TO_DEG,
    pitch: -Math.atan2(accelX, Math.sqrt(Math.pow(accelY, 2) + Math.pow(accelZ, 2))) * RAD_TO_DEG
  }
}

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QTabs,
    QRouteTab,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QSideLink,
    QCollapsible,
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {
      orienting: window.DeviceOrientationEvent && !this.$q.platform.is.desktop,
      rotating: window.DeviceMotionEvent && !this.$q.platform.is.desktop,
      moveX: 0,
      moveY: 0,
      rotateY: 0,
      rotateX: 0,
      competitions: [
        {
          id: 'log',
          name: '어디로'
        },
        {
          id: 'man',
          name: '그냥 어디로'
        }
      ]
    }
  },
  computed: {
    position () {
      const transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`
      return {
        top: this.moveY + 'px',
        left: this.moveX + 'px',
        '-webkit-transform': transform,
        '-ms-transform': transform,
        transform
      }
    }
  },
  methods: {
    launch (url) {
      openURL(url)
    },
    move (evt) {
      const
        {width, height} = viewport(),
        {top, left} = position(evt),
        halfH = height / 2,
        halfW = width / 2

      this.moveX = (left - halfW) / halfW * -moveForce
      this.moveY = (top - halfH) / halfH * -moveForce
      this.rotateY = (left / width * rotateForce * 2) - rotateForce
      this.rotateX = -((top / height * rotateForce * 2) - rotateForce)
    },
    rotate (evt) {
      if (evt.rotationRate &&
          evt.rotationRate.beta !== null &&
          evt.rotationRate.gamma !== null) {
        this.rotateX = evt.rotationRate.beta * 0.7
        this.rotateY = evt.rotationRate.gamma * -0.7
      }
      else {
        /* evt.acceleration may be null in some cases, so we'll fall back
           to evt.accelerationIncludingGravity */
        const
          accelX = evt.acceleration.x || evt.accelerationIncludingGravity.x,
          accelY = evt.acceleration.y || evt.accelerationIncludingGravity.y,
          accelZ = evt.acceleration.z || evt.accelerationIncludingGravity.z - 9.81,
          rotation = getRotationFromAccel(accelX, accelY, accelZ)

        this.rotateX = rotation.roll * 0.7
        this.rotateY = rotation.pitch * -0.7
      }
    },
    orient (evt) {
      if (evt.beta === null || evt.gamma === null) {
        window.removeEventListener('deviceorientation', this.orient, false)
        this.orienting = false

        window.addEventListener('devicemotion', this.rotate, false)
      }
      else {
        this.rotateX = evt.beta * 0.7
        this.rotateY = evt.gamma * -0.7
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.orienting) {
        window.addEventListener('deviceorientation', this.orient, false)
      }
      else if (this.rotating) {
        window.addEventListener('devicemove', this.rotate, false)
      }
      else {
        document.addEventListener('mousemove', this.move)
      }
    })
  },
  beforeDestroy () {
    if (this.orienting) {
      window.removeEventListener('deviceorientation', this.orient, false)
    }
    else if (this.rotating) {
      window.removeEventListener('devicemove', this.rotate, false)
    }
    else {
      document.removeEventListener('mousemove', this.move)
    }
  }
}
</script>

<style lang="stylus" scoped>
 
  .router-link-active {
    color: #027be3;
    background-color: #f0f0f0 !important;
    border-right: 4px solid lime-4;
    border-left: 4px solid #027be3;
  }
  .router-link-active .item-primary{
    color: #027be3;
  }
  .q-tabs {
    color: green;
  }
 
</style>
