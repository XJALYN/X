// pages/menuImage/menuImage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        title:"群收款",
        src:"/pages/menuImage/images/1.png"
      },
      {
        title:"小视频",
        src:"/pages/menuImage/images/2.png"
      },
      {
        title:"群签到",
        src:"/pages/menuImage/images/3.png"
      },
      {
        title:"群日历",
        src:"/pages/menuImage/images/4.png"
      },
      {
        title:"作业",
        src:"/pages/menuImage/images/5.png"
      },
      {
        title: "群连接",
        src: "/pages/menuImage/images/6.png"
      }
    ]
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
  
  },
  bindChange:function(e){
    wx.showToast({
      title: e.detail.value + "",
      icon:"none"
    })
  }
})