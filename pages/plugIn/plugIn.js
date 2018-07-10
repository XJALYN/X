// pages/plugIn/plugIn.js

var extend = require("../../utils/extend.js")
var bindEvent = require("bindEvent")
var net = require("net")
var options = {

  /**
   * 页面的初始数据
   */
  data: {
    appId:"",
    author:"",
    cover:"",
    created_at:"",
    describe:"",
    title:"",
    author:"",
    contact:"",
    displayImage:"",
    appId: "",
    version: "",
    content_group_id:"",
    course_id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      author: options.author,
      cover: options.cover,
      created_at: options.created_at,
      describe: options.describe,
      title: options.title,
      author: options.author,
      contact: options.contact,
      appId:options.app_id,
      version:options.version,
      displayImage:options.display_image,
      content_group_id: options.content_group_id != null ? options.content_group_id:'',
      course_id: options.course_id != null ? options.course_id:''

    })
     console.log(options)
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

Page(extend(options,bindEvent,net))