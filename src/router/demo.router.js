/**
 * router模块化
 */

export default {
    path: '/demoRouter',
    name: 'demoRouter',
    component: () => import('@/views/demoRouter'),
    meta: {
        title: '路由示例'
    }
}