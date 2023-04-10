<template>
  <h2>count：{{ state.count }}</h2>
  <button @click="state.count++">增加</button>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ company.salary }}k</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="company.salary++">加薪</button>
</template>

<script>
import { reactive, toRef, toRefs, shallowReactive, shallowRef, ref, isReactive } from 'vue';

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
    })
    console.log(isReactive(person))
    // 对象类型的只对第一层做响应式
    // const state = shallowRef({ count: 0 })
    const state = ref({ count: 0 })
  
    // toRef()
    // return {
    //   person,
    //   name: toRef(person, 'name'),
    //   age: toRef(person, 'age'),
    //   salary: toRef(person.company, 'salary'),
    // }

    // toRefs()
    const { name, age, company } = toRefs(person);
    return {
      person: toRefs(person),
      name,
      age,
      company,
      state
    }
  }
}
</script>
