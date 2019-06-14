//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    url: [],
    tese:[],
    caidan:[
      {
        url: "../aboutus/aboutus",
        src:"https://www.yiliyuan.vip//picture/caidan/company.jpg" 
      },
      {
        url: "../getyouhui/getyouhui",
        src: "https://www.yiliyuan.vip//picture/caidan/kanjia.jpg"
      },
      {
        url: "../miaosha/miaosha",
        src: "https://www.yiliyuan.vip//picture/caidan/miaosha.jpg"
      },
      {
        url: "../pintuan/pintuan",
        src: "https://www.yiliyuan.vip//picture/caidan/togeter.jpg"
      },
      {
        url: "../zhaopin/zhaopin",
        src: "https://www.yiliyuan.vip//picture/caidan/job1.jpg"
      },
    ],
    
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
  test:function(){
    console.log(this.url);
  },
  onLoad: function (options) {
    var _this=this;
    wx.request({
      url: 'https://www.yiliyuan.vip/index.php/api/productsIndex', 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        var product=res.data.data;
        for (var i = 0; i < product.length; i++) {
          var objProdyct = product[i];
          if (objProdyct.tese == "1") {
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
              tese: _this.data.tese.concat(middle),
            })

          } else if (objProdyct.pintuan == "1") {
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
              url: _this.data.url.concat(middle),
            })
          }
        }
      },
    })
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
