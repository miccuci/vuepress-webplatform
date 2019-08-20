<template>
  <el-button @click="onClick" size="mini">test button</el-button>      
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$message.success('测试点击')
    }
  },
}
</script>


