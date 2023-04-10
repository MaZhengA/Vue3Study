<template>
  <div class="child">我是Child组件（父）</div>
  <Son />
</template>

<script>
import Son from './Son.vue';

export default {
  name: 'Child',
  components: {
    Son
  }
}
</script>

<style scoped>
.child {
  background: skyblue;
  padding: 10px;
}
</style>
