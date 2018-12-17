const Layout = () => import(/* webpackChunkName: 'index' */ '../views/layout')

const staticRoute = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: 'index' */ '../views/login/login.vue')
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../views/home'),
            }
        ]
    },
    {
        path: '/example1',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../views/example1'),
            },
            {
                path: 'page1',
                component: () => import(/* webpackChunkName: 'home' */ '../views/example1/page1'),
            },
            {
                path: 'page2',
                component: () => import(/* webpackChunkName: 'home' */ '../views/example1/page2'),
            },
            {
                path: 'page3',
                component: () => import(/* webpackChunkName: 'home' */ '../views/example1/page3'),
            }
        ]
    },
    {
        path: '/example2',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../views/example2'),
            }
        ]
    },
    {
        path: '/example3',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../views/example3'),
            }
        ]
    },
    // 你的其他路由
    {
        path: '/error',
        component: () => import(/* webpackChunkName: 'error' */ '../views/error'),
        children: [
            {
                path: '401',
                component: () => import(/* webpackChunkName: 'error' */ '../views/error/401')
            },
            {
                path: '403',
                component: () => import(/* webpackChunkName: 'error' */ '../views/error/403')
            },
            {
                path: '404',
                component: () => import(/* webpackChunkName: 'error' */ '../views/error/404')
            },
            {
                path: '500',
                component: () => import(/* webpackChunkName: 'error' */ '../views/error/500')
            }
        ]
    },
   
  // 当页面地址和上面任一地址不匹配，则跳转到404
//   {
//       path: '*',
//       redirect: '/error/404'
//   }
]

export default staticRoute

