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
const config = {
  title: '',
  description: '',
  codeStr: codeStr,
  apiData: [{
    params: 'type',
    description: '按钮类型',
    type: 'String',
    optionValue: 'default | primary | danger',
    defaultValue: 'default',
  }],
  eventData: [{
    name: 'click',
    description: '点击事件,(event) => {}',
    cbparams: 'event'
  }]
}

export default config