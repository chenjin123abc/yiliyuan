// pages/yuyue/yuyue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: [],
    kangshuai: [
    ],
    jianfei: [
    ],
  },
  getDetail: function (e) {
    // console.log(e);
    var price = e.currentTarget.dataset.price;
    var sale = e.currentTarget.dataset.sale;
    var productname = e.currentTarget.dataset.productname;
    var src = e.currentTarget.dataset.src;
    var yuanjia = e.currentTarget.dataset.yuanjia;
    var kucun = e.currentTarget.dataset.kucun;
    var guige = e.currentTarget.dataset.guige;
    wx.navigateTo({
      url: '../../page/shangpin/shangpin?price=' + price + '&sale=' + sale + '&productname=' + productname + '&src=' + src + '&yuanjia=' + yuanjia + '&kucun=' + kucun + '&guige=' + guige,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    wx.request({
      url: 'https://www.yiliyuan.vip/index.php/api/products',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var arr = res.data.data;
        var newarr = arr[0];
        for (var i = 0; i < newarr.length; i++) {
          var objProdyct = newarr[i];
          if (objProdyct.mainproduct == "1") {
            var middle = {
              src: objProdyct.path,
              productname: objProdyct.title,
              price: objProdyct.price,
              sale: objProdyct.salenumber,
              yuanjia: objProdyct.yuanjia,
              kucun: objProdyct.kucun,
              guige: objProdyct.guige
            };
            _this.setData({
              img: _this.data.img.concat(middle),
            })
            
          } else if (objProdyct.kangshuai == "1") {
            var middle = {
              src: objProdyct.path,
              productname: objProdyct.title,
              price: objProdyct.price,
              sale: objProdyct.salenumber,
              yuanjia: objProdyct.yuanjia,
              kucun: objProdyct.kucun,
              guige: objProdyct.guige
            };
            _this.setData({
              kangshuai: _this.data.kangshuai.concat(middle),
            })
            
          } else if (objProdyct.jianfei == "1") {
            var middle = {
              src: objProdyct.path,
              productname: objProdyct.title,
              price: objProdyct.price,
              sale: objProdyct.salenumber,
              yuanjia: objProdyct.yuanjia,
              kucun: objProdyct.kucun,
              guige: objProdyct.guige
            };
            _this.setData({
              jianfei: _this.data.jianfei.concat(middle),
            })
          }

        }
        var leg = _this.data.kangshuai.length;
        var legjianfei = _this.data.jianfei.length;
        if (leg%2!=0){
          _this.setData({
            kangshuai: _this.data.kangshuai.concat({}),
          })
        }
        if (legjianfei % 2 != 0) {
          _this.setData({
            jianfei: _this.data.jianfei.concat({}),
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