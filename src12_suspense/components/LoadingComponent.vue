<template>
  <div class="loading">loading</div>
</template>

<script>
export default {
  name: 'LoadingComponent'
}
</script>

<style>
.loading {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
}
</style>