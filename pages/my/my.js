// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    touxiang:"../../img/touxiang.jpg",
    name:"未登录",
    show:false,
    zhifu:[
      { name: "iconfont icon-daifukuan", CH: "待付款", url:"../../page/notpay/notpay?id=1"},
      { name: "iconfont icon-daifahuo", CH: "已支付", url: "../../page/notpay/notpay?id=2"},
      { name: "iconfont icon-yiwancheng", CH: "已完成", url: "../../page/notpay/notpay?id=3"},
      { name: "iconfont icon-dizhi", CH: "全部订单", url: "../../page/notpay/notpay?id=4"},
    ],
    pintuan: [
      { name: "iconfont icon-pintuan", CH: "我的拼团", 
        url: "../../page/mypintuan/mypintuan",
        jiantou:"iconfont icon-icon_arrow_right;padding-top:28px" ,
        style:"font-size:30px; color:pink;padding-top: 18px"
      },
      { name: "iconfont icon-qiaquan", CH: "我的卡券",
        url: "../../page/kaquan/kaquan",
        jiantou: "iconfont icon-icon_arrow_right;text-align:center", 
        style: "font-size:30px; color:yellow;padding-top: 18px"

        },
      { name: "iconfont icon-miaosha", CH: "我的秒杀", 
       url: "../../page/mymiaosha/mymiaosha",
        jiantou: "iconfont icon-icon_arrow_right;text-align:center",
        style: "font-size:30px; color:red;padding-top: 18px"

       },
      { name: "iconfont icon-youhuiquan", CH: "我的优惠券", 
      url: "../../pages/youhui/youhui", 
        jiantou: "iconfont icon-icon_arrow_right;margin-top: 20px ",
        style: "font-size:30px; color:green;padding-top: 18px"

       },
    ],
  },
  getUrl:function(e){
    // console.log(e);
    wx.navigateTo({
      url:e.currentTarget.dataset.url
    })
  },
  /**
   * 获得用户信息
   */
  onGotUserInfo(e) {

    //  console.log(e.detail.userInfo)
    this.data.name = e.detail.userInfo.nickName;
    this.data.touxiang = e.detail.userInfo.avatarUrl;
    var name = this.data.name;
    var touxiang = this.data.touxiang;
    this.setData({
      show:true,
      name: name,
      touxiang: touxiang
    })
  },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   const self=this;
    wx.login({
      //获取code
      success: function (res) {
        var code = res.code; //返回code
        var appId = '	wx3a72fa527e7c1088';
        var secret = '...';
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function (res) {
            var openid = res.data.openid //返回openid
            console.log('openid为' + openid);
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (app.globalData.name!="no name") {
      this.setData({
        show: true,
        name: app.globalData.name,
        touxiang: app.globalData.photo
      })
    } else {
      this.setData({
        show: false,
        
      })
    }
    this.setData({
    })
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})