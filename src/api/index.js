// API进行统一管理

import requests from './request'
import mockRequests from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList

export const req = () => {
    return requests({url:'/api/product/getBaseCategoryList',method:'get'})
}

// 获取banner
export const reqGet = () => mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')


// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
//   }
  
export const reqGetSearchInof = (params) => requests({url:"/api/list",method:"post",data:params})

// 获取产品信息详情的接口
export const reqGoodsInfo = (skuId)=>requests({url:`/api/item/${skuId}`,method:'get'})

// 提交购物车信息
export const reqShopCar = (skuId,skuNum) => requests({url:`/api/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

// 获取购物车列表数据接口
export const reqCarList = () => requests({url:'/api/cart/cartList',method:'get'})

// 删除购物车产品接口
export const reqDelete = (skuId)=>requests({url:`/api/cart/deleteCart/${skuId}`,method:'delete'})

// 修改商品选中状态
export const reqByid = (skuId,isChecked)=>requests({url:`/api/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

// 获取验证码
export const reqGetCode = (phone) => requests({url:`/api/user/passport/sendCode/${phone}`,method:'get'})

// 注册
export const reqUserRegister = (data) => requests({url:'/api/user/passport/register',data,method:'post'})

// 登录
export const reqUserLogin = (data) => requests({url:'/api/user/passport/login',data,method:'post'})

// 获取用户信息
export const reqUserInfo = () => requests({url:'/api/user/passport/auth/getUserInfo',method:'get'})

// 退出登录
export const reqlogOut = () => requests({url:'/api/user/passport/logout',method:'get'})

// 获取用户地址信息
export const reqAddressInfo = () => requests({url:'/api/user/userAddress/auth/findUserAddressList',method:'get'})

// 获取订单交易页信息
export const reqOrderInfo = () => requests({url:'/api/order/auth/trade',method:'get'})

// 提交订单
export const reqSubmitOrder = (tradeNo,data) => requests({url:`/api/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

// 获取订单支付信息
export const reqPayInfo = (orderId) => requests({url:`/api/payment/weixin/createNative/${orderId}`,method:'get'})

// 查询订单支付状态
export const reqPayStatus = (orderId) => requests({url:`/api/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

// 获取我的订单列表
export const reqMyOrderList = (page,limit) => requests({url:`/api/order/auth/${page}/${limit}`,method:'get'})