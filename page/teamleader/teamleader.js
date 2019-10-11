// page/shangpin/shangpin.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoucang: 0,
    goumaiyemian: "../../imggoods/1.jpg",
    img: [],
    name: "",
    price: "",
    xiaol: "",
    yuanjia: "",
    kucun: "",
    guige: "",
    shuliang: 1,
    id: '',
  },

  mai: function(e) {
    var price = e.currentTarget.dataset.price;
    var guige = e.currentTarget.dataset.guige;
    var name = e.currentTarget.dataset.name;
    var number = e.currentTarget.dataset.number;
    var src = e.currentTarget.dataset.src;
    var id = e.currentTarget.dataset.id;


    wx.navigateTo({
      url: '../teambuy/teambuy?price=' + price + '&guige=' + guige + '&name=' + name + '&number=' + number + '&src=' + src + "&id=" + id,
    })
  },
  jia: function() {
    var add = this.data.shuliang + 1;

    this.setData({
      shuliang: add,
    })
  },
  jian: function() {
    var add = this.data.shuliang - 1;
    if (add <= 0) {
      add = 0
    }
    this.setData({
      shuliang: add,
    })
  },
  previewImage: function(t) {
    var e = t.currentTarget.dataset.url;
    wx.previewImage({
      current: e,
      urls: [e]
    });
  },
  show: function() {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(500).step();
    // animation.height(340)
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  close: function() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  onShareAppMessage: function(options) {
    console.log(options.target.dataset.pname);
    var pname = options.target.dataset.pname; //产品的名字
    var userphoto = app.globalData.photo; //用户的头像
    var name = app.globalData.name; //用户的昵称
    var pimage = options.target.dataset.src; //产品的图片路由
    var id = options.target.dataset.id; //产品的id
    var _this = this;

    var sharobj = {
      title: name + "分享了" + pname + id,
      path: "/page/pintuantoger/pintuantoger?src=" + userphoto + "&name=" + name,
      success: function(res) {　　　　　　 // 转发成功之后的回调
        　　　　　　
        if (res.errMsg == 'shareAppMessage:ok') {　　
          wx.request({
            url: 'https://www.yiliyuan.vip/index.php/api/addteam?id=' + id + "&userphone=" + userphoto + "&pimage=" + pimage,
          })　　　　
        }
      },
      fail: function() {　　　　　　 // 转发失败之后的回调
        　　　　　　
        if (res.errMsg == 'shareAppMessage:fail cancel') {　　　　　　　　 // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {　 // 转发失败，其中 detail message 为详细失败信息
        }
      },
      complete: function() {
        //转发结束，不管是否成功，都会执行；
      }
    }

    return sharobj;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);

    var arr = {
      "src": options.src
    };
    this.setData({
      img: [arr],
      name: options.productname,
      price: options.price,
      xiaol: options.sale,
      yuanjia: options.yuanjia,
      kucun: options.kucun,
      guige: options.guige,
      goumaiyemian: options.src,
      id: options.id,
    })
  },
  //主要购物车
  gouwu: function(e) {
    wx.showToast({
      title: '已放入购物车',
    })
  },
  shou: function() {
    if (this.data.shoucang == 0) {
      this.setData({
        shoucang: 1
      })
    } else {
      this.setData({
        shoucang: 0
      })
    }
  },
  getback: function() {
    wx.switchTab({
      url: '../../pages/index/index',
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


})