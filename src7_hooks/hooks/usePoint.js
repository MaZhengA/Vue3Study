import { onBeforeUnmount, onMounted, reactive } from 'vue';

export default function() {
  // 实现鼠标打点相关的数据
  let point = reactive({
    x: 0,
    y: 0
  });

  // 实现鼠标打点相关的方法
  function getPoint(e) {
    console.log(e.pageX, e.pageY)
    // point = {x: e.pageX, y: e.pageY}
    point.x = e.pageX;
    point.y = e.pageY;
  };
  // 实现鼠标打点相关的钩子
  onMounted(() => {
    window.addEventListener('click', getPoint)
  });

  onBeforeUnmount(() => {
    window.removeEventListener('click', getPoint)
  })

  return point
};