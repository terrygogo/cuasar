<template>
  <div class="layout-padding">
    <q-collapsible opened label="Showcasing some of the options" sublabel="Change them to see it in action" style="max-width: 100%; margin-bottom: 25px" class="shadow-2">
      <el-table ref="multipleTable" :data="tableData3" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="Date" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="Name" width="120">
        </el-table-column>
        <el-table-column property="address" label="Address" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">Toggle selection status of second and third rows</el-button>
        <el-button @click="toggleSelection()">Clear selection</el-button>
        <el-button @click="addthis()">add</el-button>
        <el-button @click="delselection()">del</el-button>
 
        <vue-form-generator :schema="schema" :model="model" :options="formOptions">
        </vue-form-generator>
 
        <div id='editor_holder'></div>
        <button id='submit'>puch!!! (console.log)</button>
      </div>
    </q-collapsible>

  </div>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
import {
  QDataTable,
  QField,
  QInput,
  QCheckbox,
  QSelect,
  QSlider,
  QBtn,
  QIcon,
  QTooltip,
  QCollapsible
} from 'quasar'

export default {
  components: {
    QDataTable,
    QField,
    QInput,
    QCheckbox,
    QSelect,
    QSlider,
    QBtn,
    QIcon,
    QTooltip,
    QCollapsible,
    'vue-form-generator': VueFormGenerator.component
  },
  beforeDestroy() {
  },
  data() {
    return {
      model: null,
      model2: [{
        make: 'Ford',
        model: 'jeep',
        year: 2012
      }],
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'ID',
          model: 'id',
          readonly: true,
          featured: false,
          styleClasses: 'half-width mandu',
          disabled: true
        }, {
          type: 'input',
          inputType: 'text',
          label: 'Name',
          model: 'name',
          styleClasses: 'half-width mandu',
          readonly: false,
          featured: false,
          required: true,
          disabled: false,
          placeholder: 'Users name',
          validator: VueFormGenerator.validators.string
        }, {
          type: 'input',
          inputType: 'password',
          label: 'Password',
          model: 'password',
          min: 6,
          required: true,
          hint: 'Minimum 6 characters',
          styleClasses: 'half-width',
          validator: VueFormGenerator.validators.string
        }, {
          type: 'input',
          inputType: 'number',
          label: 'Age',
          model: 'age',
          styleClasses: 'half-width',
          min: 18,
          validator: VueFormGenerator.validators.number
        }, {
          type: 'input',
          inputType: 'email',
          label: 'E-mail',
          model: 'email',
          placeholder: 'Users e-mail address',
          styleClasses: 'half-width goguma',
          validator: VueFormGenerator.validators.email
        }, {
          type: 'checklist',
          label: 'Skills',
          model: 'skills',
          multi: true,
          required: true,
          multiSelect: true,
          styleClasses: 'half-width',
          values: ['HTML5', 'Javascript', 'CSS3', 'CoffeeScript', 'AngularJS', 'ReactJS', 'VueJS']
        }, {
          type: 'switch',
          label: 'Status',
          model: 'status',
          multi: true,
          readonly: false,
          featured: false,
          disabled: false,
          default: true,
          styleClasses: 'half-width',
          textOn: 'Active',
          textOff: 'Inactive'
        }]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'user-'
      },
      temp: {
        date: '2017-08-25',
        name: 'terry',
        address: 'seoul'
      },
      tableData3: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      }
      else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    addthis() {
      this.tableData3.unshift(this.temp)
    },
    delselection() {
      var i = 0
      for (; i < this.multipleSelection.length; i++) {
        var row = this.multipleSelection[i]
        const index = this.tableData3.indexOf(row)
        this.tableData3.splice(index, 1)
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  },
  created() {
    Vue.axios.get('/json/vfg_model.json')
      .then(function(response) {
        this.model = response.data
      }.bind(this))
      .catch(function(error) {
        console.log(error)
      })
    /*
    Vue.axios.get('/json/vfg_model.json')
      .then((response) => {
        this.model = response.data
      }) */
  },
  mounted() {
  }
}
</script>

<style lang="stylus" >
@import '~variables'

h3 {
  font-size: 16px;
}
 
.el-table th { 
  background-color: $blue-2
  .cell  {
    background-color: $blue-3
  }
}

.vue-form-generator { 
  .form-group.half-width { 
      width : 20%;
  }
  .form-group.mandu { 
      width : 50%;
  }
} 
</style>
