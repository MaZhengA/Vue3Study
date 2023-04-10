<template>
  <h1>我是一个人</h1>
  姓：<input v-model="person.firstName" /><br/>
  名：<input v-model="person.lastName" /><br/>
  <!-- <span>全名：{{ person.fullName }}</span> -->
  全名 <input v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'HelloWorld',
  // vue2写法
  // computed: {
  //   fullName() {
  //     return this.person.firstName + '-' + this.person.lastName
  //   }
  // },
  setup(props, context) {
    let person = reactive({
      firstName: '张',
      lastName: '三',
    });

    // 简单写法
    // person.fullName = computed(() => person.firstName + '-' + person.lastName);

    // 计算属性
    person.fullName = computed({
      // getter
      get() {
        return person.firstName + '-' + person.lastName
      },
      // setter
      set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [person.firstName, person.lastName] = newValue.split('-')
      }
    })

    // 返回一个对象
    return {
      person,
      // fullName
    }
  }
}
</script>
