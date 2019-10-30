<template>
  <el-table
    ref="table"
    v-loading="loading"
    element-loading-text="Loading"
    :data="tableData"
    border fit highlight-current-row stripe
    tooltip-effect="dark"
    style="width:100%"
    :header-cell-style="{background:'#f2f2f9',color: '#7485a5'}"
    @sort-change="handleSortChange"
    @selection-change="handleSelectionChange">
      <!-----------------------------------------------table内容checkbox操作----------------------------------------------->
      <el-table-column
        v-if="tableSelection.isSelection"
        type="selection"
        :selectable='isDisabled'
        show-overflow-tooltip
        width="55">
      </el-table-column>
      <!-----------------------------------------------普通table内容----------------------------------------------->
      <el-table-column
        v-for="(item,index) in tableLabel"
        :width="item.width ? item.width : ''"
        :key="index"
        :align="item.align"
        :label="item.label"
        :prop="item.param"
        :sortable="item.sortable ? 'custom' : false">
        <template slot-scope="scope">
          <span v-if="item.render">
            {{item.render(scope.row)}}
          </span>
          <span
            v-else-if="item.clickContent"
            :class="{'text-blue' : item.clickContent}"
            @click="handleButton(item.methods,scope.row,scope.row)">
            {{scope.row[item.param]}}
          </span>
          <span v-else>{{scope.row[item.param]}}</span>
        </template>
      </el-table-column>
      <!-----------------------------------------------按钮操作事件----------------------------------------------->
      <el-table-column
        v-if="tableOption.label"
        :width="tableOption.width"
        :label="tableOption.label"
        align="center"
        class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            v-for="(item,index) in tableOption.options"
            :key="index"
            :type="item.type"
            :icon="item.icon"
            @click="handleButton(item.methods,scope.row,scope.row)" size="mini">
            {{item.label}}
          </el-button>
        </template>
      </el-table-column>
      <!-----------------------------------------------下拉按钮操作事件----------------------------------------------->
      <el-table-column
        v-if="dropdownData.label"
        :width="dropdownData.width"
        :label="dropdownData.label"
        align="center"
        class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-dropdown
              trigger="click"
              @command="handleCommand">
              <el-button type="primary" size="mini">
                <span v-text="dropdownData.label"></span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item
                  v-for="(item,index) in dropdownData.items"
                  :command="item.func"
                  v-text="item.label"
                  :key="index">
                </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'CommonTable',
  props: {
    loading: {
      type: Boolean,
      default: false
    }, // 是否显示加载中
    tableSelection: {
      type: Object,
      default: () => {
        return {}
      }
    }, // checkbox
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    }, // table数据
    tableLabel: {
      type: Array,
      default: () => {
        return []
      }
    }, // 普通table内容
    tableOption: {
      type: Object,
      default: () => {
        return {}
      }
    }, // table 按钮事件
    dropdownData: {
      type: Object,
      default: () => {
        return {}
      }
    } // table 下拉按钮事件
  },
  components: {},
  methods: {
    // 是否禁用checkbox
    isDisabled (row, index) {
      return true
    },
    // 按钮事件
    handleButton (methods, row, index) {
      // console.log(methods, row, index)
      this.$emit('handleButton', {'methods': methods, 'row': row, 'index': index})
    },
    // 排序
    handleSortChange (val) {
      this.$emit('handleSortChange', val)
    },
    // 批量选择
    handleSelectionChange (val) {
      this.$emit('handleSelectionChange', val)
    },
    // 下拉按钮事件
    handleCommand (command) {
      console.log('command', command)
      this.$emit(command.func, command.uuid)
    }
  }
}
</script>

<style lang="scss">
  .text-blue {
    cursor: pointer;
    color: #178bff;
  }
</style>
