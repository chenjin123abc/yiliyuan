// pages/zhaopin/zhaopin.js
var util=require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: util.formatTime(new Date()),
  },
  getTime:function(e){
    var newtime=e.detail.value;
    this.setData({
      time: newtime,
    });
   
  },
  formsubmit:function(e){
    console.log(e);
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })
  },
  call:function(){
    wx.makePhoneCall({
      phoneNumber: '15872063523'
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