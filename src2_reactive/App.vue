<template>
  <h1>我是APP组件</h1>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3 v-show="job.type">工作：{{ job.type  }}</h3>
  <h3>薪资：{{ job.salary }}</h3>
  <h3>测试数据：{{ job.a.b.c }}</h3>
  <h3>爱好：{{ hobby }}</h3>
  <h3 v-show="job.sex">性别：{{ job.sex }}</h3>
  <button @click="sayHello">点我</button>
  <button @click="addSex">添加一个性别</button>
  <button @click="deleteType">删除一个工种</button>
</template>

<script>
// 创建虚拟 DOM 节点 (vnode)。
import { h, ref, reactive } from 'vue';

export default {
  name: 'App',
  setup() {
    // 允许我们创建可以使用任何值类型的响应式 ref：
    // 将传入参数的值包装为一个带 .value 属性的 ref 对象：
    let name = ref('张三');
    let age = ref('18');
    // let job = ref({
    //   type: '前端开发',
    //   salary: '20k'
    // });

    let job = reactive({
      type: '前端开发',
      salary: '20k',
      a: {
        b: {
          c: 1
        }
      }
    });

    let hobby = reactive(['抽烟','喝酒','烫头']);

    function sayHello() {
      name.value = '李四';
      age.value = 19;
      // job.value = {type: '后端', salary: '10k'}
      job.type = '后端';
      job.salary = '10k';
      job.a.b.c = 2;
      hobby[0] = '学习'
    };

    function addSex() {
      job.sex = '男'
    };

    function deleteType() {
      delete job.type
    }

    // 返回一个对象
    return {
      name, 
      age,
      sayHello,
      job,
      hobby,
      addSex,
      deleteType
    }

    // 返回一个渲染函数（不常用）
    // return () => h('h1', '马铮')
  }
}
</script>
