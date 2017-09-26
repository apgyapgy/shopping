//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    autoplay:false,
    bannerImgs:['../../image/banner.png']
  }, 
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
   
  },
  getOpenId:function(){
    wx.request({
      url: 'wx_we/openid', //仅为示例，并非真实的接口地址
      data: {
        code: '',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  //返回顶部
  goTop:function(){
    wx.pageScrollTo({
      scrollTop: 0
    });
  }
})
