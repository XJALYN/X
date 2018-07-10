// pages/blogDetail/blogDetail.js
var extend = require("../../utils/extend.js")
var net = require("net")
var bindEvent = require("bindEvent")
var options = {

  /**
   * 页面的初始数据
   */
  data: {
    contentGroupID : 0,
    richTextID: 0,
    author:"",
    created_at:"",
    title:"",
    article:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(options)

    this.setData({
      contentGroupID: options.group_id,
      richTextID :options.id,
      created_at:options.created_at,
      title:options.title,
      author: options.author
    })
    


    this.net_getArticle()
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

Page(extend(options, bindEvent,net))