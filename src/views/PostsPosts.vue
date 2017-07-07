<template>
  <transition name="slide">
    <div class="root">
      <header class="statistic">
        <section class="container container-left">
          <section class="item">
            <span class="title">全部</span>
            <span class="num">({{statistic.all}})</span>
          </section>
          <div class="divider"></div>
          <section class="item">
            <span class="title">已发布</span>
            <span class="num">({{statistic.published}})</span>
          </section>
          <div class="divider"></div>
          <section class="item">
            <span class="title">草稿</span>
            <span class="num">({{statistic.draft}})</span>
          </section>
          <div class="divider"></div>
          <section class="item">
            <span class="title">秘密</span>
            <span class="num">({{statistic.secret}})</span>
          </section>
        </section>
        <section class="container container-right">
          <input v-model="search.keyword" type="text" class="field-text">
          <button class="btn btn-search">搜索文章</button>
        </section>
      </header>
      <article class="results-wrapper">
        <aside class="byline">
          <page-navigation
            :records-total="navigation.totalItems"
            :records-per-page="search.pageSize"
            :current-page="search.pageNo"
            :presented-items-number="10"
            :go-page="goPage"
          >
            <section class="item">
              <select v-model="search.operation" class="options">
                <option value="">批量操作</option>
                <option v-for="item in options.operations" :value="item.value">{{item.text}}</option>
              </select>
              <button class="btn btn-apply">应用</button>
            </section>
            <section class="item">
              <select v-model="search.date" class="options">
                <option value="">全部日期</option>
                <option v-for="item in options.dates" :value="item.value">{{item.text}}</option>
              </select>
              <select v-model="search.cat" class="options">
                <option value="">所有分类目录</option>
                <option v-for="item in options.cats" :value="item.value">{{item.text}}</option>
              </select>
              <button class="btn btn-screen">筛选</button>
            </section>
          </page-navigation>
        </aside>
        <table class="utils-table">
          <tr class="row row-title">
            <td class="item item-check">
              <i @click="toggleAllItemsCheckStatus" class="fa" :class="[results.allChecked ? 'fa-check-square-o' : 'fa-square-o']"></i>
            </td>
            <td class="item item-order">
              <span class="text">标题</span>
              <i v-show="(search.sortby === 'title' && search.order === '') || search.sortby !== 'title'" class="fa fa-sort"></i>
              <i v-show="search.sortby === 'title' && search.order === 'asc'" class="fa fa-sort-asc"></i>
              <i v-show="search.sortby === 'title' && search.order === 'desc'" class="fa fa-sort-desc"></i>
            </td>
            <td class="item item-text">
              <span class="text">作者</span>
            </td>
            <td class="item item-text">
              <span class="text">分类目录</span>
            </td>
            <td class="item item-text">
              <span class="text">标签</span>
            </td>
            <td class="item item-order">
              <i class="fa fa-commenting"></i>
              <i v-show="(search.sortby === 'comment_count' && search.order === '') || search.sortby !== 'comment_count'" class="fa fa-sort"></i>
              <i v-show="search.sortby === 'comment_count' && search.order === 'asc'" class="fa fa-sort-asc"></i>
              <i v-show="search.sortby === 'comment_count' && search.order === 'desc'" class="fa fa-sort-desc"></i>
            </td>
            <td class="item item-order">
              <span class="text">日期</span>
              <i v-show="(search.sortby === 'date' && search.order === '') || search.sortby !== 'date'" class="fa fa-sort"></i>
              <i v-show="search.sortby === 'date' && search.order === 'asc'" class="fa fa-sort-asc"></i>
              <i v-show="search.sortby === 'date' && search.order === 'desc'" class="fa fa-sort-desc"></i>
            </td>
          </tr>
          <tr v-for="(item, index) in results.details" class="row row-detail">
            <td class="item item-check">
              <i @click="toggleItemCheckStatus(index)" class="fa" :class="[item.checked ? 'fa-check-square-o' : 'fa-square-o']"></i>
            </td>
            <td class="item item-clilckable tl">
              <span @click="edit(item.post_id)" class="clickable">{{item.post_title}}</span>
            </td>
            <td class="item item-text">
              <span class="text">{{item.author_name}}</span>
            </td>
            <td class="item item-text">
              <span class="text">{{item.cat_name}}</span>
            </td>
            <td class="item item-text">
              <span class="text">{{item.tags || '--'}}</span>
            </td>
            <td class="item item-text">
              <span class="text">{{item.comment_count}}</span>
            </td>
            <td class="item item-text tl">
              <template v-if="item.post_date === item.post_modified">
                <span class="text text-block">已发布</span>
                <span class="text text-block">{{item.post_date}}</span>
              </template>
              <template v-else>
                <span class="text text-block">最后修改</span>
                <span class="text text-block">{{item.post_modified}}</span>
              </template>
            </td>
          </tr>
        </table>
        <aside class="byline">
          <page-navigation
            :records-total="navigation.totalItems"
            :records-per-page="search.pageSize"
            :current-page="search.pageNo"
            :presented-items-number="10"
            :go-page="goPage"
          >
            <section class="item">
              <select v-model="search.operation" class="options">
                <option value="">批量操作</option>
                <option v-for="item in options.operations" :value="item.value">{{item.text}}</option>
              </select>
              <button class="btn btn-apply">应用</button>
            </section>
          </page-navigation>
        </aside>
      </article>
    </div>
  </transition>
</template>

<script>
  import PageNavigation from '../components/PageNavigation.vue'
  import { doMock, doGet, merge, timestampToFullString } from '../scripts/utils.js'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'PostsPosts',
    data () {
      return {
        search: {
          keyword: '',
          operation: '',
          date: '',
          cat: '',
          pageNo: 1,
          pageSize: 20,
          sortby: '',
          order: ''
        },
        results: {
          allChecked: false,
          details: [
           // {
           //   checked: false,
           //   post_id: '',
           //   post_title: '',
           //   post_slug: '',
           //   author_name: '',
           //   author_id: '',
           //   cat_name: '',
           //   cat_id: '',
           //   tags: '',
           //   comment_count: '',
           //   post_date: '',
           //   post_modified: '',
           //   post_status: '',
           //   comment_status: ''
           // }
          ]
        },
        statistic: {
          all: 746,
          published: 710,
          draft: 34,
          secret: 2
        },
        navigation: {
          totalItems: 746,
          totalPages: 38
        },
        options: {
          operations: [
            { text: '编辑', value: 'edit' },
            { text: '移至回收站', value: 'recycle' }
          ],
          dates: [],
          cats: []
        }
      }
    },
    computed: {
      ...mapGetters(['config', 'mock'])
    },
    methods: {
      edit (postId) {
        this.$router.push(`/posts/edit/${postId}`)
      },
      toggleAllItemsCheckStatus () {
        const _this = this
        if (_this.results.allChecked) {
          merge(_this.results, {
            allChecked: false,
            details: _this.results.details.map(item => {
              item.checked = false
              return item
            })
          })
        } else {
          merge(_this.results, {
            allChecked: true,
            details: _this.results.details.map(item => {
              item.checked = true
              return item
            })
          })
        }
      },
      toggleItemCheckStatus (idx) {
        const _this = this
        if (_this.results.details[idx].checked) {
          _this.results.details[idx].checked = false
          if (_this.results.allChecked) {
            _this.results.allChecked = false
          }
        } else {
          _this.results.details[idx].checked = true
          _this.$nextTick(() => {
            if (_this.results.details.filter(item => !item.checked).length === 0) {
              _this.results.allChecked = true
            }
          })
        }
      },
      goPage (pageNum) {
        let _this = this
        _this.search.pageNo = parseInt(pageNum)
        const endPoint = '/blog/v1/excerpts'
        if (_this.config.simulate) {
          doMock(endPoint, _this.mock)
        }
        const requestData = {
          sortby: _this.search.sortby,
          order: _this.search.order,
          offset: (_this.search.pageNo - 1) * _this.search.pageSize,
          limit: _this.search.pageSize,
          cat: _this.search.cat,

          keyword: _this.search.keyword,
          date: _this.search.date
        }
        _this.wait(true)
        doGet(endPoint, requestData).done(data => {
          if (data && data.code && data.code === '200') {
            merge(_this.results, {
              allChecked: false,
              details: data.body.map(item => {
                return {
                  checked: false,
                  post_id: item.post_id,
                  post_title: item.post_title,
                  post_name: item.post_name,
                  author_name: item.author_name,
                  author_id: item.author_id,
                  cat_name: item.cat_name,
                  cat_slug: item.cat_slug,
                  tags: item.tags,
                  comment_count: item.comment_count,
                  post_date: timestampToFullString(new Date(item.post_date).valueOf()),
                  post_modified: timestampToFullString(new Date(item.post_modified_date).valueOf()),
                  post_excerpt: item.post_excerpt,
                  post_status: item.post_status,
                  comment_status: item.comment_status
                }
              })
            })
          } else if (data && data.code) {
            _this.alert({ text: `${data.message}，异常代码：${data.code}` })
          } else {
            _this.alert({ text: '查询文章失败，服务器响应异常' })
          }
        }).fail((jqXHR, textStatus, errorThrown) => {
          _this.alert({ text: `查询文章失败，异常状态码：${textStatus}` })
        }).always(() => {
          _this.wait(false)
        })
      },
      ...mapActions(['wait', 'alert'])
    },
    beforeRouteEnter (to, from, next) {
      next()
    },
    created () { this.goPage(1) },
    components: {
      PageNavigation
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../styles/utils.less';
  .root {
    .statistic {
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .container-left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 12px;
        user-select: none;
        .divider {
          width: 1px;
          height: 12px;
          background-color: #555d66;
          margin: 0 6px;
        }
        .item {
          &:hover {
            text-decoration: underline;
            .title {
              color: darken(#0073aa, 10%);
            }
            .num {
              color: darken(#555d66, 10%);
            }
          }
        }
        .title {
          color: #0073aa;
          cursor: pointer;
          transition: 150ms all linear 0ms;
        }
        .num {
          color: #555d66;
          cursor: pointer;
          transition: 150ms all linear 0ms;
        }
      }
      .container-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .field-text {
          height: 28px;
          background-color: #fff;
          border: 1px solid #ddd;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .07);
          color: #32373c;
          transition: 50ms border-color ease-in-out 0ms;
          box-sizing: border-box;
          padding: 0 6px;
          width: 160px;
          font-size: 14px;
          &:focus {
            border-color: #5b9dd9;
            box-shadow: 0 0 2px rgba(30, 140, 190, .8);
          }
        }
        .btn-search {
          margin-left: 4px;
          color: #555;
          border: 1px solid #ccc;
          background-color: #f7f7f7;
          box-shadow: 0 1px 0 #ccc;
          font-size: 13px;
          height: 28px;
          line-height: 22px;
          padding: 2px 6px;
          text-align: center;
          user-select: none;
          cursor: pointer;
          border-radius: @borderRadius;
          white-space: nowrap;
          box-sizing: border-box;
          &:hover {
            background-color: #fafafa;
            border-color: #999;
            color: #23282d;
          }
          &:active {
            background-color: #eee;
            border-color: #999;
            box-shadow: inset 0 2px 5px -3px rgba(0, 0, 0, .5);
            transform: translateY(1px);
          }
        }
      }
    }
    .byline {
      height: 40px;
      .item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        &:nth-of-type(n+2) {
          margin-left: 8px;
        }
        .options {
          margin-right: 4px;
          height: 24px;
          background: #fff url('../assets/chevron_down_25x16.png') scroll no-repeat right 3px center;
          background-size: 12px auto;
          border: 1px solid #ddd;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .07);
          color: #32373c;
          transition: 50ms border-color ease-in-out 0ms;
          box-sizing: border-box;
          padding: 0 18px 0 6px;
          width: auto;
          font-size: 13px;
          &:focus {
            border-color: #5b9dd9;
            box-shadow: 0 0 2px rgba(30, 140, 190, .8);
          }
        }
        .btn {
          color: #555;
          border: 1px solid #ccc;
          background-color: #f7f7f7;
          box-shadow: 0 1px 0 #ccc;
          font-size: 12px;
          height: 24px;
          line-height: 18px;
          padding: 2px 6px;
          text-align: center;
          user-select: none;
          cursor: pointer;
          white-space: nowrap;
          box-sizing: border-box;
          &:hover {
            background-color: #fafafa;
            border-color: #999;
            color: #23282d;
          }
          &:active {
            background-color: #eee;
            border-color: #999;
            box-shadow: inset 0 2px 5px -3px rgba(0, 0, 0, .5);
            transform: translateY(1px);
          }
        }
      }
    }
  }
</style>
