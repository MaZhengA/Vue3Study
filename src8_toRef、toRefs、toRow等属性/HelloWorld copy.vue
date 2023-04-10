<template>
  <h2>姓名：{{ copy.name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ copy.company.salary }}k</h2>
  <button @click="copy.name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="copy.company.salary++">加薪</button>
</template>

<script>
import { reactive, toRef, toRefs, readonly, shallowReadonly, watchEffect } from 'vue';

export default {
  name: 'HelloWorld',
  setup(props, context) {
    // let person = shallowReactive({ // 第一层数据响应式
    let person = reactive({ 
      name: '马铮',
      age: '20',
      company: {
        salary: '30'
      }
    });

    // const copy = readonly(person); // 全部只读
    const copy = shallowReadonly(person); // 第一个层只读
 
    watchEffect(() => {
      console.log( copy.name, ' copy.name');
    });
    
    const { name, age, company } = toRefs(person);
    return {
      name,
      age,
      company,
      copy
    }
  }
}
</script>
