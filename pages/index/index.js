//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imgUrls: [
      "../images/ban3.png",
      "../images/ban1.png",
      "../images/ban2.png",
       
    ],
    comments: [
      { name: "上海有码信息科技  孙琪", content: "跟Heboot交流非常顺畅，产品，设计非常合我们口味，真的不仅仅是软件研发，对互联网很敏锐，也很直接的提出了我们线上的问题。", date: "2017年2月4日" },
      { name: "上海花木信息科技有限公司  曾经理", content: "做的软件很好用，也符合预期，简直炸裂！。", date: "2017年2月4日" },
      { name: "上海JR信息科技有限公司  许经理", content: "从第一个版本就交给了H Studio,一直到上线拿到融资，APP非常给力。", date: "2017年2月4日" },
      { name: "郑州立方财税  东方", content: "对我们传统线下业务的线上扩张提供了很好的思路，也给了我们很多意见，小程序是同行最牛的，哈哈！", date: "2017年2月4日" },
      
      


    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },
  app_web_tap:function(e){
    wx.navigateTo({
      url: '../services/app_web',
    })
  }
})
