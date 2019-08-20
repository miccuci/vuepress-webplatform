<template>
  <div class="code">
    <div class="code--title">
      <h2>{{title}}</h2>
      <small>{{description}}</small>
    </div>
    <div class="code--demo">
      <div class="code-content">
        <slot></slot>
      </div>
    </div>
    <div v-if="isShow" class="code--segment">
      <slot name="codeText"></slot>
    </div>
    <div v-if="$slots.codeText" class="code--button" @click="handleToggleShow">{{codeTextBtn}}</div>
  </div>
</template>

<script>
export default {
  name: 'DemoPage',
  props: ['title', 'description'],
  data() {
    return {
      isShow: false,
      codeTextBtn: '显示代码'
    }
  },
  methods: {
    handleToggleShow() {
      this.isShow = !this.isShow
      this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码'
    }
  }
}
</script>


