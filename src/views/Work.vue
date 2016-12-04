<template>
  <transition name="slide">
    <div class="work">
      <div v-for="item in work" class="item-normal">
        <header class="item-header">{{item.title}}</header>
        <article class="item-details">
          <p v-for="detail in item.details" class="item-detail">{{detail}}</p>
        </article>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'work',
    data () {
      return {
        work: [
          {
            title: '估损PC端后台管理系统',
            details: [
              'Vue1、websocket聊天、图片上传'
            ]
          },
          {
            title: '比价微信端项目',
            details: [
              'Vue1、一堆表单、借助rem单位实现自适应布局'
            ]
          },
          {
            title: '比价PC端后台管理系统',
            details: [
              '未使用框架（jQuery是库不是框架）',
              '主体内容的切换借助ifame标签实现',
              '页面间的数据共享借助localStorage实现',
              '打印'
            ]
          },
          {
            title: '博客',
            details: [
              'Angular1，接口由NodeJS+Mysql提供',
              '通过在响应头上添加相应的Access-Control-Allow-Origin支持跨域请求',
              '支持根据当前文章是通过点击分类目录还是月份归档还是常规的文章列表查看到的来显示相对应的上一篇文章和下一篇文章',
              '支持简单的毫无安全可言的评论功能'
            ]
          },
          {
            title: 'react-webpack-boilerplate',
            details: [
              '由Vue官方webpack模版改造而来的react项目开发脚手架，预置了一个可由鼠标操控的六面体'
            ]
          },
          {
            title: 'vue2-webpack-boilerplate',
            details: [
              '由Vue官方webpack模版改造而来的vue2项目开发脚手架，预置了你现在看到的这份自我介绍'
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
