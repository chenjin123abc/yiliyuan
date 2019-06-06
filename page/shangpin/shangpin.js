// page/shangpin/shangpin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoucang: 0,
    goumaiyemian: "../../imggoods/1.jpg",
    img: [{
        src: "../../imggoods/1.jpg",
        url: "../../pages/testpage/testpage"
      },
      {
        src: "../../imggoods/2.jpg",
        url: "../testpage/testpage"
      },
      {
        src: "../../imggoods/3.jpg",
        url: "../testpage/testpage"
      },
    ],
    name: "因子微雕",
    price: 2980,
    xiaol: 12,
    yuanjia: 3980,
    kucun:23,
    guige:"盒",
    shuliang:1,
  },
  onShareAppMessage: function() {
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/page/user?id=123'
    }

  },
  mai:function(e){
    var price=e.currentTarget.dataset.price;
    var guige = e.currentTarget.dataset.guige;
    var name = e.currentTarget.dataset.name;
    var number = e.currentTarget.dataset.number;
    var src = e.currentTarget.dataset.src;
    wx.navigateTo({
      url: '../mai/mai?price=' + price + '&guige=' + guige +'&name='+name+'&number='+number+'&src='+src,
    })
  },
  jia:function(){
    var add = this.data.shuliang+1;
    
    this.setData({
      shuliang: add,
    })
  },
  jian: function () {
    var add = this.data.shuliang - 1;
    if (add <= 0) {
      add = 0
    }
    this.setData({
      shuliang: add,
    })
  },
  previewImage: function (t) {
    console.log(t);
    var e = t.currentTarget.dataset.url;
    wx.previewImage({
      current:e,
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
  },
  //主要购物车
  gouwu: function(e) {
    wx.showToast({
      title: '已放入购物车',
    })
  },
  shou: function() {
    console.log(this.data.shoucang);
    if (this.data.shoucang == 0) {
      this.setData({
        shoucang: 1
      })
    }else{
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})