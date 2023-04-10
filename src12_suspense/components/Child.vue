<template>
  <div class="child">
    我是Child组件
    <h2>{{ sum }}</h2>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Child',
  setup() {
    let sum = ref(0)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({sum});
      }, 3000)
    })
  }
}
</script>

<style scoped>
.child {
  background: skyblue;
  padding: 10px;
}
</style>
