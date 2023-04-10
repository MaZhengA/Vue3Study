<template>
  <h1>我是APP组件</h1>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>工作：{{ job.type  }}</h3>
  <h3>薪资：{{ job.salary }}</h3>
  <button @click="sayHello">点我</button>
</template>

<script>
// 创建虚拟 DOM 节点 (vnode)。
import { h, ref } from 'vue';

export default {
  name: 'App',
  setup() {
    // 允许我们创建可以使用任何值类型的响应式 ref：
    // 将传入参数的值包装为一个带 .value 属性的 ref 对象：
    let name = ref('张三');
    let age = ref('18');
    let job = ref({
      type: '前端开发',
      salary: '20k'
    });

    function sayHello() {
      name.value = '李四';
      age.value = 19;
      job.value = {type: '后端', salary: '10k'}
    };

    // 返回一个对象
    return {
      name, 
      age,
      sayHello,
      job
    }

    // 返回一个渲染函数（不常用）
    // return () => h('h1', '马铮')
  }
}
</script>
