// pages/youhui/youhui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:false,
    selected:true,
    myticket:[
      {  
        money:30,
        moneyenv:"满100元可用",
        shuoming:"优惠券说明",
        time:"2019-05-20 ~ 2019-05-27",
        fanwei:"仅限于特色项目使用"
      },
      {
        money: 30,
        moneyenv: "满100元可用",
        shuoming: "优惠券说明",
        time: "2019-05-20 ~ 2019-05-27",
        fanwei: "仅限于特色项目使用"
      }
    ],
    musedticket: [{
      money: 30,
      tiaojian: "满100元可用",
      shuoming: "优惠券说明",
      time: "2019-05-20 ~ 2019-05-25",
      fanwei: "仅限于特色项目使用"
    }]
  },
// < text class= 'money' >￥30</text >
//   <text class='moneyenv'>满100元可用</text>
//   <text class='lingquan'>优惠券说明</text>
//   <text class='time'>2019-05-20 ~ 2019-05-25(有效期)</text>
//   <text class='fanwei'>仅限于特色项目使用</text>
  select:function(e){ 
   
    if(e.currentTarget.dataset.my=="my"){
      
      this.setData({
        select: false,
        selected: true,
      })
    } else if (e.currentTarget.dataset.wei == "wei"){
      
      this.setData({
        select: true,
        selected: false,
      })
    }
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