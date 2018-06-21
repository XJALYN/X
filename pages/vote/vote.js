// pages/vote/vote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:0,name:"腾讯",src:"",count:"3340"},
      { id: 1, name: "阿里巴巴", src: "", count: "1340"},
      { id: 2, name: "百度", src: "", count: "2340"},
    ],
    checked:false
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
  bindSubmit(e){
   this.setData({
     checked:true
   })
  }
})