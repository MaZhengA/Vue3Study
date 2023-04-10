<template>
  <div class="son">我是son组件（孙）{{ car.name }}---{{ car.price }}</div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Son',

  setup() {
    const car = inject('car');
    return {
      car
    }
  }
}
</script>

<style scoped>
.son {
  background: orange;
  padding: 10px;
}
</style>
