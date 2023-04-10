<template>
  <h2>姓名：{{ copy.name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ copy.company.salary }}k</h2>
  <h2 v-show="person.car">车辆：{{ person.car }}</h2>
  <button @click="copy.name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="copy.company.salary++">加薪</button>
  <button @click="outputRaw">输出最原始的person</button>
  <button @click="giveCar">送她一台车</button>
</template>

<script>
import { reactive, toRef, toRefs, readonly, shallowReadonly, watchEffect, toRaw, markRaw } from 'vue';

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
    
    function outputRaw() {
      // 根据一个 Vue 创建的代理返回其原始对象。
      console.log(toRaw(person))
    }

    function giveCar() {
      const car = { name: '奔驰' };
      person.car = markRaw(car); // 标记一个对象，使其不能成为响应式对象
    }
    
    const { name, age, company } = toRefs(person);
    return {
      person,
      name,
      age,
      company,
      copy,
      outputRaw,
      giveCar
    }
  }
}
</script>
