<template>
  <div>
    <button @click="isShow = !isShow">点我弹个窗</button>
    <Teleport to="body">
      <div v-show="isShow" class="cover">
        <div class="dialog" >
          <h3>我是一个弹窗</h3>
          <h2>弹唱内容</h2>
          <button @click="isShow = !isShow">关闭弹窗</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Dialog',
  setup() {
    let isShow = ref(false);

    return {
      isShow
    }
  }
}
</script>

<style>
.cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
}
.dialog {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background: white;
}
</style>