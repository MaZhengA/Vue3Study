<template>
  <input v-model="keyword" /><br/>
  <p>{{ keyword }}</p>
</template>

<script>
import { customRef } from 'vue';

export default {
  name: 'HelloWorld',
  setup(props, context) {
    function myRef(value, delay) {
      return customRef((track, trigger) => {
        let timer;
        return {
          get() {
            track(); // 追踪value值
            
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger() // 触发事件，通知vue更新模版
            }, delay)
          }
        }
      })
    }

    return {
      keyword: myRef('hello', 2000)
    }
  }
}
</script>
