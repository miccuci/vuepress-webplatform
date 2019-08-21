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
    <Common-Demoapi :api-data="apiData"/>
    <Common-Demoapi type="event" title="事件" :api-data="eventData"/>
  </div>
</template>

<script>
const codeStr = `
<template>
  <el-button @click="onClick">test button</el-button>      
</template>

export default {
  methods: {
    onClick() {
      this.$message.success('I am a test button')
    }
  },
}`

export default {
  data() {
    return {
      code: codeStr,
      apiData: [{
        params: 'type',
        describe: '按钮类型',
        type: 'String',
        optionValue: 'default | primary | danger',
        defaultValue: 'default',
      }],
      eventData: [{
        params: 'click',
        describe: '点击事件,(event) => {}',
        cbparams: 'event'
      }]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>