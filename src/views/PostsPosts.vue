<!--suppress ALL -->
<template>
  <transition name="slide">
    <div class="root">
      <header class="statistic">
        <section class="item">
          <span class="title">全部</span>
          <span class="num">（{{statistic.all}}）</span>
        </section>
        <section class="item">
          <span class="title">已发布</span>
          <span class="num">（{{statistic.published}}）</span>
        </section>
        <section class="item">
          <span class="title">草稿</span>
          <span class="num">（{{statistic.draft}}）</span>
        </section>
        <section class="item">
          <span class="title">秘密</span>
          <span class="num">（{{statistic.secret}}）</span>
        </section>
        <section class="search-wrapper">
          <input v-model="search.keyword" type="text" class="field-text">
          <button class="btn btn-search">搜索文章</button>
        </section>
      </header>
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
              <option value="所有分类目录"></option>
              <option v-for="item in options.cats" :value="item.value">{{item.text}}</option>
            </select>
            <button class="btn btn-screen">筛选</button>
          </section>
        </page-navigation>
      </aside>
      <table class="utils-table"></table>
    </div>
  </transition>
</template>

<script>
  import PageNavigation from '../components/PageNavigation.vue'

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
          pageSize: 20
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
            { text: '批量操作', value: '' },
            { text: '编辑', value: 'edit' },
            { text: '移至回收站', value: 'recycle' }
          ],
          dates: [],
          cats: []
        }
      }
    },
    methods: {
      goPage (pageNum) {
        console.log(pageNum)
      }
    },
    components: {
      PageNavigation
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
