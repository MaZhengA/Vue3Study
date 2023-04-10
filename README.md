## vite
+ 初始化项目: npm init vite-app 'project-name'
+ 优势: 
  - 当冷启动开发服务器时，基于打包器的方式启动必须优先抓取并构建你的整个应用，然后才能提供服务。
  - Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类，改进了开发服务器启动时间。 
  - 依赖: Vite 将会使用 esbuild 预构建依赖。esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。
  - 源码: 并不是所有的源码都需要同时被加载。Vite 以 原生 ESM 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。
  - 更轻快的动态模块热替换（HMR）: 在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失活[1]（大多数时候只是模块本身），使得无论应用大小如何，HMR 始终能保持快速更新。

## setup()
1. 是在组件中使用组合式 API 的入口
2. 在 setup() 函数中返回的对象会暴露给模板和组件实例
3. setup() 自身并不含对组件实例的访问权，即在 setup() 中访问 this 会是 undefined
4. setup() 应该同步地返回一个对象。唯一可以使用 async setup() 的情况是，该组件是 Suspense 组件的后裔。
5. 在beforeCreate之前执行一次
6. 两个参数，第一个值props是对象，包含组件外部传递过来并且子组件已经声明接受的属性<br>
第二个值是context，有attrs、slots、emit三个值

## ref()
1. 定义一个响应式的数据
2. const xxx = ref(initValue)，创建一个包含响应式数据的引用对象，操作数据xxx.value
3. 接受的数据可以是对象和基本类型，对于基本类型的数据，响应式依靠的是Object.defineProperty()中的get()和set()<br>
对象类型的数据，依靠的是reactive函数转为Proxy

## reactive()
1. 创建一个响应式对象或数组
2. reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的：
3. 只有代理对象是响应式的，更改原始对象不会触发更新 

## vue2和vue3响应式对比
+ vue2
  - 对象类型通过Object.defineProperty()对属性的读取修改进行劫持
  - 数组类型通过重写数组的一系列方法实现拦截
  - 存在的问题：新增、删除属性界面不会有更新、直接修改下标数组，界面也不会更新
+ vue3
  - 通过Proxy: 创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）
  - 通过Reflect：提供拦截 JavaScript 操作的方法，对被代理的对象进行操作

## watch和watchEffect的区别
主要区别是追踪响应式依赖的方式：
- watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。仅在数据源确实改变时才会触发回调
- watchEffect，会在副作用发生期间追踪依赖。自动追踪所有能访问到的响应式属性。而且代码往往更简洁

## toRef()
1. 创建一个ref对象，其value值指向另一个对象中的某个属性
2. 语法： const name = toRef(person, 'name')
3. 应用：把响应式的对象中的某个属性单独提供给外部时使用
4. toRef()和toRefs()功能一致，但是可以批量创建多个对象

## shallowReactive()和shallowRef()
1. shallowReactive只处理对象最外层的响应式
2. 和shallowRef只处理基本类型的响应式
3. 如果一个对象结构较深，但变化时只是外层属性的变化 -> shallowReactive
4. 如果存在一个对象，后边的功能不会影响到对象中的属性，而用新的对象来替换 -> shallowRef

## toRaw和markRow
1. toRaw: 根据一个 Vue 创建的代理返回其原始对象。
2. markRow: 标记一个对象，使其不能成为响应式对象
- 例如第三方类库不能被设置成响应式
- 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能

## provide和inject
1. 作用：实现祖孙通信
2. 父组件使用provied提供数据，子组件使用inject使用数据
3. 实例
```js
// 父组件
setup() {
  const car = { name: '奔驰', price: '40w' };
  provide('car', car);
}
// 后代组件
setup() {
  const car = inject('car');
}
```

## 响应式数据判断
1. isReactive()检查一个对象是否是由 reactive() 或 shallowReactive() 创建的代理。
2. isRef()检查某个值是否为 ref。
3. isReadonly()检查传入的值是否为只读对象
4. isProxy()检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理。

## composition和options的区别
1. 使用options开发一个需求时，需要在data、computed、motheds里修改
2. composition能更优雅的组织代码，函数，让相关功能有序的组织在一起

## 内置标签
1. <Fragement> 是外层的根标签，可以减少层级嵌套、减少内存占用
2. <Teleport> 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。
2. <Suspense> 等待异步组件时渲染一些额外的内容，让应用有更好的体验