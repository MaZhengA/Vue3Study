<template>
  <HelloWorld @hello="showHelloMsg" msg="信息" title="帅哥">
    <!-- vue3不兼容另外一种写法slot='cha' -->
    <template v-slot:cha>
      <p>我是一个插槽</p>
    </template>
  </HelloWorld>
</template>

<script>
// 创建虚拟 DOM 节点 (vnode)。
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    function showHelloMsg(val) {
      alert(`收到了来自demo的信息，${val}!!!`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>
