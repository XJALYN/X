// pages/blog/blog.js
var extend = require("../../utils/extend.js")
var net = require("net")
var bindEvent = require("bindEvent")
var options = {

  /**
   * 页面的初始数据
   */
  data: {
    contentGroupID :1530862771932435,
    list: [],
    limit:20,
    offset:0,
    noMore:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.BaaS.login(false).then(res => {
      console.log(res)
      // 登录成功
    }, res => {
      // 登录失败
    })
    this.net_getArticleList(false)
   
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
    this.net_getArticleList(true)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.net_getMoreArticleList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
}

Page(extend(options,net,bindEvent))