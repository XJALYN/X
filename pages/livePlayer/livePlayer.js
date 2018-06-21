// pages/livePlayer/livePlayer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doc: {
      title: "livePlayer",
      desc: "直播播放组件\n 1.支持多线路\n2.支持弹幕"
    },
    routes: [
      { name: "高清", src: "rtmp://live.hkstv.hk.lxdns.com/live/hks" },
      { name: "普通", src: "rtmp://192.168.119.101/live/001" }
    ],
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