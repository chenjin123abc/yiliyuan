// page/mai/mai.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    guige: "",
    name: '',
    number: '',
    price: '',
    zongji: '',
    src: '',
    id: '',
    shar: false,
    teamid:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var num = options.number;
    var pri = options.price;
    var zongji = pri * num;

    this.setData({
      guige: options.guige,
      name: options.name,
      number: options.number,
      price: options.price,
      zongji: zongji,
      src: options.src,
      id: options.id,
    })
  },

  onShareAppMessage: function(options) {
    var _this = this;
    // console.log(options.target.dataset.src);
    var time = _this.data.teamid; //
    var pname = options.target.dataset.pname; //产品的名字
    var userphoto = app.globalData.photo; //用户的头像
    var name = app.globalData.name; //用户的昵称
    var pimage = options.target.dataset.src; //产品的图片路由
    var id = options.target.dataset.id; //产品的id
    var price = options.target.dataset.price; //产品的价格
    var number = options.target.dataset.number; //产品拼的数量
    
   //团长在分享的时候，不再往里边添加团购了；
    // wx.request({
    //   url: 'https://www.yiliyuan.vip/index.php/api/addteam?id=' + id + "&userphoto=" + userphoto + "&pimage=" + pimage + "&name=" + name + "&teamid=" + time, //将客户的头像，昵称，产品的id，产品的图像存到数据库。

    // })
    var sharobj = {
      title: name + "分享了" + pname + id,
      path: "/page/pintuantoger/pintuantoger?userphoto=" + userphoto + "&name=" + name + "&pimage=" + pimage + "&pname=" + pname + "&price=" + price + "&number=" + number + "&id=" + id + "&teamid=" + time,
      imageUrl: pimage,
      success: function(res) {　
        console.log(res.errMsg);　　　　　 // 转发成功之后的回调
      },
    }

    return sharobj;
  },

  buy: function() {
    var phone = wx.getStorageSync("phone");
    var _this = this;
    var time = Date.parse(new Date());
    var id=_this.data.id;
    var userphoto = app.globalData.photo; //用户的头像
    var name = app.globalData.name; //用户的昵称

    _this.setData({
      teamid: time
    })
    wx.login({
      success: function(res) {
        var code = res.code;
        wx.request({
          url: 'https://www.yiliyuan.vip/index.php/api/pay',
          data: {
            code: code,
            total_fee: (_this.data.price) * (_this.data.number),
            name: _this.data.name,
            time: _this.data.teamid,//订单的order_sn。用时间作为唯一标识符，非主键
            id: _this.data.id,
            phone: phone,
            number: _this.data.number,
            type:3
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function(res) { //后端返回的数据

            var data = res.data;
            // console.log(data);
            // console.log(data["timeStamp"]);
            wx.requestPayment({
              timeStamp: data['timeStamp'],
              nonceStr: data['nonceStr'],
              package: data['package'],
              signType: data['signType'],
              paySign: data['paySign'],
              success: function(res) {
                wx.request({
                  url: 'https://www.yiliyuan.vip/index.php/api/back',
                  data: {
                    phone: wx.getStorageSync("phone"),
                    orderid: time,
                  }
                })
                wx.request({
                  url: 'https://www.yiliyuan.vip/index.php/api/addteam?id=' + id + "&userphoto=" + userphoto + "&name=" + name + "&teamid=" + time, //将客户的头像，昵称，产品的id，产品的图像存到数据库。
                })
                //每买一件。库存都需要减少一件
                wx.request({
                  url: 'https://www.yiliyuan.vip/index.php/api/minkucun?id=' + id,
                })
                wx.showModal({
                  title: '支付成功',
                  content: '',
                })
                _this.setData({
                  shar: true
                })
              },
              fail: function(res) {
                console.log(res);
              }
            })
          }
        })
      }
    })
    //在拼团的项目中需要将这个拼团的订单插入这个个人的表中，不能用那个集体表中，找不到个人的信息；
    
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


})