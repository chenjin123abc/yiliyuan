// pages/getyouhui/getyouhui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    youhuiquan:[
      {
      id:1,
      money:"30.00",
      leixing:"优惠券",
      shiyongtiaojian:"满100可用",
      src:"../../img/djlingqu.jpg",
      youxiaoqi:"领取30天之内有效",
      fanwei:"仅用于店内特色项目使用",
      beijing:"../../img/getyouhui.jpg"
      },
      {
        id:2,
        money:"50.00",
        leixing: "优惠券",
        shiyongtiaojian: "满300可用",
        src: "../../img/djlingqu.jpg",
        youxiaoqi: "领取30天之内有效",
        fanwei: "仅用于店内特色项目使用",
        beijing: "../../img/getyouhui.jpg"
      }
    ]
  },
  getyouhui:function(e){
    wx.navigateTo({
      url: '',
    });
    var e=e;
    console.log(e);
    var index = e.currentTarget.dataset.id - 1;
    console.log(index);
      this.setData({
        ["youhuiquan["+index+"].src"]:"../../img/yilingqu.jpg",
        ["youhuiquan["+index+"].beijing"]: "../../img/getedyouhui.jpg"
      })
    
    
      
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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