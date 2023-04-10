<template>
  <div class="app">
    我是App组件
    <Suspense>
      <Child />
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
// import LoadingComponent from './components/LoadingComponent.vue';
// import Child from './components/Child.vue'; // 静态引入
// 异步引入
const Child = defineAsyncComponent(() => import('./components/Child.vue'));
// 记载错误状态
// const Child = defineAsyncComponent({
//   loader: () => import('./components/Child.vue'),

//   // 加载异步组件时使用的组件
//   loadingComponent: LoadingComponent,
//   // 展示加载组件前的延迟时间，默认为 200ms
//   delay: 200,
//   // 加载失败后展示的组件
//   errorComponent: ErrorComponent,
//   // 如果提供了一个 timeout 时间限制，并超时了
//   // 也会显示这里配置的报错组件，默认值是：Infinity
//   timeout: 3000
// })
export default {
  name: 'App',
  components: {
    Child,
    // LoadingComponent
  },
  setup() {
   
  }
}
</script>

<style scoped>
.app {
  background: gray;
  padding: 10px;
}
</style>
