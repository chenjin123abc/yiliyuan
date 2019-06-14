// pages/miaosha/miaosha.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: [],
  },
  getDetail: function (e) {
    var price = e.currentTarget.dataset.price;
    var sale = e.currentTarget.dataset.sale;
    var productname = e.currentTarget.dataset.productname;
    var src = e.currentTarget.dataset.src;
    wx.navigateTo({
      url: '../../page/shangpin/shangpin?price=' + price + '&sale=' + sale + '&productname=' + productname + '&src=' + src,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'https://www.yiliyuan.vip/index.php/api/productspintuan',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        var arr = res.data.data;
        for (var i = 0; i < arr.length; i++) {
          var objProdyct = arr[i];
          var middle = {
            src: objProdyct.path,
            name: objProdyct.title,
            price: objProdyct.price,
            sale: objProdyct.salenumber,
            yuanjia: objProdyct.yuanjia,
            kucun: objProdyct.kucun,
            guige: objProdyct.guige
          };
          _this.setData({
            url: _this.data.url.concat(middle),
          })
        }
        if (_this.data.url.length % 2 != 0) {
          _this.setData({
            url: _this.data.url.concat({}),
          })
        }
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