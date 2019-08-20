<template>
  <div>
    <el-table
      fit
      border
      v-if="type === 'attr'"
      :data="apiData"
      style="width: 100%">
      <el-table-column
        prop="params"
        label="参数"
        width="140">
      </el-table-column>
      <el-table-column
        prop="describe"
        label="说明"
        width="120">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="optionValue"
        label="可选值">
      </el-table-column>
      <el-table-column
        prop="defaultValue"
        label="默认值">
      </el-table-column>
    </el-table>
    <el-table
      v-else
      :data="apiData"
      style="width: 100%">
      <el-table-column
        prop="params"
        label="事件名称"
        width="140">
      </el-table-column>
      <el-table-column
        prop="describe"
        label="说明">
      </el-table-column>
      <el-table-column
        prop="cbparams"
        label="回调参数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'Demoapi',
    props: {
      type: {
        type: String,
        default: 'attr'
      },
      title: {
        type: String,
        default: '属性'
      },
      apiData: Array
    }
  }
</script>