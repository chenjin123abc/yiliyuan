// page/getuserphone/getuserphone.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getPhoneNumber(e) {
    var _this = this;
    var errMsg = e.detail.errMsg
    var iv = e.detail.iv
    var encryptedData = e.detail.encryptedData
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: 'https://www.yiliyuan.vip/index.php/api/wxuserinfo',
            data: {
              code: res.code,
              name: app.globalData.name,
              iv: iv,
              encryptedData: encryptedData
            },
            success: function (res) {
              var phone = res.data.phoneNumber;
              app.globalData.phone = phone;
              wx.setStorageSync("phone", phone)
              wx.navigateBack({
                delta: 1
              })
            },
          })
        } else {
          wx.showModal({
            title: '请先登录',
            content: '请点击头标登录',
          })
        }
      }
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