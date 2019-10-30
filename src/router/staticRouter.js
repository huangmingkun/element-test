/* 静态页面路由 */
const staticRouter = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/',
    menu: true,
    name: 'layout',
    component: () => import('../views/layout/TheLayout'),
    children: [
      {
        path: '/index',
        name: 'index',
        title: 'menu.home',
        icon: 'el-icon-s-home',
        component: () => import('@/views/pages/PageHome')
      },
      {
        path: '/table',
        name: 'table',
        title: 'menu.table',
        icon: 'el-icon-search',
        component: () => import('@/views/pages/PageTable')
      }
      // {
      //   path: '/forms',
      //   name: 'forms',
      //   title: 'menu.form',
      //   icon: 'el-icon-tickets',
      //   component: () => import('@/views/layout/TheLayoutEmpty'),
      //   children: [
      //     {
      //       path: '/forms/base',
      //       name: 'formsBase',
      //       title: 'menu.formBase',
      //       component: () => import('@/views/pages/forms/PageFormsBase')
      //     }, {
      //       path: '/forms/edit',
      //       name: 'formsEdit',
      //       title: 'menu.richText',
      //       component: () => import('@/views/pages/forms/PageFormsEdit')
      //     }
      //   ]
      // },
      // {
      //   path: '/charts',
      //   name: 'charts',
      //   title: 'menu.chart',
      //   icon: 'el-icon-picture',
      //   component: () => import('@/views/pages/PageCharts')
      // }
    ]
  }
]

export default staticRouter
