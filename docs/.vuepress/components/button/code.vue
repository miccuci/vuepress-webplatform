<template>
  <div>
    <Common-Democode title="基本用法" description="基本按钮用法">
      <div class="demo-button">
        <button-index />
      </div>
      <highlight-code slot="codeText" lang="html">
        {{ codeStr }}
      </highlight-code>
    </Common-Democode>
    <Common-Demoapi :api-data="apiData"/>
    <Common-Demoapi type="event" title="事件" :api-data="eventData"/>
  </div>
</template>

<script>
import config from './config.js'

export default {
  data() {
    const { title, description, codeStr, apiData, eventData } = config
    return {
      title: title,
      description: description,
      codeStr: codeStr,
      apiData: apiData,
      eventData: eventData
    }
  },
}
</script>

<style lang="scss" scoped>

</style>