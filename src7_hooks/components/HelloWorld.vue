<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr/>
  <h2>点击显示坐标x：{{ point.x }}，y：{{ point.y }}</h2>
</template>

<script>
import { ref } from 'vue';
import usePoint from '../hooks/usePoint';

export default {
  name: 'HelloWorld',
  setup(props, context) {
    let sum = ref(0);

    let point = usePoint();

    return {
      sum,
      point
    }
  },

}
</script>
