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
      { name: "上海花木科技信息有限公司  曾经理", content: "做的软件很好用，也符合预期，简直炸裂！。", date: "2017年2月4日" },
      { name: "上海花木科技信息有限公司  曾经理", content: "做的软件很好用，也符合预期，简直炸裂！。", date: "2017年2月4日" },
      { name: "上海花木科技信息有限公司  曾经理", content: "做的软件很好用，也符合预期，简直炸裂！。", date: "2017年2月4日" },
      { name: "上海花木科技信息有限公司  曾经理", content: "做的软件很好用，也符合预期，简直炸裂！。", date: "2017年2月4日" },
      { name: "上海花木科技信息有限公司  曾经理", content: "做的软件很好用，也符合预期，简直炸裂！。", date: "2017年2月4日" },
      { name: "上海花木科技信息有限公司  曾经理", content: "做的软件很好用，也符合预期，简直炸裂！。", date: "2017年2月4日" },


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
