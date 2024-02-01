const routes = [
    {
        path: '/home',
        name: '/',
        redirect: '/',
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/pages/home/index.vue'),
                meta: {
                    keeplive: true
                }
            }
        ]
    },
    {
        path: "/:catchAll(.*)",
        name: '404',
        component: () => import('@/pages/error/404.vue'),
    },
    {
        path: '/401',
        name: '401',
        component: () => import('@/pages/error/401.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login/index.vue'),
    },
]

const skipFolder = ['home', 'error', 'login']

function addRoutes(router) {
    //引入所有pages下.vue文件 
    let modules = import.meta.glob("@/pages/**")
    Object.keys(modules).forEach(path => {
        const p = path.split('/').reverse()[1]
        if (!skipFolder.includes(p)) {
            routes[0].children.push({
                path: '/' + p,
                name: p,
                component: modules[path]
            })
        }
    })
    console.log('this.routes', routes)
    routes.forEach(m => router.addRoute(m))
}

export {routes, addRoutes}