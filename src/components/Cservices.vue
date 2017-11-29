<template>
  <div class="layout-padding ">
      <q-list id="corebridgestatus" >
      <q-list-header>CoreBridge corcore (망간자료전송서비스 현황)</q-list-header>
      <q-collapsible   icon="explore" label="CoreBridge Service / 192.168.1.15 terry mini CentOS 7.2" opened>
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
       <q-list inset-separator >
         <q-list-header>System Resource( 서버자원 현황)</q-list-header>
      <q-collapsible  id="insystemstatus" icon="explore" label="내부망 System Resource" opened >
        <div class="row  xs-gutter   "    >
          <div class="col-sm-12 col-md-12 col-lg-4 ">
            <q-card>
              <q-card-title>
                운영현황요약
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                error 5, warining 5, fatal 5
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-2">
            <q-card>
              <q-card-title>
                CPU
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                     <q-knob
          v-model="model"
          style="font-size: 2rem"
          color="green-7"
          size=4rem
          :min="min"
          :max="max"
          :step="5"
        ></q-knob>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-2">
            <q-card>
              <q-card-title>
                Memory
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                     <q-knob
          v-model="model"
           style="font-size: 2rem"
          color="green-5"
          size=4rem
          :min="min"
          :max="max"
          :step="5"
        ></q-knob>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-2">
            <q-card>
              <q-card-title>
               Network
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                    <q-knob
          v-model="model"
           style="font-size: 2rem"
          color="green-5"
          size=4rem
          :min="min"
          :max="max"
          :step="5"
        ></q-knob>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-2">
            <q-card>
              <q-card-title>
                Disk
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                         <q-knob
          v-model="model"
           style="font-size: 2rem"
          color="amber-7"
          size=4rem
          :min="min"
          :max="max"
          :step="5"
        ></q-knob>
              </q-card-main>
            </q-card>
          </div>
        </div>
      </q-collapsible>
      <q-collapsible id="outsystemstatus"  icon="explore" label="외부망 System Resource" opened>
     <div class="row  "    >
            <q-card class="col-sm-12 col-md-6 col-lg-3 ">
              <q-card-title>
                운영현황요약
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                error 5, warining 5, fatal 5
              </q-card-main>
            </q-card>
        
            <q-card class="col-sm-12 col-md-6 col-lg-2 ">
              <q-card-title>
                CPU
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                     <q-knob
          v-model="model"
          style="font-size: 2rem"
          color="green-7"
          size=4rem
          :min="min"
          :max="max"
          :step="5"
        ></q-knob>
              </q-card-main>
            </q-card>
      
            <q-card class="col-sm-12 col-md-6 col-lg-2 ">
              <q-card-title>
                Memory
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                     <q-knob
          v-model="model"
           style="font-size: 2rem"
          color="green-5"
          size=4rem
          :min="min"
          :max="max"
          :step="5"
        ></q-knob>
              </q-card-main>
            </q-card>
        
            <q-card class="col-sm-12 col-md-6 col-lg-2 ">
              <q-card-title>
               Network
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                    <q-knob
          v-model="model"
           style="font-size: 2rem"
          color="green-5"
          size=4rem
          :min="min"
          :max="max"
          :step="5"
        ></q-knob>
              </q-card-main>
            </q-card>
       
         
            <q-card class="col-sm-12 col-md-6 col-lg-2 ">
              <q-card-title>
                Disk
              </q-card-title>
              <q-card-separator />
              <q-card-main>
                         <q-knob
          v-model="model"
           style="font-size: 2rem"
          color="amber-7"
          size=4rem
          :min="min"
          :max="max"
          :step="5"
        ></q-knob>
              </q-card-main>
            </q-card>
         
        </div>
      </q-collapsible>
    </q-list>
  </div>
</template>


<script type = "text/javascript" >

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

import cardChart from './cardChart.vue'
import cardTotal from './cardTotal.vue'
import cardTodo from './cardTodo.vue'
import knobStatistics from './knobStatistics.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  mounted () {
    // Axios.all not working

  },
  data () {
    return {
      model: 30,
      min: 0,
      max: 100,
      totalPosts: 123,
      totalComments: 345,
      totalTodos: 100,
      tableData4: [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }]
    }
  },
  computed: {
    dataForGraph () {
      return {
        posts: this.totalPosts,
        todos: this.totalTodos,
        comments: this.totalComments
      }
    }
  },
  methods: {
    ...mapMutations(['setPosts'])
  },
  components: {
    cardTotal,
    cardChart,
    cardTodo,
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
    QItem,
    QItemSide,
    QFixedPosition,
    QItemMain,
    QKnob,
    AppFullscreen
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
