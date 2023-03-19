import MyFirst from 'pages/MyFirst.vue'
import MyFirst1 from 'pages/MyFirst1.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },

  {
    path: '/MyFirst',
    component: () => MyFirst
  }
  ,

  {
    path: '/MyFirst1',
    component: () => MyFirst1
  }
]

export default routes
