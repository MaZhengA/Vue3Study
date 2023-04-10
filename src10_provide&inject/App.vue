<template>
  <div class="app">我是App组件（祖）{{ car.name }}---{{ car.price }}</div>
  <Child />
</template>

<script>
import Child from './components/Child.vue';
import { provide } from 'vue';
export default {
  name: 'App',
  components: {
    Child
  },
  setup() {
    const car = { name: '奔驰', price: '40w' };
    provide('car', car);
    return {
      car
    }
  }
}
</script>

<style scoped>
.app {
  background: gray;
  padding: 10px;
}
</style>
