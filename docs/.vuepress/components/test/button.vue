<template>
  <el-button @click="onClick">test button</el-button>      
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$message.success('I am editting in dev branch')
    }
  },
}
</script>


