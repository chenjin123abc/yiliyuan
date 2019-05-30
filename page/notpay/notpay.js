// page/notpay/notpay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    title:"",
    notpay:[
      {
        time:'2019-02-11',
        danhao:'20190512001',
        src:'../../imggoods/2.jpg',
        price:2998,
        name:'因子微雕',
        number:3,
        zongjia: 100,
      },
      {
        time: '2019-02-11',
        danhao: '20190512002',
        src: '../../imggoods/2.jpg',
        price: 2988,
        name: '因子微雕',
        number: 2,
        zongjia: 100
      }
    ],
    yitpay: [
      {
        time: '2019-02-11',
        danhao: '20190512001',
        src: '../../imggoods/2.jpg',
        price: 2998,
        name: '因子微雕',
        number: 3,
        zongjia: 100,
      },
      {
        time: '2019-02-11',
        danhao: '20190512002',
        src: '../../imggoods/2.jpg',
        price: 2988,
        name: '因子微雕',
        number: 2,
        zongjia: 100
      }
    ],
    wanpay: [
      {
        time: '2019-02-11',
        danhao: '20190512001',
        src: '../../imggoods/2.jpg',
        price: 2998,
        name: '因子微雕',
        number: 3,
        zongjia: 100,
      },
      {
        time: '2019-02-11',
        danhao: '20190512002',
        src: '../../imggoods/2.jpg',
        price: 2988,
        name: '因子微雕',
        number: 2,
        zongjia: 100
      }
    ],
    all: [
      {
        time: '2019-02-11',
        danhao: '20190512001',
        src: '../../imggoods/2.jpg',
        price: 2998,
        name: '因子微雕',
        number: 3,
        zongjia: 100,
      },
      {
        time: '2019-02-11',
        danhao: '20190512002',
        src: '../../imggoods/2.jpg',
        price: 2988,
        name: '因子微雕',
        number: 2,
        zongjia: 100
      }
    ],
  },
  select: function (e) {
    if (e.currentTarget.dataset.daifu == "daifu") {
      this.setData({
        select1: true,
        select2: false,
        select3: false,
        select4: false,
        title:"待支付"
      })
    } else if (e.currentTarget.dataset.yifu == "yifu") {

      this.setData({
        select1: false,
        select2: true,
        select3: false,
        select4: false,
        title: "已支付"
      })
    } else if (e.currentTarget.dataset.daishou == "daishou") {

      this.setData({
        select1: false,
        select2: false,
        select3: true,
        select4: false,
        title: "已完成"
      })
    } else if (e.currentTarget.dataset.yiwancheng == "yiwancheng") {

      this.setData({
        select1: false,
        select2: false,
        select3: false,
        select4: true,
        title: "全部订单"
      })
    }
  },
  zhifu:function(){
    console.log("22222222222");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id=options.id;
    var that=this;
    if(id==1){
      that.setData({
        select1:true,
        title:"待付款"
      })
    }else if (id == 2) {
      that.setData({
        select2: true,
        title: "已支付"
      })
    } else if (id == 3) {
      that.setData({
        select3: true,
        title: "已完成"
      })
    } else if (id == 4) {
      that.setData({
        select4: true,
        title: "全部订单"
      })
    }
    
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