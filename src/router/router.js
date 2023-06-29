import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
import MyOrder from '../pages/Center/myOrder'
import GroupOrder from '../pages/Center/groupOrder'

// 路由懒加载
const foo = () => {
    console.log(11111111);
    return import('../pages/Home')
}

export default [
    {
        path:"/center",
        component: Center,
        meta:{show:true},
        children: [
            {
                path: 'myorder',
                component: MyOrder
            },
            {
                path: 'groupOrder',
                component: GroupOrder
            },{
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path:"/paysuccess",
        component: PaySuccess,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path==='/pay') {
                next()
            }else {
                next(false)
            }
        }
    },
    {
        path:"/pay",
        component: Pay,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path==='/trade') {
                next()
            }else {
                next(false)
            }
        }
    },
    {
        path:"/trade",
        component: Trade,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path==='/shopcart') {
                next()
            }else {
                next(false)
            }
        }
    },
    {
        path:"/shopcart",
        component: ShopCart,
        meta:{show:true}
    },
    {
        path: "/addCartsuccess",
        name: "addCartsuccess",
        component: AddCartSuccess,
        meta:{show:true}
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta:{show:true}
    },
    {
        path: "/home",
        component: foo,
        meta:{show:true}
    },
    {
        path: "/search",
        name:"search",
        component: Search,
        meta:{show:true}
    },
    {
        path: "/login",
        component: Login,
        meta:{show:false}
    },
    {
        path: "/register",
        component: Register,
        meta:{show:false}
    },
    {
        path: "*",
        redirect: "/home"
    }
]