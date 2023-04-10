<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.company.salary }}k</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.company.salary++">加薪</button>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  name: 'HelloWorld',
  // vue2写法
  // watch: {
  //   // 简单写法
  //   // sum(newValue, oldValue) {
  //   //   console.log('当前求和为', newValue, oldValue)
  //   // }
    
  //   // 完整写法
  //   sum: {
  //     immediate: true, // 初始渲染
  //     deep: true, // 深度监视
  //     handler(newValue, oldValue) {
  //       console.log('当前求和为', newValue, oldValue)
  //     }
  //   }
  // },
  setup(props, context) {
    let sum = ref(0);
    let msg = ref('你好啊');
    let person = reactive({
      name: '马铮',
      age: '20',
      company: {
        salary: '30'
      }
    })
    
    // 情况1: 监视ref定义的单个响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })

    // 情况2: 监听ref定义的多个响应式数据
    // watch([sum, msg], (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
      // 两个数据的值以数组的形式展示
      // [1, '你好啊'] (2) [0, '你好啊']
    // })

    // 情况3: 监听一个reactive所定义的一个响应式数据
    // - 无法正确获取oldValue
    // - 强制开启了深度监听(deep配置无效) 
    // watch(person, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })
 
    // 情况4: 监听对象某个属性的改变
    watch(
      // 提供一个getter函数
      () => person.company,
      (company) => {
        console.log(`salary is: ${company.salary}`)
      },
      {deep:true}
    )

    // 情况5: 监听某些属性的改变
    watch(
      // 提供一个数组
      [
        () => person.company.salary,
        () => person.age,
      ],
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }
    )
    return {
      sum,
      msg,
      person
    }
  }
}
</script>
