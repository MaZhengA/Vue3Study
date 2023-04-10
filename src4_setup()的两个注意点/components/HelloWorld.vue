<template>
  <h1>我是一个人</h1>
  <h3>姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <h3>{{ person.msg }}：{{ person.title }}</h3>
  <button @click="test">测试出发一个hello事件</button>
  <slot name="cha"></slot>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'HelloWorld',
  props: ['msg', 'title'],
  // 事件需要通过 emits 选项来定义
  emits: ['hello'],
  setup(props, context) {
    console.log(context.slots);
    let person = reactive({
      name: '张三',
      age: '18',
      msg: props.msg,
      title: props.title
    });

    function test() {
      context.emit('hello', '我是帅哥')
    }

    // 返回一个对象
    return {
      person,
      test
    }
  }
}
</script>
