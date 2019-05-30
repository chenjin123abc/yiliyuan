//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    url: [{ url: "../../imggoods/miaosha.jpg", 
          src:"../testpage/testpage",
          name: "养颜三宝",
          price:299,
          number:12
          },
         { url: "../../imggoods/jianfei.jpg" ,
           src: "../../page/shangpin/shangpin",
           name: "减肥三宝" ,
           price: 299,
           number: 7
              }],
    tese:[
      { src: "../../imggoods/1.jpg",
        url:"../../page/pintuan/pintuan"
      },
      { src: "../../imggoods/2.jpg",
        url: "../testpage/testpage"
       },
      { src: "../../imggoods/3.jpg",
        url: "../testpage/testpage"
       },
    ],
    caidan:[
      {
        url: "../aboutus/aboutus",
        src:"../../img/company.jpg" 
      },
      {
        url: "../getyouhui/getyouhui",
        src: "../../img/kanjia.jpg"
      },
      {
        url: "../miaosha/miaosha",
        src: "../../img/miaosha.jpg"
      },
      {
        url: "../pintuan/pintuan",
        src: "../../img/togeter.jpg"
      },
      {
        url: "../zhaopin/zhaopin",
        src: "../../img/job1.jpg"
      },
    ],
    
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  test:function(){
    console.log(this.url);
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
