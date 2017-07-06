import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Dashboard = resolve => require(['@/views/Dashboard.vue'], resolve)
const DashboardGeneral = resolve => require(['@/views/DashboardGeneral.vue'], resolve)

const Posts = resolve => require(['@/views/Posts.vue'], resolve)
const PostsPosts = resolve => require(['@/views/PostsPosts.vue'], resolve)
const PostsAdd = resolve => require(['@/views/PostsAdd.vue'], resolve)
const PostsEdit = resolve => require(['@/views/PostsEdit.vue'], resolve)

const Pages = resolve => require(['@/views/Pages.vue'], resolve)
const PagesPages = resolve => require(['@/views/PagesPages.vue'], resolve)
const PagesAdd = resolve => require(['@/views/PagesAdd.vue'], resolve)
const PagesEdit = resolve => require(['@/views/PagesEdit.vue'], resolve)

const Comments = resolve => require(['@/views/Comments.vue'], resolve)
const CommentsComments = resolve => require(['@/views/CommentsComments.vue'], resolve)
const CommentsEdit = resolve => require(['@/views/CommentsEdit.vue'], resolve)

const Settings = resolve => require(['@/views/Settings.vue'], resolve)
const SettingsProfile = resolve => require(['@/views/SettingsProfile.vue'], resolve)

const router = new VueRouter({
  routes: [
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        // { path: '', redirect: 'general' },
        {
          path: 'general',
          component: DashboardGeneral
        }
      ]
    },
    {
      path: '/posts',
      component: Posts,
      children: [
        // { path: '', redirect: 'posts' },
        {
          path: 'posts',
          component: PostsPosts
        },
        {
          path: 'add',
          component: PostsAdd
        },
        {
          path: 'edit/:id',
          component: PostsEdit
        }
      ]
    },
    {
      path: '/pages',
      component: Pages,
      children: [
        // { path: '', redirect: 'pages' },
        {
          path: 'pages',
          component: PagesPages
        },
        {
          path: 'add',
          component: PagesAdd
        },
        {
          path: 'edit:id',
          component: PagesEdit
        }
      ]
    },
    {
      path: '/comments',
      component: Comments,
      children: [
        // { path: '', redirect: 'comments' },
        {
          path: 'comments',
          component: CommentsComments
        },
        {
          path: 'edit:id',
          component: CommentsEdit
        }
      ]
    },
    {
      path: '/settings',
      component: Settings,
      children: [
        // { path: '', redirect: 'profile' },
        {
          path: 'profile',
          component: SettingsProfile
        }
      ]
    },
    {
      path: '*',
      redirect: '/dashboard/general'
    }
  ]
})

export default router
