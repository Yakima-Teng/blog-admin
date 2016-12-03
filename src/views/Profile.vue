<template>
  <transition name="fade">
    <div class="profile">
      <div v-for="item in profile" :class="{ 'ignore': !item.important }" class="item">
        <span class="title">{{item.title}}</span>
        <span class="symbol">：</span>
        <span class="detail">{{item.detail}}</span>
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
            title: '毕业院校',
            detail: '沈阳药科大学',
            important: false
          },
          {
            title: '最高学历',
            detail: '一本',
            important: true
          },
          {
            title: '就读专业',
            detail: '药学（食品药学方向）',
            important: false
          },
          {
            title: '求职岗位',
            detail: '前端开发',
            important: true
          },
          {
            title: '出生性别',
            detail: '1991年、男',
            important: false
          },
          {
            title: '身高体重',
            detail: '1.77m、72kg',
            important: false
          },
          {
            title: '腾讯企鹅',
            detail: '821135564（请备注“来自github”）',
            important: false
          },
          {
            title: '联系邮箱',
            detail: 'cleveryun@163.com',
            important: true
          },
          {
            title: '英语水平',
            detail: 'CET-6',
            important: true
          },
          {
            title: '户籍坐标',
            detail: '户籍浙江永嘉，当前坐标上海宝山顾村',
            important: true
          },
          {
            title: '期望薪资',
            detail: '11k',
            important: true
          },
          {
            title: '兴趣爱好',
            detail: '羽毛球，反手比较厉害，目前基本每周六早上会去球馆打一次',
            important: false
          },
          {
            title: '性格特点',
            detail: '有一点点的心高气傲，善良好相处，话少',
            important: false
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
