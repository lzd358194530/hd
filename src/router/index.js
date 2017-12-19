import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'

/*
  路由懒加载
 */

/*登陆模块*/
const login = () =>
    import ('../pages/login')
//忘记密码
const password = () =>
    import ('../pages/password')
const user = () =>
    import ('../pages/user')
//加载消息
const home = () =>
    import ('../pages/home')
//加载消息
const msg = () =>
    import ('../pages/msg')
//加载店铺
const shop = () =>
    import ('../pages/shop')
//加载用户中心
const center = () =>
    import ('../pages/center')

//加载商家列表
const business = () =>
    import ('../pages/business')
//加载订单管理
const orders = () =>
    import ('../pages/orders')
//加载订单详情页
const ordersDetails = () =>
    import ('../pages/ordersDetails')
//加载销售列表页
const sales = () =>
    import ('../pages/sales')
//加载申请加盟页
const join = () =>
    import ('../pages/join')
//加载管理员
const managers = () =>
    import ('../pages/managers')
//加载添加管理员
const addmanagers = () =>
    import ('../pages/addmanagers')
//加载管理员详情页
const managerDetails = () =>
    import ('../pages/managerdetails')
//加载视频监控
const monitor = () =>
    import ('../pages/monitor')
//加载视频监控详情页
const monitorDetails = () =>
    import ('../pages/monitordetails')
//加载补货中心
const supplement = () =>
    import ('../pages/supplement')
//加载补货中心订单列表详情页
const orderListDetails = () =>
    import ('../pages/orderListDetails')

// //加载店铺列表
const shopList = () =>
    import ('../pages/shoplist')
//加载店铺列表
const shopDetails = () =>
    import ('../pages/shopdetails')
//加载收货中心
const receive = () =>
    import ('../pages/receive')
//加载收益明细
const profit = () =>
    import ('../pages/profit')
//加载银行卡
const bankcard = () =>
    import ('../pages/bankcard')
//加载银行卡更改
const changebankcard = () =>
    import ('../pages/changebankcard')
//加载验证
const verify = () =>
    import ('../pages/verify')
Vue.use(Router)
import store from '../store'
export default new Router({
    routes: [{
        path: '/',
        component: user,
        redirect:'/home',
        children: [{
            path: '/home',
            component: home
        },{
            path: '/msg',
            component: msg
        }, {
            path: '/shop',
            component: shop
        }, {
            path: '/center',
            component: center
        }, ]
    }, 
    {
        path: '/login',
        component: login
    }, 
    { //商家列表
        path: '/business',
        component: business
    }, 
    { //订单管理
        path: '/orders',
        component: orders,
    }, 
    { //订单详情页
        path: "/order/details",
        component: ordersDetails
    }, 
    { //销售明细
        path: "/sales",
        component: sales
    }, 
    { //申请加盟
        path: "/join",
        component: join
    }, 
    { //管理员
        path: "/managers",
        component: managers
    },
    { //添加管理员
        path: "/addmanagers",
        component: addmanagers
    }, 
    { //管理员详情页
        path: "/manager/details",
        component: managerDetails
    }, 
    { //视频监控页
        path: "/monitor",
        component: monitor
    }, 
    { //视频监控详情页
        path: "/monitordetails",
        component: monitorDetails
    }, 
    { //补货中心
        path: "/supplement",
        component: supplement
    }, 
    { //补货中心订单详情
        path: "/orderlistdetails",
        component: orderListDetails
    }, 
    { //店铺列表
        path: "/shopList",
        component: shopList
    }, 
    { //店铺详情页
        path: "/shop/details",
        component: shopDetails
    }, 
    { //收货中心
        path: "/receive",
        component: receive
    }, 
    { //收益明细
        path: "/profit",
        component: profit
    }, 
    { //银行卡
        path: "/bankcard",
        component: bankcard
    }, 
    { //更改银行卡
        path: "/changebankcard",
        component: changebankcard
    }, 
    { //验证
        path: "/verify",
        component: verify
    },
    { //验证
        path: "/password",
        component: password
    }
    ],
})
