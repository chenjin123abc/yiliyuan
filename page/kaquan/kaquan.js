// page/kaquan/kaquan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ka:[
      {src:"../../img/ka.jpg",
       name:"贵宾卡",
       cishu:30,
       shengyu:30,
       url:"../kadetail/kadetail"
      },
      { src: "../../img/nianka.jpg",
        name: "年卡",
        cishu: 30,
        shengyu: 30,
        url: "../kadetail/kadetail"
       },
      { src: "../../img/yueka.jpg",
        name: "月卡",
        cishu: 30,
        shengyu: 30,
        url: "../kadetail/kadetail"
       },
    ]
  },
  getdetail:function(e){
    console.log(e);
    var cishu=e.currentTarget.dataset.cishu;
    var name = e.currentTarget.dataset.name;
    var shengyu = e.currentTarget.dataset.shengyu;
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url + "?cishu=" + cishu+"&name="+name + "&shengyu=" + shengyu,
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