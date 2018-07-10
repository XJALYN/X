// pages/plugInMarket/plugInMarket.js
var extend = require("../../utils/extend.js")
var bindEvent = require("bindEvent")
var net = require("net")
var options = {

  /**
   * 页面的初始数据
   */
  data: {
    menuList:[],
    activeIndex:"0",
    plugInList:[],
    offset:0,
    limit:20,
    noMore:false,
    loaded:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.net_getPlugInCategory()
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
}

Page(extend(options,net,bindEvent))