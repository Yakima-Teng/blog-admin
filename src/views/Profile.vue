<template>
  <transition name="fade">
    <!-- <div class="profile">
      <div v-for="item in profile" :class="{ 'ignore': !item.important }" class="item">
        <span class="title">{{item.title}}</span>
        <span class="symbol">：</span>
        <span class="detail">{{item.detail}}</span>
      </div>
    </div> -->
    <div class="profile">
      <div v-for="item in profile" :class="{ 'ignore' : !item.important }" class="item-normal">
        <header class="item-header">{{item.title}}</header>
        <article class="item-details">
          <p v-for="detail in item.details" :class="{ 'ignore' : !detail.important }" class="item-detail" v-html="detail.text"></p>
        </article>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'profile',
    data () {
      return {
        profile: [
          {
            title: '基本信息',
            important: true,
            details: [
              {
                text: '男，91年生人，2013年毕业，一本院校药学专业',
                important: true
              },
              {
                text: '户籍浙江永嘉，当前坐标上海宝山顾村',
                important: true
              }
            ]
          },
          {
            title: '技能概览',
            important: false,
            details: [
              {
                text: '主用Vue，有Angular项目维护经验，webpack、gulp、less、ES6、git',
                important: false
              },
              {
                text: '喜欢代码写着写着就把之前的重构一下，不然会心情郁闷',
                important: false
              },
              {
                text: 'production-ready而非research-ready（未研读过某某框架/库的源码）',
                important: false
              }
            ]
          },
          {
            title: '相关链接',
            important: false,
            details: [
              {
                text: '豆瓣读书：<a href="https://book.douban.com/people/cleveryun/">https://book.douban.com/people/cleveryun/</a>',
                important: false
              },
              {
                text: 'Github：<a href="https://github.com/Yakima-Teng">https://github.com/Yakima-Teng</a>',
                important: false
              }
            ]
          },
          {
            title: '联系方式',
            important: false,
            details: [
              {
                text: '邮箱：cleveryun@163.com',
                important: false
              },
              {
                text: '企鹅：821135564',
                important: false
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .profile {
    color: #000;
    .item {
      font-size: 0;
      .title, .symbol, .detail {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
      }
    }
  }
</style>
