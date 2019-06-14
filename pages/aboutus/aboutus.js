// pages/aboutus/aboutus.js
Page({

  /**
   * 页面的初始数据
   */
  data :{
    people:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this=this;
    wx.request({
      url: 'https://www.yiliyuan.vip/index.php/api/wxuserpicture',
      success: function (res){
        var message=res.data.data;
        for (var i = 0;i < message.length;i++){
          var middle={
            src: message[i].picture,
            name: message[i].name,
            yanyu: message[i].yanyu
          };
          _this.setData({
            people: _this.data.people.concat(middle),
          })
        }
        if (message.length%2!=0){
          _this.setData({
            people: _this.data.people.concat({}),
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})