// page/mai/mai.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    renshu: "",
    name: '',
    number: '',
    price: '',
    zongji: '',
    src: '../../imggoods/1.jpg',
    que: "",
    pintuanteam: [], //拼团成员的数组，里边的元素就是一个成员的信息。也就是把这个商品的拼团成员放在一起；
    teamid:"",
    ing:true,
    complete:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //检查是否登录
  var _this=this;
    var name = options.name;
    var id = options.id;
    var teamid = options.teamid;
    var pname = options.pname;
    var pimage = options.pimage;
    var price = options.price;
    var photo = options.userphoto;
    var number = options.number;
    _this.setData({
      name: pname,
      src: pimage,
      // tuansrc: photo,//这是拼团成员的图像路由，只能由数据库加载，不能由这里加载出来
      // tuanname: name,//这是昵称。和团队的图像路由一样，都是从数据库中加载出来，在这里进行屏蔽
      price: price,
      number: number,
      id: id,
      teamid: teamid
    })
    var phone = wx.getStorageSync("phone");
    var username = app.globalData.name;
    // console.log(phone);
    var phone = wx.getStorageSync("phone");
    if (phone == "") {
      wx.navigateTo({
        url: '../getuserphone/getuserphone',
      })
    }
    if (username == "") {
      wx.navigateTo({
        url: '../getuserinfo/getuserinfo',
      })
    }
    wx.request({
      url: 'https://www.yiliyuan.vip/index.php/api/getteam',
      data:{
        id: id,
        teamid: teamid
      },
      success:function(res){
        var arrmenmber=res.data.data;
        // console.log(arrmenmber);
        
        // var arrteam=[];
        var renshu = res.data.teamnumber;//这个团一共有几个人；
        var que = res.data.teamlacknumber;//还缺几个人
        if (que==0){
          _this.setData({
            ing:false,
            complete:true
          })
        }
        // console.log(renshu);
        for(var i=0;i<arrmenmber.length;i++){
          // console.log(arrmenmber[i]);
          _this.setData({
            pintuanteam: _this.data.pintuanteam.concat(arrmenmber[i]),
          })
        }
        console.log(_this.data.pintuanteam);
        _this.setData({
          renshu: renshu,
          que:que,
        })
      }
    })

  },
  buy: function () {  
    // console.log(phone);
    var _this = this;
    var id = _this.data.id;
    var phone = wx.getStorageSync("phone");
    var teamid=_this.data.teamid;
    var userphoto = app.globalData.photo;
    var name = app.globalData.name;
    var time = Date.parse(new Date());
    wx.login({
      success: function (res) {
        var code = res.code;
        wx.request({
          url: 'https://www.yiliyuan.vip/index.php/api/pay',
          data: {
            code: code,
            total_fee: (_this.data.price) * (_this.data.number),
            name: _this.data.name,
            time: time,
            id: _this.data.id,
            phone: phone,
            number: _this.data.number,
            type:3
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function (res) { //后端返回的数据

            var data = res.data;
            // console.log(data);
            // console.log(data["timeStamp"]);
            wx.requestPayment({
              timeStamp: data['timeStamp'],
              nonceStr: data['nonceStr'],
              package: data['package'],
              signType: data['signType'],
              paySign: data['paySign'],
              success: function (res) {
                wx.request({
                  url: 'https://www.yiliyuan.vip/index.php/api/back',
                  data: {
                    phone: wx.getStorageSync("phone"),
                    orderid: time,
                  }
                })
                wx.showModal({
                  title: '支付成功',
                  content: '',
                })
                _this.setData({
                  shar: true
                })
              },
              fail: function (res) {
                console.log(res);
              }
            })
          }
        })
      }
    })
    wx.request({
      url: 'https://www.yiliyuan.vip/index.php/api/addteam?id=' + id + "&userphoto=" + userphoto + "&name=" + name + "&teamid=" + teamid, //将客户的头像，昵称，产品的id，产品的图像存到数据库。
    })
    //每买一件。库存都需要减少一件
    wx.request({
      url: 'https://www.yiliyuan.vip/index.php/api/minkucun?id=' + id,
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