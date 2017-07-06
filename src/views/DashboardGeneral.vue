<template>
  <transition name="slide">
    <div class="root">
      <ul class="items">
        <li @click="go('/posts/posts')" class="item">文章总数：{{statistic.posts}}</li>
        <li @click="go('/pages/pages')" class="item">页面总数：{{statistic.pages}}</li>
        <li @click="go('/comments/comments')" class="item">评论总数：{{statistic.comments}}</li>
      </ul>
    </div>
  </transition>
</template>

<script>
  import { doMock, doGet } from '../scripts/utils.js'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'DashboardGeneral',
    data () {
      return {
        finishedAjax: 0,
        statistic: {
          posts: '...',
          pages: '...',
          comments: '...'
        }
      }
    },
    computed: {
      ...mapGetters(['config', 'mock'])
    },
    methods: {
      go (route) {
        this.$router.push(route)
      },
      updateStatistic () {
        let _this = this
        _this.load(true)
        _this.getPosts(checkFinishedAjax)
        _this.getPages(checkFinishedAjax)
        _this.getComments(checkFinishedAjax)

        function checkFinishedAjax () {
          _this.finishedAjax++
          if (_this.finishedAjax === 3) {
            _this.load(false)
          }
        }
      },
      getPosts (cb) {
        let _this = this
        const endPoint = '/blog/v1/all-posts'
        if (_this.config.simulate) {
          doMock(endPoint, _this.mock.blogV1AllPosts)
        }
        const requestData = {}
        doGet(endPoint, requestData).done(data => {
          if (data && data.code && data.code === '200') {
            _this.statistic.posts = data.body.length
          } else if (data && data.code) {
            _this.statistic.posts = data.message
          } else {
            _this.statistic.posts = '获取失败'
          }
        }).fail((jqXHR, textStatus, errorThrown) => {
          _this.statistic.posts = '获取失败'
        }).always(() => {
          cb && cb()
        })
      },
      getPages (cb) {
        let _this = this
        const endPoint = '/blog/v1/pages'
        if (_this.config.simulate) {
          doMock(endPoint, _this.mock.blogV1Pages)
        }
        const requestData = {}
        doGet(endPoint, requestData).done(data => {
          if (data && data.code && data.code === '200') {
            _this.statistic.pages = data.body.length
          } else if (data && data.code) {
            _this.statistic.pages = data.message
          } else {
            _this.statistic.pages = '获取失败'
          }
        }).fail((jqXHR, textStatus, errorThrown) => {
          _this.statistic.pages = '获取失败'
        }).always(() => {
          cb && cb()
        })
      },
      getComments (cb) {
        let _this = this
        const endPoint = '/blog/v1/comments'
        if (_this.config.simulate) {
          doMock(endPoint, _this.mock.blogV1Comments)
        }
        const requestData = {}
        doGet(endPoint, requestData).done(data => {
          if (data && data.code && data.code === '200') {
            _this.statistic.comments = data.body.length
          } else if (data && data.code) {
            _this.statistic.comments = data.message
          } else {
            _this.statistic.comments = '获取失败'
          }
        }).fail((jqXHR, textStatus, errorThrown) => {
          _this.statistic.comments = '获取失败'
        }).always(() => {
          cb && cb()
        })
      },
      ...mapActions(['load'])
    },
    beforeRouteEnter (to, from, next) {
      next()
    },
    created () {
      this.updateStatistic()
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .root {
    .items {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .item {
        flex: 1;
        height: 112px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #fff;
        user-select: none;
        cursor: pointer;
        &:nth-of-type(1) {
          background-color: rgb(239, 83, 80);
        }
        &:nth-of-type(2) {
          background-color: rgb(130, 177, 255);
        }
        &:nth-of-type(3) {
          background-color: rgb(76, 175, 80);
        }
      }
    }
  }
</style>
