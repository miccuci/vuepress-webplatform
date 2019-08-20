<template>
<div>
  <demoapi :api-data="apiData"/>
</div>
</template>

<script>
import Demoapi from '../Common/Demoapi'
  export default {
    components: {
      Demoapi,
    },
    data() {
      return {
        apiData: [{
          params: 'type',
          describe: '按钮类型',
          type: 'String',
          optionValue: 'default | primary | danger',
          defaultValue: 'default',
        }]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>