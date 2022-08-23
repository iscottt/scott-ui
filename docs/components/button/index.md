# Button 按钮
常用操作按钮

## 基础用法

基础的函数用法

使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

:::demo
```vue
<template>
 <div style="margin-bottom:20px;">
    <SButton>默认按钮</SButton>
    <SButton type="primary">主要按钮</SButton>
    <SButton type="danger">危险按钮</SButton>
    <SButton type="warning">警告按钮</SButton>
    <SButton type="success">成功按钮</SButton>
 </div>
 <div style="margin-bottom:20px;">
    <SButton type="primary" ghost>主要按钮</SButton>
    <SButton type="danger" ghost>危险按钮</SButton>
    <SButton type="warning" ghost>警告按钮</SButton>
    <SButton type="success" ghost>成功按钮</SButton>
 </div>
 <div style="margin-bottom:20px;">
  <SButton size="small" type="primary">小按钮</SButton>
  <SButton size="medium" type="danger">中按钮</SButton>
  <SButton size="large" type="warning">大按钮</SButton>
 </div>
 <div style="margin-bottom:20px;">
    <SButton>默认按钮</SButton>
    <SButton type="primary" icon="search">搜索按钮</SButton>
    <SButton type="primary" icon="edit">编辑按钮</SButton>
    <SButton type="warning" icon="message">提示按钮</SButton>
    <SButton type="danger" icon="delete">删除按钮</SButton>
    <SButton type="success" icon="check">成功按钮</SButton>
 </div>
 <div style="margin-bottom:20px;">
  <SButton type="primary" round icon="search"></SButton>
  <SButton type="warning" round icon="edit"></SButton>
  <SButton type="danger" round icon="check"></SButton>
  <SButton type="success" round icon="message"></SButton>
  <SButton round icon="delete"></SButton>
 </div>
</template>
```
:::
## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

:::demo
```vue
<template>
 <div class="flex flex-row">
  <SButton icon="edit" ghost type="danger"></SButton>
  <SButton icon="delete" ghost type="warning"></SButton>
  <SButton icon="share" ghost type="success"></SButton>
  <SButton round ghost icon="search" type="primary">搜索</SButton>
 </div>
</template>
```
:::