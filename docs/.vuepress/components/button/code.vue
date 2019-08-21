<template>
  <div>
    <Common-Democode title="基本用法" description="基本按钮用法">
    <div class="demo-button">
      <button-index />
    </div>
    <highlight-code slot="codeText" lang="html">
      {{ code }}
    </highlight-code>
  </Common-Democode>
  </div>
</template>

<script>

import Democode from '../Common/Democode'

const codeStr = `
<template>
  <el-button @click="onClick">test button</el-button>      
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$message.success('I am a test button')
    }
  },
}
</script>
`
export default {
  components: {
    Democode,
  },
  data() {
    return {
      code: 'codeStr'
    }
  },
}
</script>

<style lang="scss" scoped>

</style>